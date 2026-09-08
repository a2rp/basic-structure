import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

// GitHub Pages serves this app from the repository path instead of the domain root.
createRoot(document.getElementById("root")).render(
    <BrowserRouter basename="/basic-structure">
        <App />
    </BrowserRouter>,
);
