import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

// Keep the router root aligned with Vite's configured development and Pages base.
const routerBaseName = import.meta.env.BASE_URL;

createRoot(document.getElementById("root")).render(
    <BrowserRouter basename={routerBaseName}>
        <App />
    </BrowserRouter>,
);
