import React, { useEffect, useState } from "react";
import Dark from "../assets/image/dark.svg";
import Lite from "../assets/image/lite.svg";

const ModeButton = () => {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode == "light") {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      setMode("dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      setMode("light");
    }
  };

  useEffect(() => {
    if (!localStorage.theme) {
      localStorage.theme = "dark";
    }
    if (localStorage?.theme == "dark") {
      setMode("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <div onClick={toggleMode} className="cursor-pointer " >
      {mode === "light" ? <img src={Dark} /> : <img src={Lite} />}
    </div>
  );
};

export default ModeButton;
