import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import destinations from "../data/destinations.json";
import {
  MapPin,
  Star,
  Heart,
  CalendarCheck,
  ExternalLink,
  ArrowLeft,
} from "lucide-react";

export default function Detail({ lang, isDark }) {
  const { id } = useParams();
  const dest = destinations.find((d) => d.id === id);
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("cambodia_favorites") || "[]");
    setIsFav(favs.some((item) => item.id === id));
  }, [id]);

  if (!dest) {
    return (
      <div className="text-center py-20">
        <p className="text-base font-bold text-slate-500">
          រកមិនឃើញទីតាំងនេះទេ!
        </p>
        <Link
          to="/explore"
          className="text-blue-600 underline text-xs mt-2 inline-block"
        >
          ត្រឡប់ទៅរុករកវិញ
        </Link>
      </div>
    );
  }

  const toggleFavorite = () => {
    const favs = JSON.parse(localStorage.getItem("cambodia_favorites") || "[]");
    let updated;
    if (isFav) {
      updated = favs.filter((item) => item.id !== id);
      setIsFav(false);
    } else {
      updated = [...favs, dest];
      setIsFav(true);
    }
    localStorage.setItem("cambodia_favorites", JSON.stringify(updated));
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Link
        to="/explore"
        className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-xl transition ${
          isDark
            ? "bg-slate-900 text-slate-300 hover:bg-slate-800"
            : "bg-white text-slate-600 hover:bg-slate-100 border"
        }`}
      >
        <ArrowLeft className="w-4 h-4" />
        <span>{lang === "kh" ? "ថយក្រោយ" : "Back to Explore"}</span>
      </Link>

      <div
        className={`rounded-3xl overflow-hidden border shadow-xl ${
          isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"
        }`}
      >
        {/* Destination Image */}
        <div className="relative h-72 sm:h-96 w-full overflow-hidden bg-slate-950">
          <img
            src={dest.image}
            alt={dest.nameEn}
            className="w-full h-full object-cover"
          />
          <span className="absolute top-4 left-4 bg-blue-900/80 backdrop-blur-md text-white px-3 py-1 rounded-xl text-xs font-bold">
            {dest.category}
          </span>
        </div>

        {/* Content Details */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1
                className={`text-2xl sm:text-3xl font-black ${isDark ? "text-white" : "text-slate-900"}`}
              >
                {lang === "kh" ? dest.nameKh : dest.nameEn}
              </h1>

              {/* Google Maps Interactive Link */}
              <a
                href={
                  dest.mapUrl ||
                  `https://maps.google.com/?q=${encodeURIComponent(dest.nameEn + " " + dest.province)}`
                }
                target="_blank"
                rel="noopener noreferrer"
                title="បើកមើលទីតាំងលើ Google Maps"
                className="inline-flex items-center gap-1.5 text-rose-500 hover:text-rose-600 font-bold text-xs sm:text-sm mt-2 bg-rose-50 dark:bg-rose-950/40 px-3 py-1 rounded-xl transition border border-rose-200/50"
              >
                <MapPin className="w-4 h-4 fill-rose-500 text-rose-500" />
                <span>{dest.province}</span>
                <span className="text-[11px] text-slate-500 font-medium ml-1">
                  ({lang === "kh" ? "មើលលើ Google Maps" : "View on Google Maps"}
                  )
                </span>
                <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
              </a>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={toggleFavorite}
                className={`flex items-center gap-1.5 px-4 py-2.5 rounded-2xl border text-xs font-bold transition ${
                  isFav
                    ? "bg-rose-50 border-rose-300 text-rose-600"
                    : isDark
                      ? "bg-slate-800 border-slate-700 text-slate-300"
                      : "bg-slate-50 border-slate-200 text-slate-700"
                }`}
              >
                <Heart
                  className={`w-4 h-4 ${isFav ? "fill-rose-500 text-rose-500" : ""}`}
                />
                <span>
                  {isFav
                    ? lang === "kh"
                      ? "បានពេញចិត្ត"
                      : "Favorited"
                    : lang === "kh"
                      ? "ពេញចិត្ត"
                      : "Favorite"}
                </span>
              </button>

              <Link
                to={`/booking/${dest.id}`}
                className="flex items-center gap-1.5 px-5 py-2.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs shadow-lg shadow-emerald-600/30 transition"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>{lang === "kh" ? "កក់កន្លែងនេះ" : "Book Now"}</span>
              </Link>
            </div>
          </div>

          <p
            className={`text-sm sm:text-base leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}
          >
            {lang === "kh" ? dest.descriptionKh : dest.descriptionEn}
          </p>

          <div
            className={`p-4 rounded-2xl border flex items-center justify-between text-xs sm:text-sm ${
              isDark
                ? "bg-slate-950 border-slate-800"
                : "bg-slate-50 border-slate-100"
            }`}
          >
            <div>
              <span className="text-slate-400 block text-[11px]">
                {lang === "kh" ? "តម្លៃសំបុត្រ" : "Ticket Price"}
              </span>
              <span className="text-blue-500 font-extrabold text-base">
                {dest.price}
              </span>
            </div>
            <div className="text-right">
              <span className="text-slate-400 block text-[11px]">
                {lang === "kh" ? "ពិន្ទុវាយតម្លៃ" : "Rating"}
              </span>
              <span className="font-extrabold text-amber-500 flex items-center gap-1">
                <Star className="w-4 h-4 fill-amber-500" /> {dest.rating} / 5.0
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
