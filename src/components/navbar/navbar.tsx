"use client";
import { ThemeButton } from "@/components/buttons/theme-button";

const Navbar = () => {
  return (
    <div className="w-full h-16 backdrop-blur-md fixed top-0 z-[150]">
      <div className="flex justify-between items-center h-full px-6">
        <h1 className="text-2xl font-semibold">{"<JG/>"}</h1>
        <ThemeButton />
      </div>
    </div>
  );
};

export default Navbar;
