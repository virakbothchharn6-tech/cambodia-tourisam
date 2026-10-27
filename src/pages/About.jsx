import React from "react";
import { Sparkles, Map, ShieldCheck, HeartHandshake } from "lucide-react";

export default function About({ lang, isDark }) {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header with Auto Theme Text */}
      <div className="text-center space-y-3">
        <div className="w-14 h-14 mx-auto rounded-3xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-500 shadow-md">
          <svg
            viewBox="0 0 64 64"
            fill="none"
            className="w-8 h-8 text-blue-500"
          >
            <path d="M32 6L37 18H27L32 6Z" fill="currentColor" />
            <path d="M20 16L24 24H16L20 16Z" fill="currentColor" />
            <path d="M44 16L48 24H40L44 16Z" fill="currentColor" />
            <path d="M10 26H54V32H10V26Z" fill="currentColor" />
            <path d="M14 32H18V48H14V32Z" fill="currentColor" />
            <path d="M24 32H28V48H24V32Z" fill="currentColor" />
            <path d="M36 32H40V48H36V32Z" fill="currentColor" />
            <path d="M46 32H50V48H46V32Z" fill="currentColor" />
            <path d="M6 48H58V58H6V48Z" fill="currentColor" />
          </svg>
        </div>
        <h1
          className={`text-3xl sm:text-4xl font-black transition-colors ${
            isDark ? "text-white" : "text-slate-900"
          }`}
        >
          {lang === "kh"
            ? "អំពីគេហទំព័រ ទេសចរណ៍កម្ពុជា"
            : "About Cambodia Tourism Platform"}
        </h1>
        <p
          className={`text-xs sm:text-sm max-w-xl mx-auto leading-relaxed transition-colors ${
            isDark ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {lang === "kh"
            ? "វេទិកាឌីជីថលឈានមុខក្នុងការផ្សព្វផ្សាយតំបន់រមណីយដ្ឋានវប្បធម៌ ប្រវត្តិសាស្ត្រ និងធម្មជាតិដ៏ពិសិដ្ឋនៃព្រះរាជាណាចក្រកម្ពុជា។"
            : "A premier digital gateway dedicated to showcasing historical heritage and nature throughout Cambodia."}
        </p>
      </div>

      {/* Main Card */}
      <div
        className={`rounded-3xl p-6 sm:p-8 border shadow-xl transition-colors ${
          isDark
            ? "bg-slate-900/90 border-slate-800"
            : "bg-white border-slate-200"
        }`}
      >
        <div className="flex items-center gap-2.5 text-blue-500 mb-3">
          <Sparkles className="w-5 h-5" />
          <h2
            className={`text-lg font-black transition-colors ${isDark ? "text-white" : "text-slate-900"}`}
          >
            {lang === "kh" ? "គោលបំណងចម្បងនៃគេហទំព័រ" : "Our Mission & Vision"}
          </h2>
        </div>
        <p
          className={`text-xs sm:text-sm leading-relaxed mb-6 transition-colors ${
            isDark ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {lang === "kh"
            ? "គេហទំព័រនេះត្រូវបានបង្កើតឡើងក្នុងគោលដៅផ្តល់ព័ត៌មានលម្អិត ជួយសម្រួលដល់ភ្ញៀវទេសចរជាតិ និងអន្តរជាតិក្នុងការរុករកទិសដៅកម្សាន្ត រៀបចំកាលវិភាគធ្វើដំណើរ និងកក់កន្លែងកម្សាន្តប្រកបដោយទំនុកចិត្ត និងសុវត្ថិភាពខ្ពស់ តាមរយៈបច្ចេកវិទ្យាទូទាត់ប្រាក់ KHQR ទំនើប។"
            : "Built to empower tourists with accurate itineraries, verified destination guides, and seamless Bakong KHQR offline reservations."}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div
            className={`p-4 rounded-2xl border transition-colors ${
              isDark
                ? "bg-slate-950 border-slate-800"
                : "bg-slate-50 border-slate-100"
            }`}
          >
            <Map className="w-5 h-5 text-blue-500 mb-2" />
            <h3
              className={`font-black text-xs sm:text-sm mb-1 ${isDark ? "text-white" : "text-slate-900"}`}
            >
              {lang === "kh" ? "ទិសដៅសម្បូរបែប" : "Diverse Locations"}
            </h3>
            <p className="text-[11px] text-slate-400 leading-normal">
              {lang === "kh"
                ? "ប្រមូលផ្តុំតំបន់ប្រវត្តិសាស្ត្រ កោះ ធម្មជាតិ និងព្រៃភ្នំ"
                : "From ancient temples to virgin coastlines"}
            </p>
          </div>

          <div
            className={`p-4 rounded-2xl border transition-colors ${
              isDark
                ? "bg-slate-950 border-slate-800"
                : "bg-slate-50 border-slate-100"
            }`}
          >
            <ShieldCheck className="w-5 h-5 text-emerald-500 mb-2" />
            <h3
              className={`font-black text-xs sm:text-sm mb-1 ${isDark ? "text-white" : "text-slate-900"}`}
            >
              {lang === "kh" ? "ទូទាត់រហ័ស & ងាយស្រួល" : "Instant KHQR"}
            </h3>
            <p className="text-[11px] text-slate-400 leading-normal">
              {lang === "kh"
                ? "កក់កន្លែង និងទូទាត់តាម Bakong KHQR QR Code"
                : "Streamlined payment confirmation"}
            </p>
          </div>

          <div
            className={`p-4 rounded-2xl border transition-colors ${
              isDark
                ? "bg-slate-950 border-slate-800"
                : "bg-slate-50 border-slate-100"
            }`}
          >
            <HeartHandshake className="w-5 h-5 text-rose-500 mb-2" />
            <h3
              className={`font-black text-xs sm:text-sm mb-1 ${isDark ? "text-white" : "text-slate-900"}`}
            >
              {lang === "kh" ? "លើកស្ទួយទេសចរណ៍" : "Eco-Tourism"}
            </h3>
            <p className="text-[11px] text-slate-400 leading-normal">
              {lang === "kh"
                ? "រួមចំណែកផ្សព្វផ្សាយទេសចរណ៍សហគមន៍ឱ្យកាន់តែរីកចម្រើន"
                : "Supporting local communities"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
