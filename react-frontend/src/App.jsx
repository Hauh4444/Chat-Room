// External Libraries
import { createTheme, ThemeProvider } from "@mui/material/styles";

// Internal Modules
import PublicRoutes from "@/Routes/PublicRoutes.jsx";


const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});


const App = () => {
    return (
        <ThemeProvider theme={darkTheme}>
            <PublicRoutes />
        </ThemeProvider>
    );
}


export default App
