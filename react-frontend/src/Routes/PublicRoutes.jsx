// External Libraries
import { Route, Routes } from "react-router-dom";

// Internal Modules
import Home from "@/Pages/Home.jsx";
import ChatRoom from "@/Pages/ChatRoom.jsx";


const PublicRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/chat-room" element={ <ChatRoom /> } />
        </Routes>
    )
};


export default PublicRoutes;
