import React, { useState } from "react";
import { Utensils, MapPin, Tag, ExternalLink, Compass } from "lucide-react";

export default function Foods({ lang, isDark }) {
  const [selectedCat, setSelectedCat] = useState("All");

  const foodList = [
    {
      id: "f1",
      nameKh: "អាម៉ុកត្រីបុរាណ",
      nameEn: "Traditional Fish Amok",
      category: "Traditional",
      province: "សៀមរាប / កណ្តាល",
      price: "$5 - $8",
      descKh:
        "ម្ហូបតំណាងជាតិខ្មែរ ចម្អិនពីត្រីរ៉ស់ស្រស់ គ្រឿងបុកខ្មែរ ខ្ទិះដូង និងស្លឹកញ ស្លក្នុងកន្ទោងស្លឹកចេក។",
      descEn:
        "Iconic steamed fish curry infused with lemongrass paste, coconut cream, and noni leaves.",
      tag: "Must Try",
      mapQuery: "Khmer Fish Amok Restaurant near me",
    },
    {
      id: "f2",
      nameKh: "ក្តាមថ្មឆាម្រេចខ្ចីកំពត",
      nameEn: "Kampot Pepper Fried Crab",
      category: "Seafood",
      province: "កំពត / កែប",
      price: "$12 - $18",
      descKh:
        "ក្តាមសមុទ្រស្រស់សាច់ផ្អែម ឆាជាមួយម្រេចខ្ចីកំពតដែលមានក្លិនឈ្ងុយ និងរសជាតិហឹរស្រទន់។",
      descEn:
        "Fresh sea crab stir-fried with fragrant, world-famous fresh green Kampot peppercorns.",
      tag: "Popular",
      mapQuery: "Kampot Crab Market Kep seafood restaurants",
    },
    {
      id: "f3",
      nameKh: "គុយទាវភ្នំពេញពិសេស",
      nameEn: "Phnom Penh Noodle Soup",
      category: "Street Food",
      province: "រាជធានីភ្នំពេញ",
      price: "$3 - $5",
      descKh:
        "គុយទាវទឹកស៊ុបឆ្អឹងជ្រូកដ៏ផ្អែមឈ្ងុយ អមដោយសាច់ជ្រូក ប្រហិត និងគ្រឿងសមុទ្រស្រស់ៗ។",
      descEn:
        "Clear pork bone broth served with rice noodles, sliced pork, minced pork, and shrimp.",
      tag: "Breakfast",
      mapQuery: "Phnom Penh Noodle soup restaurant near me",
    },
    {
      id: "f4",
      nameKh: "នំបញ្ចុកសម្លការី / សម្លប្រហើរ",
      nameEn: "Num Banh Chok (Khmer Noodles)",
      category: "Traditional",
      province: "កំពង់ចាម / សៀមរាប",
      price: "$2 - $3",
      descKh:
        "គុយទាវម្សៅអង្ករស្រស់ ស្រោចទឹកសម្លប្រហើរត្រីរ៉ស់ ឬសម្លការី អមដោយបន្លែស្រស់ចម្រុះមុខ។",
      descEn:
        "Fermented rice noodles topped with green herbal fish gravy and assorted crisp vegetables.",
      tag: "Heritage",
      mapQuery: "Num Banh Chok Khmer noodles restaurant near me",
    },
    {
      id: "f5",
      nameKh: "ក្រឡានថ្មគោល",
      nameEn: "Kralan (Sticky Rice in Bamboo)",
      category: "Snack",
      province: "បាត់ដំបង / ក្រចេះ",
      price: "$1 - $2",
      descKh:
        "អង្ករដំណើបដុតក្នុងបំពង់ឫស្សី លាយជាមួយខ្ទិះដូង សណ្តែកខ្មៅ និងស្ករត្នោត ក្លិនឈ្ងុយឈ្ងប់។",
      descEn:
        "Fragrant sticky rice with coconut milk and black beans roasted inside bamboo sections.",
      tag: "Local Favorite",
      mapQuery: "Battambang Thmor Koul Kralan",
    },
    {
      id: "f6",
      nameKh: "បង្អែមផ្លែចេកខ្ទិះដូង",
      nameEn: "Sweet Banana Coconut Dessert",
      category: "Snack",
      province: "ទូទាំងប្រទេស",
      price: "$1 - $1.5",
      descKh:
        "ចេកណាំវ៉ាទុំចម្អិនជាមួយខ្ទិះដូងខាប់ គ្រាប់សារគូ និងល្ងលីង ផ្អែមឈ្ងុយស្រទន់។",
      descEn:
        "Simmered sweet ripe bananas in rich coconut milk with tapioca pearls and sesame seeds.",
      tag: "Dessert",
      mapQuery: "Khmer Traditional Dessert shop near me",
    },
  ];

  const categories = ["All", "Traditional", "Seafood", "Street Food", "Snack"];

  const filtered =
    selectedCat === "All"
      ? foodList
      : foodList.filter((f) => f.category === selectedCat);

  return (
    <div className="space-y-8">
      <div>
        <h1
          className={`text-2xl sm:text-3xl font-black transition-colors ${isDark ? "text-white" : "text-slate-900"}`}
        >
          {lang === "kh"
            ? "ម្ហូប និងអាហារតាមតំបន់"
            : "Khmer Food & Regional Cuisine"}
        </h1>
        <p
          className={`text-xs sm:text-sm mt-1 transition-colors ${isDark ? "text-slate-300" : "text-slate-500"}`}
        >
          {lang === "kh"
            ? "ស្វែងយល់ពីរសជាតិអាហារប្រពៃណី និងចំណីតាមដងផ្លូវដ៏ល្បីល្បាញនៃប្រទេសកម្ពុជា"
            : "Discover authentic culinary heritage and renowned dishes across Cambodia"}
        </p>
      </div>

      {/* Category Pills */}
      <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCat(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer whitespace-nowrap ${
              selectedCat === cat
                ? "bg-blue-600 text-white shadow-md"
                : isDark
                  ? "bg-slate-900 border border-slate-800 text-slate-300"
                  : "bg-white border border-slate-200 text-slate-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Food Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filtered.map((item) => (
          <div
            key={item.id}
            className={`p-6 rounded-3xl border shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-4 ${
              isDark
                ? "bg-slate-900/90 border-slate-800"
                : "bg-white border-slate-200"
            }`}
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1 text-[11px] font-black px-2.5 py-1 rounded-lg bg-amber-500/10 text-amber-500 border border-amber-500/20">
                  <Tag className="w-3 h-3" /> {item.tag}
                </span>
                <span className="text-xs font-black text-blue-500">
                  {item.price}
                </span>
              </div>

              <h3
                className={`text-base font-black ${isDark ? "text-white" : "text-slate-900"}`}
              >
                {lang === "kh" ? item.nameKh : item.nameEn}
              </h3>

              {/* Clickable Province Google Maps link */}
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(item.province + " " + item.nameEn)}`}
                target="_blank"
                rel="noopener noreferrer"
                title="មើលទីតាំងលើ Google Maps"
                className="inline-flex items-center gap-1 text-xs text-rose-500 hover:text-rose-600 font-semibold transition"
              >
                <MapPin className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
                <span>{item.province}</span>
                <ExternalLink className="w-3 h-3 ml-0.5 opacity-70" />
              </a>

              <p
                className={`text-xs leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}
              >
                {lang === "kh" ? item.descKh : item.descEn}
              </p>
            </div>

            {/* Google Maps Button to find nearby restaurants */}
            <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center">
              <span className="text-[11px] text-slate-400 font-semibold">
                {item.category}
              </span>

              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(item.mapQuery)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-600/10 hover:bg-blue-600 text-blue-600 hover:text-white dark:text-blue-400 dark:hover:text-white font-bold text-xs transition border border-blue-600/20 shadow-sm"
              >
                <Compass className="w-3.5 h-3.5" />
                <span>
                  {lang === "kh" ? "រកហាងក្បែរនេះ (Maps)" : "Find Nearby"}
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
