// External Libraries
import { Route, Routes } from "react-router-dom";

// Internal Modules
import Home from "@/Pages/Home.jsx";


const PublicRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={ <Home /> } />
        </Routes>
    )
};


export default PublicRoutes;
