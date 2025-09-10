
import { useState, useEffect } from "react";

type ScreenSize = "sm" | "md" | "lg";

export const useScreenSize = (): ScreenSize => {
  const getScreenSize = (): ScreenSize => {
    if (typeof window === "undefined") return "lg";
    if (window.innerWidth < 768) {
      return "sm"; // Corresponds to grid-cols-1
    }
    if (window.innerWidth < 1024) {
      return "md"; // Corresponds to sm:grid-cols-2
    }
    return "lg"; // Corresponds to lg:grid-cols-3
  };

  const [screenSize, setScreenSize] = useState<ScreenSize>(getScreenSize());

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(getScreenSize());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenSize;
};
