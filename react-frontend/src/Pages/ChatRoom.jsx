// External Libraries
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { Button, TextField } from "@mui/material";

// Internal Modules
import axiosInstance from "@/API/axiosInstance.js";

// Stylesheets
import "./Pages.css";


const ChatRoom = () => {
    const location = useLocation();
    const filters = Object.fromEntries(new URLSearchParams(location.search).entries());

    const [user, setUser] = useState(null)
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("");

    const messagesEndRef = useRef(null);


    useEffect(() => {
        const getUser = async () => {
            try {
                const res = await axiosInstance.get(`/user/${filters.id}`);
                setUser(res.data.user);
            } catch (err) {
                console.log(err);
            }
        }
        getUser();
    }, [filters.id])


    useEffect(() => {
        const fetchMessages = async () => {
            await getMessages();
        };
        fetchMessages();
    }, []);


    const getMessages = async () => {
        try {
            const res = await axiosInstance.get("/messages/");
            setMessages(res.data.messages);
            setTimeout(() => messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }), 0);
        } catch (err) {
            console.log(err);
        }
    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axiosInstance.post("/messages/", { user_token: user.token, message: message });
            setMessage("");
            getMessages();
        } catch (err) {
            console.log(err);
        }
    }


    return (
        <div className="w-50 vh-100 mx-auto d-flex flex-column justify-content-center align-items-center">
            <h1 className="w-100 m-0 py-4 rounded-4 text-center title">
                Welcome{user && " " + user.name}!
            </h1>

            <div className="w-100 mx-auto d-flex flex-column messages">
                {messages && [...messages].reverse().map((item, index) => (
                    <div className={user && item.user_token === user.token ? "align-self-end" : "align-self-start"} key={index}>
                        <p className="my-2 px-3 py-1 rounded-pill fs-4 message">
                            {item.message}
                        </p>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>

            <form
                className="w-100 mx-auto rounded-1 position-relative d-flex flex-row justify-content-sm-between align-items-center gap-3 text-center form"
                onSubmit={(e) => handleSubmit(e)}
            >
                <TextField
                    className="messageInput"
                    label="Message"
                    variant="outlined"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                />

                <Button className="rounded-1 sendBtn" type="submit">
                    Send
                </Button>
            </form>
        </div>
    );
}

export default ChatRoom;