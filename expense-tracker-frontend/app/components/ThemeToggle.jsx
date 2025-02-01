"use client";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Apply theme based on state
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <button onClick={toggleTheme} className="p-2 rounded border">
      {isDark ? (
        <img
          src="/light-mode.png"
          alt="Switch to light mode"
          className="w-6 h-6"
        />
      ) : (
        <img
          src="/dark-mode.png"
          alt="Switch to dark mode"
          className="w-6 h-6"
        />
      )}
    </button>
  );
};

export default ThemeToggle;
