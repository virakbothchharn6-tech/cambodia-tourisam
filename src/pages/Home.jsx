import React from "react";
import { Link } from "react-router-dom";
import destinations from "../data/destinations.json";
import { MapPin, Star, Compass, PlayCircle, ArrowRight } from "lucide-react";

export default function Home({ lang, isDark }) {
  const featured = destinations.slice(0, 3);

  return (
    <div className="space-y-12">
      {/* Local Video Hero Section (100% Offline) */}
      <section className="relative rounded-3xl overflow-hidden shadow-2xl border border-blue-900/40 bg-slate-950">
        <div className="relative w-full aspect-video max-h-[480px] overflow-hidden bg-black flex items-center justify-center">
          <video
            controls
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/hero.mp4" type="video/mp4" />
            Browser របស់អ្នកមិនគាំទ្រ video tag នេះទេ។
          </video>
        </div>

        <div className="p-6 sm:p-8 bg-gradient-to-r from-blue-950 via-slate-900 to-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/40 border border-blue-400/40 text-xs font-black text-amber-300">
              <PlayCircle className="w-4 h-4" />
              <span>
                {lang === "kh"
                  ? "វីដេអូណែនាំទេសចរណ៍កម្ពុជា"
                  : "Cambodia Travel Video"}
              </span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black text-white drop-shadow-md">
              {lang === "kh"
                ? "ស្វែងយល់ពីភាពអស្ចារ្យនៃកម្ពុជា"
                : "Discover the Magic of Cambodia"}
            </h1>
            <p className="text-xs sm:text-sm text-slate-200 max-w-xl leading-relaxed">
              {lang === "kh"
                ? "ទស្សនារមណីយដ្ឋានអង្គរវត្ត ឆ្នេរសមុទ្រកោះរ៉ុង និងទេសភាពធម្មជាតិស្រស់ត្រកាលនៃព្រះរាជាណាចក្រកម្ពុជា។"
                : "Explore iconic temples, tropical coastlines, and pristine destinations across the Kingdom."}
            </p>
          </div>

          <div className="flex gap-3 shrink-0">
            <Link
              to="/explore"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-black px-6 py-3 rounded-2xl text-xs sm:text-sm shadow-lg shadow-blue-600/30 transition"
            >
              <Compass className="w-4 h-4" />
              <span>{lang === "kh" ? "រុករកកន្លែង" : "Explore Places"}</span>
            </Link>
            <Link
              to="/places-to-go"
              className="flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-100 font-bold px-5 py-3 rounded-2xl text-xs sm:text-sm border border-slate-700 transition"
            >
              <span>{lang === "kh" ? "កាលវិភាគ" : "Itinerary"}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Places */}
      <section className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2
              className={`text-2xl font-black flex items-center gap-2 ${isDark ? "text-white" : "text-slate-900"}`}
            >
              <Star className="w-6 h-6 text-amber-500 fill-amber-500" />
              <span>
                {lang === "kh" ? "កន្លែងទេសចរណ៍ល្បីៗ" : "Top Destinations"}
              </span>
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              {lang === "kh"
                ? "រមណីយដ្ឋានដែលពេញនិយមបំផុត"
                : "Most iconic places in Cambodia"}
            </p>
          </div>
          <Link
            to="/explore"
            className={`text-xs font-black px-4 py-2 rounded-xl transition ${
              isDark
                ? "bg-slate-800 text-blue-400 hover:bg-slate-700"
                : "bg-blue-50 text-blue-600 hover:text-blue-800"
            }`}
          >
            {lang === "kh" ? "មើលទាំងអស់ →" : "View All →"}
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {featured.map((item) => (
            <div
              key={item.id}
              className={`border rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition flex flex-col group ${
                isDark
                  ? "bg-slate-900 border-slate-800"
                  : "bg-white border-slate-200"
              }`}
            >
              <div className="relative overflow-hidden h-52">
                <img
                  src={item.image}
                  alt={item.nameEn}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-blue-900/80 backdrop-blur-md text-white px-2.5 py-1 rounded-lg text-xs font-bold">
                  {item.category}
                </span>
                <span className="absolute top-3 right-3 bg-white/95 backdrop-blur-md text-amber-500 px-2 py-1 rounded-lg text-xs font-bold flex items-center gap-1 shadow-sm">
                  <Star className="w-3.5 h-3.5 fill-amber-500" /> {item.rating}
                </span>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3
                    className={`text-base font-black ${isDark ? "text-white" : "text-slate-900"}`}
                  >
                    {lang === "kh" ? item.nameKh : item.nameEn}
                  </h3>
                  <p className="text-slate-500 text-xs flex items-center gap-1 mt-1 font-semibold">
                    <MapPin className="w-3.5 h-3.5 text-rose-500" />{" "}
                    {item.province}
                  </p>
                </div>
                <Link
                  to={`/destination/${item.id}`}
                  className="w-full text-center py-2.5 rounded-xl bg-blue-600 text-white hover:bg-blue-700 font-black text-xs transition"
                >
                  {lang === "kh" ? "មើលព័ត៌មានលម្អិត" : "View Details"}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
