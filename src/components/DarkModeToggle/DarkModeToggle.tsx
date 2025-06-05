'use client';

import { FC } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useTheme } from "@/components/providers/ThemeProvider";
import { DarkModeToggleProps } from "./DarkModeToggle.types";

export const DarkModeToggle: FC<DarkModeToggleProps> = ({ className = '' }) => {
  const { theme, setTheme } = useTheme();
  const isDarkMode = theme === 'dark';

  const toggleTheme = () => {
    setTheme(isDarkMode ? 'light' : 'dark');
  }

  return (
    <button
      onClick={toggleTheme}
      className={`w-14 h-7 rounded-full p-1 relative transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-garnet ${className}`}
      style={{
        backgroundColor: '#666'
      }}
      aria-label="Toggle dark mode"
    >
      <div
        className={`w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 ${
          isDarkMode ? 'translate-x-7' : 'translate-x-0'
        }`}
        style={{
          backgroundColor: isDarkMode ? '#000' : '#ffffff'
        }}
      />
      <span className="sr-only">
        {isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      </span>
      <SunIcon className="absolute left-1.5 top-1.5 w-3 h-3 text-yellow-500" />
      <MoonIcon className="absolute right-1.5 top-1.5 w-3 h-3 text-blue-400" />
    </button>
  );
};

export default DarkModeToggle; 