// External Libraries
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";

// Internal Modules
import axiosInstance from "@/API/axiosInstance.js";

// Stylesheets
import "./Pages.css";


const Home = () => {
    const navigate = useNavigate();

    const [name, setName] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axiosInstance.post("/user/", { name: name });
            navigate(`/chat-room?id=${res.data.user_id}`);
        } catch (err) {
            console.log(err);
        }
    }


    return (
        <div className="vh-100 d-flex flex-column justify-content-center align-items-center gap-3">
            <div className="w-25 p-4 rounded-4 text-center homeCard">
                <h1 className="text-center m-0 p-4 fw-medium title">
                    Sign In
                </h1>

                <form
                    className="py-4 px-4 d-flex flex-column justify-content-center align-items-center gap-3 text-center"
                    onSubmit={(e) => handleSubmit(e)}
                >
                    <TextField
                        className="w-100 nameInput"
                        label="Name"
                        variant="outlined"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />

                    <Button className="w-100 rounded-1 submitBtn" type="submit">
                        Submit
                    </Button>
                </form>
            </div>
        </div>
    )
}


export default Home;