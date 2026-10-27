import React from "react";
import { Compass, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function PlacesToGo({ lang, isDark }) {
  const itineraries = [
    {
      titleKh: "ដំណើរសម្ព័ន្ធអង្គរ សៀមរាប ៣ ថ្ងៃ ២ យប់",
      titleEn: "Angkor Heritage Trip (3 Days 2 Nights)",
      stopsKh: [
        "ទស្សនាថ្ងៃរះនៅប្រាសាទអង្គរវត្ត",
        "រុករកប្រាសាទបាយ័ន និងតាព្រហ្ម",
        "ជិះទូកកម្សាន្តបឹងទន្លេសាប",
      ],
      stopsEn: [
        "Sunrise at Angkor Wat Temple",
        "Explore Bayon & Ta Prohm jungle temple",
        "Tonle Sap floating village cruise",
      ],
    },
    {
      titleKh: "ដំណើរកម្សាន្តឆ្នេរសមុទ្រ និងកោះ ២ ថ្ងៃ ១ យប់",
      titleEn: "Coastal & Island Escape (2 Days 1 Night)",
      stopsKh: [
        "ហែលទឹកសមុទ្រកោះរ៉ុងសន្លឹម",
        "ញ៉ាំគ្រឿងសមុទ្រស្រស់នៅកំពត",
        "ជិះទូកកាយ៉ាក់ព្រែកកំពត",
      ],
      stopsEn: [
        "Crystal beach in Koh Rong Sanloem",
        "Fresh seafood feast in Kampot",
        "Sunset kayaking in Kampot river",
      ],
    },
    {
      titleKh: "ដំណើរកម្សាន្តអេកូទេសចរណ៍ មណ្ឌលគិរី ៣ ថ្ងៃ",
      titleEn: "Mondulkiri Nature & Eco-Tour (3 Days)",
      stopsKh: [
        "ទស្សនាទឹកធ្លាក់ប៊ូស្រាដ៏ស្រស់ត្រកាល",
        "ទស្សនាជម្រកសត្វដំរីធម្មជាតិ",
        "ស្រូបខ្យល់អាកាសបរិសុទ្ធសមុទ្រឈើ",
      ],
      stopsEn: [
        "Iconic Bousra double-drop waterfall",
        "Ethical Elephant sanctuary visit",
        "Scenic Sea Forest plateau sunrise",
      ],
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1
          className={`text-2xl sm:text-3xl font-black transition-colors ${
            isDark ? "text-white" : "text-slate-900"
          }`}
        >
          {lang === "kh"
            ? "គោលដៅ និងកាលវិភាគណែនាំ (Places to Go)"
            : "Recommended Itineraries (Places to Go)"}
        </h1>
        <p
          className={`text-xs sm:text-sm mt-1 transition-colors ${
            isDark ? "text-slate-300" : "text-slate-500"
          }`}
        >
          {lang === "kh"
            ? "កាលវិភាគដំណើរកម្សាន្តពេញនិយមរៀបចំយ៉ាងពិសេសសម្រាប់អ្នក"
            : "Curated travel routes crafted for your memorable stay in Cambodia"}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {itineraries.map((it, idx) => (
          <div
            key={idx}
            className={`border rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 ${
              isDark
                ? "bg-slate-900/90 border-slate-800"
                : "bg-white border-slate-200"
            }`}
          >
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-2xl bg-blue-600/10 text-blue-500 flex items-center justify-center">
                <Compass className="w-5 h-5" />
              </div>
              <h3
                className={`text-base font-black leading-snug transition-colors ${
                  isDark ? "text-white" : "text-slate-900"
                }`}
              >
                {lang === "kh" ? it.titleKh : it.titleEn}
              </h3>
              <ul className="space-y-2.5">
                {(lang === "kh" ? it.stopsKh : it.stopsEn).map((stop, sIdx) => (
                  <li
                    key={sIdx}
                    className="flex items-start gap-2 text-xs text-slate-400 leading-relaxed"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{stop}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              to="/explore"
              className="w-full text-center py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs shadow-md shadow-blue-500/20 transition"
            >
              {lang === "kh"
                ? "ស្វែងរកទីកន្លែងពាក់ព័ន្ធ"
                : "Find Related Places"}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
