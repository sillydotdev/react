import { useEffect, useState } from "react";
import "./App.css";
import { ThemeContextProvider } from "./contexts/Theme";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";

function App() {
  const [themeMode, setThemeMode] = useState("light")

  const lightMode = () => {
    setThemeMode("light")
  }

  const darkMode = () => {
    setThemeMode("dark")
  }

  // actually changing the theme
  useEffect( () => {
    const changeTheme = document.querySelector('html').classList
    changeTheme.remove("light", "dark");
    changeTheme.add(themeMode)
  }, [themeMode])

  return (
    <ThemeContextProvider value={{themeMode, lightMode, darkMode}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4"></div>
          <ThemeBtn />
          <div className="w-full max-w-sm mx-auto"></div>
          <Card />
        </div>
      </div>
    </ThemeContextProvider>
  );
}

export default App;
