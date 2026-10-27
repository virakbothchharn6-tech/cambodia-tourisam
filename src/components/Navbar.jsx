import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Heart,
  Compass,
  ShieldCheck,
  UserCheck,
  Home,
  Globe,
  Info,
  Hotel,
  Map,
  Moon,
  Sun,
  Menu,
  X,
  LogOut,
  User,
  Utensils,
  Calendar,
  HelpCircle,
  Calculator,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function Navbar({ lang, setLang, isDark, onToggleTheme }) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const user = JSON.parse(
      localStorage.getItem("cambodia_current_user") || "null",
    );
    setCurrentUser(user);
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("cambodia_current_user");
    setCurrentUser(null);
    window.location.reload();
  };

  const toggleLanguage = () => {
    const nextLang = lang === "kh" ? "en" : "kh";
    setLang(nextLang);
    localStorage.setItem("cambodia_tour_lang", nextLang);
  };

  const scrollNav = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -200 : 200;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const navLinks = [
    { path: "/", labelKh: "ទំព័រដើម", labelEn: "Home", icon: Home },
    { path: "/explore", labelKh: "រុករក", labelEn: "Explore", icon: Compass },
    {
      path: "/places-to-go",
      labelKh: "កាលវិភាគ",
      labelEn: "Itinerary",
      icon: Map,
    },
    { path: "/hotels", labelKh: "សណ្ឋាគារ", labelEn: "Hotels", icon: Hotel },
    { path: "/foods", labelKh: "ម្ហូបអាហារ", labelEn: "Foods", icon: Utensils },
    {
      path: "/events",
      labelKh: "ពិធីបុណ្យ",
      labelEn: "Events",
      icon: Calendar,
    },
    {
      path: "/tips",
      labelKh: "គន្លឹះ & សង្គ្រោះ",
      labelEn: "Tips",
      icon: HelpCircle,
    },
    {
      path: "/converter",
      labelKh: "ប្តូរប្រាក់",
      labelEn: "Converter",
      icon: Calculator,
    },
    { path: "/favorites", labelKh: "ពេញចិត្ត", labelEn: "Saved", icon: Heart },
    { path: "/admin", labelKh: "Admin", labelEn: "Admin", icon: ShieldCheck },
  ];

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur-md border-b transition-colors duration-300 ${
        isDark
          ? "bg-slate-950/90 border-slate-800 text-slate-100"
          : "bg-white/95 border-blue-100 text-slate-800"
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-2">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0 mr-2">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-900 to-blue-700 flex items-center justify-center p-2 shadow-md border border-amber-400/50">
            <svg
              viewBox="0 0 64 64"
              fill="none"
              className="w-full h-full text-amber-400"
            >
              <path d="M32 6L37 18H27L32 6Z" fill="#FBBF24" />
              <path d="M20 16L24 24H16L20 16Z" fill="#FBBF24" />
              <path d="M44 16L48 24H40L44 16Z" fill="#FBBF24" />
              <path d="M10 26H54V32H10V26Z" fill="#FDE68A" />
              <path d="M14 32H18V48H14V32Z" fill="#FBBF24" />
              <path d="M24 32H28V48H24V32Z" fill="#FBBF24" />
              <path d="M36 32H40V48H36V32Z" fill="#FBBF24" />
              <path d="M46 32H50V48H46V32Z" fill="#FBBF24" />
              <path d="M6 48H58V58H6V48Z" fill="#D97706" />
            </svg>
          </div>
          <div className="flex flex-col text-left">
            <span
              className={`font-black text-sm sm:text-base leading-tight tracking-wide whitespace-nowrap ${isDark ? "text-white" : "text-blue-950"}`}
            >
              {lang === "kh" ? "ទេសចរណ៍កម្ពុជា" : "Cambodia Tourism"}
            </span>
            <span className="text-[9px] text-amber-400 font-bold tracking-widest uppercase">
              Kingdom of Wonder
            </span>
          </div>
        </Link>

        {/* Desktop Navigation with Left/Right Slider Buttons */}
        <div className="hidden lg:flex items-center flex-1 max-w-2xl xl:max-w-3xl relative px-7">
          {/* Scroll Left Button */}
          <button
            onClick={() => scrollNav("left")}
            className={`absolute left-0 p-1.5 rounded-full border shadow-sm transition z-10 cursor-pointer ${
              isDark
                ? "bg-slate-900 border-slate-700 text-slate-300 hover:text-white"
                : "bg-white border-slate-200 text-slate-600 hover:bg-slate-100"
            }`}
            title="Scroll Left"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Nav Items Container */}
          <div
            ref={scrollContainerRef}
            className="flex items-center gap-1.5 overflow-x-auto no-scrollbar scroll-smooth py-1 w-full"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {navLinks.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all shrink-0 ${
                    isActive
                      ? "bg-blue-600 text-white shadow-md"
                      : isDark
                        ? "text-slate-300 hover:text-white hover:bg-slate-800"
                        : "text-slate-600 hover:text-blue-700 hover:bg-blue-50"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{lang === "kh" ? item.labelKh : item.labelEn}</span>
                </Link>
              );
            })}
          </div>

          {/* Scroll Right Button */}
          <button
            onClick={() => scrollNav("right")}
            className={`absolute right-0 p-1.5 rounded-full border shadow-sm transition z-10 cursor-pointer ${
              isDark
                ? "bg-slate-900 border-slate-700 text-slate-300 hover:text-white"
                : "bg-white border-slate-200 text-slate-600 hover:bg-slate-100"
            }`}
            title="Scroll Right"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Auth & Controls */}
        <div className="flex items-center gap-1.5 shrink-0">
          {currentUser ? (
            <div className="hidden sm:flex items-center gap-1 pl-1">
              <span
                className={`text-[11px] font-bold flex items-center gap-1 px-2 py-1 rounded-xl border ${
                  isDark
                    ? "border-slate-800 bg-slate-900 text-amber-300"
                    : "border-blue-200 bg-blue-50 text-blue-800"
                }`}
              >
                <User className="w-3 h-3" />
                <span>{currentUser.fullName || currentUser.username}</span>
              </span>
              <button
                onClick={handleLogout}
                title="Logout"
                className="p-1.5 rounded-xl text-rose-500 hover:bg-rose-500/10 transition cursor-pointer"
              >
                <LogOut className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className={`hidden sm:flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                location.pathname === "/login"
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-blue-600/10 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white"
              }`}
            >
              <UserCheck className="w-3.5 h-3.5" />
              <span>{lang === "kh" ? "ចូលគណនី" : "Login"}</span>
            </Link>
          )}

          {/* Theme Toggle */}
          <button
            onClick={onToggleTheme}
            title="Toggle Theme"
            className={`p-2 rounded-xl border transition-all cursor-pointer ${
              isDark
                ? "border-amber-400/40 bg-slate-900 text-amber-300 hover:bg-slate-800"
                : "border-blue-200 bg-blue-50 text-blue-700 hover:bg-blue-100"
            }`}
          >
            {isDark ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </button>

          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className={`flex items-center gap-1 px-2.5 py-1.5 rounded-xl border text-xs font-black shadow-sm cursor-pointer ${
              isDark
                ? "border-slate-800 bg-slate-900 text-blue-400"
                : "border-blue-200 bg-blue-50 text-blue-700"
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{lang === "kh" ? "EN" : "ខ្មែរ"}</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl border border-slate-300 dark:border-slate-800 text-slate-700 dark:text-slate-200 cursor-pointer"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className={`lg:hidden px-4 pt-2 pb-6 space-y-2 border-t max-h-[75vh] overflow-y-auto ${
            isDark
              ? "bg-slate-950 border-slate-800"
              : "bg-white border-blue-100"
          }`}
        >
          {navLinks.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : isDark
                      ? "text-slate-300 hover:bg-slate-900"
                      : "text-slate-700 hover:bg-blue-50"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{lang === "kh" ? item.labelKh : item.labelEn}</span>
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
