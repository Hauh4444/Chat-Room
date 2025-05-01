// External Libraries
import { Button, TextField } from "@mui/material";


const Home = () => {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center gap-3 vh-100">
            <div
                className="w-25 p-4 rounded-4 text-center"
                style={{ backgroundColor: "#292b2f" }}
            >
                <h1
                    className="text-center m-0 p-4 fw-medium"
                    style={{ color: "#f5f5f5" }}
                >
                    Sign In
                </h1>
                <div
                    className="text-center py-4 px-4 d-flex flex-column justify-content-center align-items-center gap-3"
                >
                    <TextField
                        className="w-100"
                        style={{ maxWidth: 250, color: "#f5f5f5" }}
                        label="Name"
                        variant="outlined"
                    />
                    <Button
                        className="w-100"
                        style={{ maxWidth: 250, height: 56, textTransform: "none", color: "#f5f5f5" }}
                    >
                        Submit
                    </Button>
                </div>
            </div>
        </div>
    )
}


export default Home;