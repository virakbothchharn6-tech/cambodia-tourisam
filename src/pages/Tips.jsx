import React, { useState } from "react";
import {
  PhoneCall,
  ShieldCheck,
  HeartPulse,
  Info,
  HelpCircle,
  AlertCircle,
  Check,
} from "lucide-react";

export default function Tips({ lang, isDark }) {
  const [callingNumber, setCallingNumber] = useState(null);

  const hotlines = [
    {
      titleKh: "នគរបាលទេសចរណ៍ (Tourist Police)",
      titleEn: "Tourist Police",
      number: "117",
      desc: "ជំនួយសន្តិសុខ និងកិច្ចការបន្ទាន់សម្រាប់ភ្ញៀវទេសចរ",
    },
    {
      titleKh: "រថយន្តសង្គ្រោះបន្ទាន់ (Ambulance)",
      titleEn: "Medical Emergency",
      number: "119",
      desc: "សេវាសង្គ្រោះបន្ទាន់ផ្នែកសុខភាព ២៤ ម៉ោង",
    },
    {
      titleKh: "ពន្លត់អគ្គិភ័យ (Fire Emergency)",
      titleEn: "Fire Department",
      number: "118",
      desc: "រថយន្តពន្លត់អគ្គិភ័យបន្ទាន់",
    },
    {
      titleKh: "Hotline ទេសចរណ៍ទូទៅ",
      titleEn: "General Tourism Helpline",
      number: "+85512345678",
      displayNumber: "+855 12 345 678",
      desc: "ផ្តល់ព័ត៌មាន និងដោះស្រាយបញ្ហាដំណើរកម្សាន្ត",
    },
  ];

  const tips = [
    {
      titleKh: "ការប្រើប្រាស់រូបិយប័ណ្ណ (Currency)",
      descKh:
        "នៅកម្ពុជា ប្រាក់រៀល (KHR) និងដុល្លារអាមេរិក (USD) ត្រូវបានប្រើប្រាស់ទូទៅ។ ការទូទាត់តាម Bakong KHQR មានភាពងាយស្រួល និងសុវត្ថិភាពបំផុត។",
    },
    {
      titleKh: "ការស្លៀកពាក់ពេលចូលប្រាសាទ និងវត្តអារាម (Dress Code)",
      descKh:
        "សូមស្លៀកសម្លៀកបំពាក់គ្របជិតស្មា និងជង្គង់ ដើម្បីបង្ហាញការគោរពដល់ទំនៀមទម្លាប់ និងទីសក្ការបូជា។",
    },
    {
      titleKh: "ការធ្វើដំណើរក្នុងក្រុង (Local Transport)",
      descKh:
        "អ្នកអាចប្រើប្រាស់កម្មវិធី PassApp, Grab ឬកក់ឡាន និងជួលម៉ូតូតាមរយៈ Concierge Bot លើ Website នេះបានភ្លាមៗ។",
    },
  ];

  const handleInitiateCall = (h) => {
    setCallingNumber(h);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Call Confirmation Modal Popup */}
      {callingNumber && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-sm p-4">
          <div
            className={`p-6 rounded-3xl max-w-sm w-full text-center space-y-4 shadow-2xl border ${
              isDark
                ? "bg-slate-900 border-slate-800 text-white"
                : "bg-white border-slate-200 text-slate-900"
            }`}
          >
            <div className="w-14 h-14 rounded-2xl bg-rose-500/10 text-rose-500 flex items-center justify-center mx-auto">
              <PhoneCall className="w-7 h-7 animate-bounce" />
            </div>
            <div>
              <h3 className="text-base font-black">
                {lang === "kh"
                  ? "តើអ្នកចង់ខលទៅកាន់លេខនេះ?"
                  : "Call this hotline number?"}
              </h3>
              <p className="text-xl font-black text-rose-500 mt-1">
                {callingNumber.displayNumber || callingNumber.number}
              </p>
              <p className="text-xs text-slate-400 mt-1 font-medium">
                {lang === "kh" ? callingNumber.titleKh : callingNumber.titleEn}
              </p>
            </div>
            <div className="flex gap-2 pt-2">
              <button
                onClick={() => setCallingNumber(null)}
                className="flex-1 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-xs font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
              >
                {lang === "kh" ? "បោះបង់" : "Cancel"}
              </button>
              <a
                href={`tel:${callingNumber.number}`}
                onClick={() => setCallingNumber(null)}
                className="flex-1 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-black shadow-md shadow-rose-600/30 transition flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <PhoneCall className="w-4 h-4" />
                <span>{lang === "kh" ? "ចុចតេឥឡូវនេះ" : "Call Now"}</span>
              </a>
            </div>
          </div>
        </div>
      )}

      <div>
        <h1
          className={`text-2xl sm:text-3xl font-black transition-colors ${isDark ? "text-white" : "text-slate-900"}`}
        >
          {lang === "kh"
            ? "គន្លឹះធ្វើដំណើរ និងលេខទូរស័ព្ទបន្ទាន់"
            : "Travel Tips & Emergency Hotlines"}
        </h1>
        <p
          className={`text-xs sm:text-sm mt-1 transition-colors ${isDark ? "text-slate-300" : "text-slate-500"}`}
        >
          {lang === "kh"
            ? "ព័ត៌មានចាំបាច់ និងលេខទូរស័ព្ទសង្គ្រោះបន្ទាន់ ២៤/៧ សម្រាប់ដំណើរកម្សាន្តប្រកបដោយសុវត្ថិភាព"
            : "Essential guidelines and 24/7 emergency contacts across Cambodia"}
        </p>
      </div>

      {/* Hotline Numbers Grid with Click-to-Call */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {hotlines.map((h, i) => (
          <div
            key={i}
            className={`p-5 rounded-3xl border shadow-sm flex items-center justify-between transition-all hover:shadow-md ${
              isDark
                ? "bg-slate-900/90 border-slate-800"
                : "bg-white border-slate-200"
            }`}
          >
            <div className="space-y-0.5">
              <h3
                className={`text-xs sm:text-sm font-black ${isDark ? "text-white" : "text-slate-900"}`}
              >
                {lang === "kh" ? h.titleKh : h.titleEn}
              </h3>
              <p className="text-[11px] text-slate-400">{h.desc}</p>
            </div>

            {/* Direct Call Trigger */}
            <button
              type="button"
              onClick={() => handleInitiateCall(h)}
              className="px-3.5 py-2.5 rounded-2xl bg-rose-500 hover:bg-rose-600 active:scale-95 text-white font-black text-xs flex items-center gap-1.5 transition shadow-md shadow-rose-500/20 shrink-0 cursor-pointer"
            >
              <PhoneCall className="w-3.5 h-3.5 animate-pulse" />
              <span>{h.displayNumber || h.number}</span>
            </button>
          </div>
        ))}
      </div>

      {/* Guidelines */}
      <div
        className={`p-6 sm:p-8 rounded-3xl border shadow-sm space-y-6 ${
          isDark
            ? "bg-slate-900/90 border-slate-800"
            : "bg-white border-slate-200"
        }`}
      >
        <div className="flex items-center gap-2 text-blue-500">
          <Info className="w-5 h-5" />
          <h2
            className={`text-base font-black ${isDark ? "text-white" : "text-slate-900"}`}
          >
            {lang === "kh"
              ? "ការណែនាំសំខាន់ៗសម្រាប់ដំណើរកម្សាន្ត"
              : "Important Travel Etiquette"}
          </h2>
        </div>
        <div className="space-y-4">
          {tips.map((t, idx) => (
            <div key={idx} className="space-y-1">
              <h4
                className={`text-xs sm:text-sm font-bold ${isDark ? "text-amber-400" : "text-blue-900"}`}
              >
                {idx + 1}. {t.titleKh}
              </h4>
              <p
                className={`text-xs leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}
              >
                {t.descKh}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
