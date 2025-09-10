import "./index.css";
import App from "./App.tsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Pointer } from "./components/Pointer.tsx";
import { useScreenSize } from "./hooks/useScreenSize.ts";

const Root = () => {
  const screenSize = useScreenSize();
  const isMobile = screenSize === "sm";

  return (
    <StrictMode>
      {!isMobile && <Pointer />}
      <App />
    </StrictMode>
  );
};

createRoot(document.getElementById("root")!).render(<Root />);
