"use client";

const Theme = () => {
  const storedTheme = localStorage.getItem("theme");
  const themeClass = storedTheme === "dark" ? "dark" : "light";

  return themeClass;
};

export default Theme;
