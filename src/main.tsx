import "./index.css";
import App from "./App.tsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Pointer } from "./components/Pointer.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Pointer />
    <App />
  </StrictMode>
);
