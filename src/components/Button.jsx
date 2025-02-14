import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  // Get theme from localStorage or default to light mode
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  // Apply theme when the component mounts
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="fixed top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded shadow-md hover:bg-blue-600 transition"
    >
      {darkMode ? "Light Mode" : " Dark Mode"}
    </button>
  );
}
