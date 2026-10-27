import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Heart, Star, MapPin, Trash2 } from "lucide-react";

export default function Favorites({ lang, isDark }) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cambodia_favorites") || "[]");
    setFavorites(data);
  }, []);

  const removeFav = (id) => {
    const updated = favorites.filter((f) => f.id !== id);
    setFavorites(updated);
    localStorage.setItem("cambodia_favorites", JSON.stringify(updated));
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1
          className={`text-2xl sm:text-3xl font-black flex items-center gap-2 transition-colors ${
            isDark ? "text-white" : "text-slate-900"
          }`}
        >
          <Heart className="w-7 h-7 text-rose-500 fill-rose-500" />
          <span>
            {lang === "kh"
              ? "កន្លែងទេសចរណ៍ដែលអ្នកពេញចិត្ត"
              : "Your Favorite Destinations"}
          </span>
        </h1>
        <p
          className={`text-xs sm:text-sm mt-1 transition-colors ${
            isDark ? "text-slate-300" : "text-slate-500"
          }`}
        >
          {lang === "kh"
            ? "បញ្ជីទីកន្លែងដែលអ្នកបានជ្រើសរើស និងចង់ទៅកម្សាន្ត"
            : "List of places you have saved for upcoming trips"}
        </p>
      </div>

      {favorites.length === 0 ? (
        <div
          className={`p-12 rounded-3xl border text-center space-y-4 shadow-sm transition-colors ${
            isDark
              ? "bg-slate-900/90 border-slate-800"
              : "bg-white border-slate-200"
          }`}
        >
          <p
            className={`text-xs sm:text-sm font-bold ${isDark ? "text-slate-400" : "text-slate-600"}`}
          >
            {lang === "kh"
              ? "អ្នកមិនទាន់បានបញ្ចូលកន្លែងពេញចិត្តណាមួយនៅឡើយទេ"
              : "You have not added any favorites yet."}
          </p>
          <Link
            to="/explore"
            className="inline-block px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs transition"
          >
            {lang === "kh" ? "ទៅកាន់ទំព័ររុករក →" : "Explore Destinations →"}
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {favorites.map((item) => (
            <div
              key={item.id}
              className={`border rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between ${
                isDark
                  ? "bg-slate-900/90 border-slate-800"
                  : "bg-white border-slate-200"
              }`}
            >
              <div>
                <div className="relative h-48 overflow-hidden bg-slate-950">
                  <img
                    src={item.image}
                    alt={item.nameEn}
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() => removeFav(item.id)}
                    title="Remove from favorites"
                    className="absolute top-3 right-3 p-2 rounded-xl bg-slate-900/80 hover:bg-rose-600 text-white transition"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
                <div className="p-5 space-y-2">
                  <h3
                    className={`text-base font-black transition-colors ${isDark ? "text-white" : "text-slate-900"}`}
                  >
                    {lang === "kh" ? item.nameKh : item.nameEn}
                  </h3>
                  <p className="text-slate-400 text-xs flex items-center gap-1 font-semibold">
                    <MapPin className="w-3.5 h-3.5 text-rose-500" />{" "}
                    {item.province}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <Link
                  to={`/destination/${item.id}`}
                  className="w-full block text-center py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs transition"
                >
                  {lang === "kh" ? "មើលព័ត៌មានលម្អិត" : "View Details"}
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
