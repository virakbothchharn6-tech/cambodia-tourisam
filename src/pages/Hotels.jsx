import React from "react";
import {
  Star,
  MapPin,
  Wifi,
  Coffee,
  CalendarCheck,
  ExternalLink,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Hotels({ lang, isDark }) {
  const hotels = [
    {
      id: "h1",
      nameKh: "សណ្ឋាគារ រ៉ាហ្វល ឡឺរ៉ូយ៉ាល់",
      nameEn: "Raffles Hotel Le Royal",
      cityKh: "រាជធានីភ្នំពេញ",
      cityEn: "Phnom Penh",
      price: "$180",
      rating: 4.9,
      image: "/hotel_raffless.jpg",
      mapUrl: "https://maps.google.com/?q=Raffles+Hotel+Le+Royal+Phnom+Penh",
    },
    {
      id: "h2",
      nameKh: "សណ្ឋាគារ សូហ្វីតែល អង្គរ ភូគីត្រា",
      nameEn: "Sofitel Angkor Phokeethra Golf & Spa",
      cityKh: "ខេត្តសៀមរាប",
      cityEn: "Siem Reap",
      price: "$160",
      rating: 4.8,
      image: "/hotel_sofitel.jpg",
      mapUrl:
        "https://maps.google.com/?q=Sofitel+Angkor+Phokeethra+Golf+and+Spa+Resort",
    },
    {
      id: "h3",
      nameKh: "រមណីយដ្ឋានកោះឯកជន សុងសា",
      nameEn: "Song Saa Private Island Resort",
      cityKh: "ខេត្តព្រះសីហនុ",
      cityEn: "Sihanoukville",
      price: "$350",
      rating: 4.9,
      image: "/hotel_songsaa.jpg",
      mapUrl: "https://maps.google.com/?q=Song+Saa+Private+Island+Cambodia",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1
          className={`text-2xl sm:text-3xl font-black transition-colors ${
            isDark ? "text-white" : "text-slate-900"
          }`}
        >
          {lang === "kh"
            ? "សណ្ឋាគារ និងកន្លែងស្នាក់នៅ"
            : "Hotels & Accommodations"}
        </h1>
        <p
          className={`text-xs sm:text-sm mt-1 transition-colors ${
            isDark ? "text-slate-300" : "text-slate-500"
          }`}
        >
          {lang === "kh"
            ? "ជ្រើសរើសសណ្ឋាគារ និងរីហ្សតប្រណីតសម្រាប់ដំណើរកម្សាន្តរបស់អ្នក"
            : "Discover top-rated luxury hotels and scenic island resorts in Cambodia"}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {hotels.map((h) => (
          <div
            key={h.id}
            className={`border rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden ${
              isDark
                ? "bg-slate-900/90 border-slate-800"
                : "bg-white border-slate-200"
            }`}
          >
            <div>
              <div className="relative h-52 overflow-hidden bg-slate-950">
                <img
                  src={h.image}
                  alt={h.nameEn}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    if (e.target.src.includes("hotel_raffless.jpg")) {
                      e.target.src = "/hotel_raffles.jpg";
                    }
                  }}
                />
                <span className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-xl text-xs font-bold text-amber-500 flex items-center gap-1 shadow-sm">
                  <Star className="w-3.5 h-3.5 fill-amber-500" /> {h.rating}
                </span>
              </div>

              <div className="p-5 space-y-3">
                {/* Clickable Google Maps Link */}
                <a
                  href={h.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-500 hover:text-rose-600 bg-rose-500/10 px-2.5 py-1 rounded-lg border border-rose-500/20 transition"
                  title="ចុចមើលទីតាំងលើ Google Maps"
                >
                  <MapPin className="w-3.5 h-3.5 fill-rose-500" />
                  <span>{lang === "kh" ? h.cityKh : h.cityEn}</span>
                  <ExternalLink className="w-3 h-3 ml-0.5 opacity-80" />
                </a>

                <h3
                  className={`text-base font-black leading-snug transition-colors ${
                    isDark ? "text-white" : "text-slate-900"
                  }`}
                >
                  {lang === "kh" ? h.nameKh : h.nameEn}
                </h3>
                <div className="flex items-center gap-3 text-xs text-slate-400">
                  <span className="flex items-center gap-1">
                    <Wifi className="w-3.5 h-3.5 text-blue-500" /> Free Wifi
                  </span>
                  <span className="flex items-center gap-1">
                    <Coffee className="w-3.5 h-3.5 text-blue-500" /> Breakfast
                  </span>
                </div>
              </div>
            </div>

            <div
              className={`p-5 pt-0 border-t mt-2 flex items-center justify-between ${
                isDark ? "border-slate-800" : "border-slate-100"
              }`}
            >
              <div>
                <span className="text-xs text-slate-400 block">
                  {lang === "kh" ? "តម្លៃចាប់ពី" : "Starts from"}
                </span>
                <span className="text-blue-500 font-extrabold text-base">
                  {h.price} / យប់
                </span>
              </div>
              <Link
                to={`/booking/hotel-${h.id}?name=${encodeURIComponent(lang === "kh" ? h.nameKh : h.nameEn)}&price=${encodeURIComponent(h.price)}`}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs shadow-md shadow-blue-500/20 transition"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>{lang === "kh" ? "កក់បន្ទប់" : "Book Room"}</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
