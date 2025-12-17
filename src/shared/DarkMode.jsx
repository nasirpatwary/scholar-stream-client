import { useEffect, useState } from "react";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";

const DarkMode = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });
  useEffect(() => {
    const root = document.documentElement;
    if (theme) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);
  return (
    <div className="fixed top-20 z-50 right-0 flex items-center justify-center rounded-l-full">
      <button
        onClick={() => setTheme(!theme)}
        className="px-3 py-1.5 
    rounded-lg
    border 
    bg-gray-100 border-gray-300 text-gray-600
    dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100
    transition-all duration-200"
      >
        {theme ? <MdDarkMode size={24} /> : <MdOutlineLightMode size={24} />}
      </button>
    </div>
  );
};

export default DarkMode;
