import React from "react";
import ModeButton from "./ModeButton";

const Navbar = () => {
  return (
    <div className="h-20 px-5 bg-white dark:bg-brand flex justify-between items-center border-b-4 border-cyan-300">
      <h1 className="text-xl font-bold">
        <span className="text-purple-400">Vite</span> +
        <span className="text-cyan-400"> React</span> +
        <span className="text-green-300"> Tailwindcss </span>
      </h1>
      <ModeButton />
    </div>
  );
};

export default Navbar;
