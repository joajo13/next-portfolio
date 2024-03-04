import { MdLightMode, MdModeNight } from "react-icons/md";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const ThemeButton = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <button className="p-2 rounded-lg bg-slate-300/70 hover:bg-slate-100/70 transition-all duration-300 dark:bg-slate-500/30 dark:hover:bg-slate-300/30">
      {resolvedTheme === "dark" ? (
        <MdLightMode className="text-2xl" onClick={() => setTheme("light")} />
      ) : (
        <MdModeNight className="text-2xl" onClick={() => setTheme("dark")} />
      )}
    </button>
  );
};
