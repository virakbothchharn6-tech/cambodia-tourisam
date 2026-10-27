import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import TelegramBot from "./components/TelegramBot";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Detail from "./pages/Detail";
import Booking from "./pages/Booking";
import Favorites from "./pages/Favorites";
import Hotels from "./pages/Hotels";
import PlacesToGo from "./pages/PlacesToGo";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import About from "./pages/About";
import Foods from "./pages/Foods";
import Events from "./pages/Events";
import Tips from "./pages/Tips";
import Converter from "./pages/Converter";

export default function App() {
  const [lang, setLang] = useState("kh");
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem("cambodia_tour_lang");
    if (savedLang) setLang(savedLang);

    const savedTheme = localStorage.getItem("cambodia_tour_theme");
    if (savedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const handleToggleTheme = () => {
    const nextTheme = !isDark;
    setIsDark(nextTheme);
    localStorage.setItem("cambodia_tour_theme", nextTheme ? "dark" : "light");
    if (nextTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <BrowserRouter>
      <div
        className={`min-h-screen flex flex-col font-sans transition-all duration-300 ${
          isDark
            ? "dark-starry-bg text-slate-100"
            : "bg-slate-50 text-slate-800"
        }`}
      >
        <Navbar
          lang={lang}
          setLang={setLang}
          isDark={isDark}
          onToggleTheme={handleToggleTheme}
        />
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Routes>
            <Route path="/" element={<Home lang={lang} isDark={isDark} />} />
            <Route
              path="/explore"
              element={<Explore lang={lang} isDark={isDark} />}
            />
            <Route
              path="/destination/:id"
              element={<Detail lang={lang} isDark={isDark} />}
            />
            <Route
              path="/booking/:id"
              element={<Booking lang={lang} isDark={isDark} />}
            />
            <Route
              path="/favorites"
              element={<Favorites lang={lang} isDark={isDark} />}
            />
            <Route
              path="/hotels"
              element={<Hotels lang={lang} isDark={isDark} />}
            />
            <Route
              path="/places-to-go"
              element={<PlacesToGo lang={lang} isDark={isDark} />}
            />
            <Route
              path="/foods"
              element={<Foods lang={lang} isDark={isDark} />}
            />
            <Route
              path="/events"
              element={<Events lang={lang} isDark={isDark} />}
            />
            <Route
              path="/tips"
              element={<Tips lang={lang} isDark={isDark} />}
            />
            <Route
              path="/converter"
              element={<Converter lang={lang} isDark={isDark} />}
            />
            <Route
              path="/login"
              element={<Login lang={lang} isDark={isDark} />}
            />
            <Route
              path="/admin"
              element={<Admin lang={lang} isDark={isDark} />}
            />
            <Route
              path="/about"
              element={<About lang={lang} isDark={isDark} />}
            />
          </Routes>
        </main>

        <TelegramBot lang={lang} isDark={isDark} />

        <footer
          className={`border-t py-6 text-center text-xs transition-colors ${
            isDark
              ? "border-slate-800/80 bg-slate-950/80 backdrop-blur-md text-slate-400"
              : "border-blue-100 bg-white text-slate-500"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
            <p className="font-bold">
              © 2026 Cambodia Tourism Platform. All Rights Reserved.
            </p>
            <p className="text-amber-400 font-semibold">
              Kingdom of Wonder • Coding Competition
            </p>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}
