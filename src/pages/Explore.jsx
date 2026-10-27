import React, { useState } from "react";
import { Link } from "react-router-dom";
import destinations from "../data/destinations.json";
import { Search, MapPin, Star, Sparkles } from "lucide-react";

export default function Explore({ lang, isDark }) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Historical", "Coastal", "Nature", "Culture"];

  const filteredDestinations = destinations.filter((dest) => {
    const matchesCategory =
      selectedCategory === "All" || dest.category === selectedCategory;
    const nameToMatch = lang === "kh" ? dest.nameKh : dest.nameEn;
    const matchesSearch =
      nameToMatch.toLowerCase().includes(search.toLowerCase()) ||
      dest.province.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-8">
      {/* Header Section with Auto Theme Text */}
      <div className="text-center space-y-3">
        <div className="w-12 h-12 mx-auto rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-500 shadow-sm">
          <Sparkles className="w-6 h-6" />
        </div>
        <h1
          className={`text-3xl sm:text-4xl font-black transition-colors duration-300 ${
            isDark ? "text-white" : "text-slate-900"
          }`}
        >
          {lang === "kh" ? "រុករកតំបន់ទេសចរណ៍កម្ពុជា" : "Explore Cambodia"}
        </h1>
        <p
          className={`text-xs sm:text-sm max-w-md mx-auto transition-colors duration-300 ${
            isDark ? "text-slate-300" : "text-slate-500"
          }`}
        >
          {lang === "kh"
            ? "ស្វែងរកទីកន្លែង ឬខេត្តដែលអ្នកចង់ទៅទស្សនាតាមប្រភេទតំបន់ទេសចរណ៍"
            : "Find destinations by keyword, province or category"}
        </p>
      </div>

      {/* Filter & Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
        {/* Search Input */}
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={
              lang === "kh"
                ? "ស្វែងរកទីកន្លែង ឬខេត្ត..."
                : "Search places or provinces..."
            }
            className={`w-full pl-10 pr-4 py-2.5 rounded-2xl text-xs sm:text-sm border transition-all focus:outline-none focus:border-blue-500 ${
              isDark
                ? "bg-slate-900 border-slate-700 text-white placeholder-slate-400 shadow-inner"
                : "bg-white border-slate-200 text-slate-900 placeholder-slate-400 shadow-sm"
            }`}
          />
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/30"
                  : isDark
                    ? "bg-slate-900 text-slate-300 border border-slate-800 hover:bg-slate-800"
                    : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Destinations Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredDestinations.map((item) => (
          <div
            key={item.id}
            className={`border rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group ${
              isDark
                ? "bg-slate-900 border-slate-800"
                : "bg-white border-slate-200"
            }`}
          >
            <div className="relative overflow-hidden h-52 bg-slate-950">
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
                  className={`text-base font-black transition-colors ${
                    isDark ? "text-white" : "text-slate-900"
                  }`}
                >
                  {lang === "kh" ? item.nameKh : item.nameEn}
                </h3>
                <p className="text-slate-400 text-xs flex items-center gap-1 mt-1 font-semibold">
                  <MapPin className="w-3.5 h-3.5 text-rose-500" />{" "}
                  {item.province}
                </p>
              </div>

              <Link
                to={`/destination/${item.id}`}
                className="w-full text-center py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs shadow-md shadow-blue-500/20 transition"
              >
                {lang === "kh" ? "មើលព័ត៌មានលម្អិត" : "View Details"}
              </Link>
            </div>
          </div>
        ))}
      </div>

      {filteredDestinations.length === 0 && (
        <div className="text-center py-16">
          <p
            className={`text-sm font-bold ${isDark ? "text-slate-400" : "text-slate-500"}`}
          >
            {lang === "kh"
              ? "រកមិនឃើញតំបន់ទេសចរណ៍ដែលត្រូវគ្នានឹងការស្វែងរកឡើយ!"
              : "No destinations found matching your query!"}
          </p>
        </div>
      )}
    </div>
  );
}
