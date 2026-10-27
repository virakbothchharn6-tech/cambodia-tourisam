import React, { useState, useEffect } from "react";
import {
  Calendar,
  Sparkles,
  MapPin,
  Clock,
  ExternalLink,
  X,
  Info,
  CheckCircle2,
} from "lucide-react";

export default function Events({ lang, isDark }) {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [now, setNow] = useState(new Date());

  // Update real-time clock every second
  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const events = [
    {
      id: "e1",
      titleKh: "ពិធីបុណ្យភ្ជុំបិណ្ឌ",
      titleEn: "Pchum Ben Festival (Ancestors Day)",
      startDate: new Date("2026-10-09T00:00:00"),
      endDate: new Date("2026-10-12T23:59:59"),
      dateLabelKh: "០៩ - ១២ តុលា ២០២៦ (ភ្ជុំធំ)",
      dateLabelEn: "October 09 - 12, 2026",
      locationKh: "វត្តអារាមទូទាំងព្រះរាជាណាចក្រកម្ពុជា",
      locationEn: "All Buddhist Pagodas across Cambodia",
      mapUrl: "https://maps.google.com/?q=Wat+Phnom+Phnom+Penh",
      descKh:
        "ពិធីបុណ្យសាសនាដ៏ពិសិដ្ឋរយៈពេល ១៥ ថ្ងៃ ដើម្បីឧទ្ទិសកុសលផលបុណ្យជូនដល់ដូនតានិងញាតិសន្តានដែលបានចែកឋាន។",
      descEn:
        "A sacred Buddhist festival dedicated to blessing departed ancestors with food offerings at pagodas.",
      scheduleKh: [
        "ម៉ោង ០៤:០០ ព្រឹក៖ ពិធីបោះបាយបិណ្ឌជុំវិញព្រះវិហារ",
        "ម៉ោង ០៧:០០ ព្រឹក៖ រាប់បាត្រ និងប្រគេនចង្ហាន់ដល់ព្រះសង្ឃ",
        "ម៉ោង ១០:៣០ ព្រឹក៖ ពិធីពហូទេវាដារឆ្លង និងស្ដាប់ព្រះធម៌ទេសនា",
        "ថ្ងៃភ្ជុំធំ (១៥រោច)៖ ពិធីបង្សុកូល និងជូនពរជ័យដល់មាតាបិតា",
      ],
      scheduleEn: [
        "04:00 AM: Bay Ben rice-tossing ritual around the temple sanctuary",
        "07:00 AM: Alms giving and breakfast offering to Buddhist monks",
        "10:30 AM: Chanting and merit-making blessing ceremonies",
        "Final Day: Family reunions and ancestral dedication rituals",
      ],
    },
    {
      id: "e2",
      titleKh: "ព្រះរាជពិធីបុណ្យអុំទូក បណ្តែតប្រទីប និងសំពះព្រះខែ",
      titleEn: "Water Festival (Bon Om Touk)",
      startDate: new Date("2026-11-23T00:00:00"),
      endDate: new Date("2026-11-25T23:59:59"),
      dateLabelKh: "២៣ - ២៥ វិច្ឆិកា ២០២៦",
      dateLabelEn: "November 23 - 25, 2026",
      locationKh: "មាត់ទន្លេសាប មុខព្រះបរមរាជវាំង រាជធានីភ្នំពេញ",
      locationEn: "Tonle Sap Riverfront, Phnom Penh",
      mapUrl: "https://maps.google.com/?q=Royal+Palace+Phnom+Penh",
      descKh:
        "ពិធីប្រណាំងទូកងខ្នាតធំលើដងទន្លេសាប អមដោយការបណ្តែតប្រទីបបំភ្លឺផ្ទៃទឹក និងការបាញ់កាំជ្រួចយ៉ាងអស្ចារ្យ។",
      descEn:
        "Grand boat racing festival along the Tonle Sap, illuminated floats, and night fireworks display.",
      scheduleKh: [
        "ថ្ងៃត្រង់ ម៉ោង ១១:៣០៖ ចាប់ផ្ដើមការប្រណាំងទូកងគូពិសេសៗ",
        "ពេលព្រលប់ ម៉ោង ០៦:០០៖ ការបណ្តែតប្រទីបស្ថាប័នរដ្ឋ និងឯកជនបំភ្លឺផ្ទៃទឹក",
        "ម៉ោង ០៧:០០ យប់៖ ការបាញ់កាំជ្រួចចម្រុះពណ៌ដ៏អស្ចារ្យលើផ្ទៃទន្លេ",
        "រាត្រីថ្ងៃពេញបូណ៌មី៖ ពិធីសំពះព្រះខែ និងអកអំបុកទូទាំងរាជធានី",
      ],
      scheduleEn: [
        "11:30 AM: Grand traditional Dragon Boat races kick off",
        "06:00 PM: Launch of illuminated royal lanterns along the river",
        "07:00 PM: Spectacular public fireworks show",
        "Full Moon Night: Traditional Moon Salutation & Ok Ambok feasts",
      ],
    },
    {
      id: "e3",
      titleKh: "ពិធីបុណ្យចូលឆ្នាំប្រពៃណីជាតិខ្មែរ",
      titleEn: "Khmer Traditional New Year (Choul Chnam Thmey)",
      startDate: new Date("2027-04-13T00:00:00"),
      endDate: new Date("2027-04-16T23:59:59"),
      dateLabelKh: "១៣ - ១៦ មេសា ២០២៧",
      dateLabelEn: "April 13 - 16, 2027",
      locationKh: "អង្គរសង្ក្រាន្ត ខេត្តសៀមរាប និងទូទាំងប្រទេស",
      locationEn: "Angkor Sankranta, Siem Reap & Nationwide",
      mapUrl: "https://maps.google.com/?q=Angkor+Wat+Siem+Reap",
      descKh:
        "ពិធីបុណ្យជាតិធំបំផុតប្រចាំឆ្នាំ ប្រារព្ធពិធីទទួលទេវតាឆ្នាំថ្មី លេងល្បែងប្រជាប្រិយ និងស្រង់ព្រះ។",
      descEn:
        "The monumental harvest festival marking the Khmer New Year with ancient games and temple celebrations.",
      scheduleKh: [
        "ថ្ងៃទី ១ (មហាសង្ក្រាន្ត)៖ ពិធីរៀបចំគ្រឿងសក្ការៈទទួលទេវតាឆ្នាំថ្មី",
        "ថ្ងៃទី ២ (វារៈវនបត)៖ ពិធីជូនអំណោយដល់អ្នកមានគុណ និងសប្បុរសធម៌",
        "ថ្ងៃទី ៣ (វារៈឡើងស័ក)៖ ពិធីពូនភ្នំខ្សាច់ និងស្រង់ព្រះពុទ្ធបដិមា",
      ],
      scheduleEn: [
        "Day 1 (Maha Sankranta): Welcoming the new heavenly Devata",
        "Day 2 (Virak Wanabat): Giving gifts to parents, elders and charity",
        "Day 3 (Vearak Loeng Sak): Sand mound ceremony & Bathing Buddha statues",
      ],
    },
  ];

  // Helper function to compute real status & remaining days
  const getEventStatus = (ev) => {
    const diffStart = ev.startDate.getTime() - now.getTime();
    const diffEnd = ev.endDate.getTime() - now.getTime();

    if (diffEnd < 0) {
      return {
        type: "past",
        badgeKh: "បានបញ្ចប់",
        badgeEn: "Past Event",
        color: "bg-slate-500/10 text-slate-400 border-slate-500/20",
        countdown: lang === "kh" ? "ពិធីនេះបានកន្លងផុតហើយ" : "Event concluded",
      };
    }

    if (diffStart <= 0 && diffEnd >= 0) {
      return {
        type: "active",
        badgeKh: "🎉 កំពុងប្រារព្ធពិធីឥឡូវនេះ!",
        badgeEn: "🎉 Happening Now!",
        color:
          "bg-emerald-500 text-white shadow-lg shadow-emerald-500/30 animate-pulse",
        countdown:
          lang === "kh" ? "កំពុងប្រព្រឹត្តទៅ!" : "In progress right now!",
      };
    }

    // Calculate days remaining
    const days = Math.ceil(diffStart / (1000 * 60 * 60 * 24));
    return {
      type: "upcoming",
      badgeKh: `នៅសល់ ${days} ថ្ងៃទៀត`,
      badgeEn: `${days} Days Left`,
      color:
        "bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/25",
      countdown:
        lang === "kh"
          ? `នឹងមកដល់ក្នុងរយៈពេល ${days} ថ្ងៃទៀត`
          : `Starts in ${days} days`,
    };
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1
          className={`text-2xl sm:text-3xl font-black transition-colors ${isDark ? "text-white" : "text-slate-900"}`}
        >
          {lang === "kh"
            ? "ពិធីបុណ្យ និងព្រឹត្តិការណ៍ប្រពៃណីជាតិ"
            : "Festivals & Cultural Events"}
        </h1>
        <p
          className={`text-xs sm:text-sm mt-1 transition-colors ${isDark ? "text-slate-300" : "text-slate-500"}`}
        >
          {lang === "kh"
            ? "កាលវិភាគពិធីបុណ្យជាតិធំៗ ដើរតាមកាលបរិច្ឆេទជាក់ស្ដែង ព្រមទាំងទីតាំងប្រារព្ធពិធី"
            : "Live calendar tracking authentic Khmer festivals with exact schedules and interactive maps"}
        </p>
      </div>

      {/* Events List */}
      <div className="space-y-6">
        {events.map((ev) => {
          const status = getEventStatus(ev);

          return (
            <div
              key={ev.id}
              className={`p-6 sm:p-8 rounded-3xl border shadow-sm transition-all duration-300 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center ${
                isDark
                  ? "bg-slate-900/90 border-slate-800"
                  : "bg-white border-slate-200 hover:shadow-lg"
              }`}
            >
              <div className="space-y-3 max-w-2xl">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-500">
                  <Sparkles className="w-4 h-4" />
                  <span>{lang === "kh" ? ev.dateLabelKh : ev.dateLabelEn}</span>
                </div>

                <h2
                  className={`text-lg sm:text-xl font-black ${isDark ? "text-white" : "text-slate-900"}`}
                >
                  {lang === "kh" ? ev.titleKh : ev.titleEn}
                </h2>

                {/* Clickable Location to Google Maps */}
                <a
                  href={ev.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-500 hover:text-rose-600 transition bg-rose-500/10 px-3 py-1 rounded-xl border border-rose-500/20"
                  title="ចុចមើលទីតាំងលើ Google Maps"
                >
                  <MapPin className="w-3.5 h-3.5 fill-rose-500" />
                  <span>{lang === "kh" ? ev.locationKh : ev.locationEn}</span>
                  <ExternalLink className="w-3 h-3 ml-0.5 opacity-80" />
                </a>

                <p
                  className={`text-xs sm:text-sm leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}
                >
                  {lang === "kh" ? ev.descKh : ev.descEn}
                </p>
              </div>

              {/* Status & Interactive Button */}
              <div className="flex flex-col items-stretch sm:items-end gap-2 w-full md:w-auto shrink-0">
                <span className="text-[11px] text-slate-400 font-bold text-center sm:text-right">
                  {status.countdown}
                </span>

                <button
                  type="button"
                  onClick={() => setSelectedEvent(ev)}
                  className={`px-5 py-3 rounded-2xl font-black text-xs transition cursor-pointer flex items-center justify-center gap-2 ${status.color}`}
                >
                  <Clock className="w-4 h-4" />
                  <span>{lang === "kh" ? status.badgeKh : status.badgeEn}</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal Popup Showing Exact Dates & Daily Schedule */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-sm p-4">
          <div
            className={`p-6 sm:p-8 rounded-3xl max-w-lg w-full space-y-6 shadow-2xl border transition-all ${
              isDark
                ? "bg-slate-900 border-slate-800 text-white"
                : "bg-white border-slate-200 text-slate-900"
            }`}
          >
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-black text-amber-500 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  {lang === "kh"
                    ? selectedEvent.dateLabelKh
                    : selectedEvent.dateLabelEn}
                </span>
                <h3 className="text-lg sm:text-xl font-black mt-1">
                  {lang === "kh"
                    ? selectedEvent.titleKh
                    : selectedEvent.titleEn}
                </h3>
              </div>
              <button
                onClick={() => setSelectedEvent(null)}
                className="p-1.5 rounded-xl hover:bg-slate-500/10 transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Location with Maps */}
            <div
              className={`p-4 rounded-2xl border flex items-center justify-between ${
                isDark
                  ? "bg-slate-950 border-slate-800"
                  : "bg-slate-50 border-slate-200"
              }`}
            >
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-rose-500 shrink-0" />
                <span className="text-xs font-bold text-slate-400">
                  {lang === "kh"
                    ? selectedEvent.locationKh
                    : selectedEvent.locationEn}
                </span>
              </div>
              <a
                href={selectedEvent.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 rounded-lg bg-blue-600 text-white font-bold text-[11px] flex items-center gap-1 shadow-sm shrink-0"
              >
                <span>Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Daily Detailed Schedule */}
            <div className="space-y-3">
              <h4 className="text-xs font-black text-blue-500 flex items-center gap-1.5">
                <Info className="w-4 h-4" />
                <span>
                  {lang === "kh"
                    ? "កម្មវិធី និងកាលវិភាគពិធីបុណ្យ"
                    : "Detailed Program Schedule"}
                </span>
              </h4>
              <div className="space-y-2">
                {(lang === "kh"
                  ? selectedEvent.scheduleKh
                  : selectedEvent.scheduleEn
                ).map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2.5 text-xs leading-relaxed"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span
                      className={isDark ? "text-slate-300" : "text-slate-700"}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={() => setSelectedEvent(null)}
              className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-black transition cursor-pointer"
            >
              {lang === "kh" ? "បិទផ្ទាំងនេះ" : "Close"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
