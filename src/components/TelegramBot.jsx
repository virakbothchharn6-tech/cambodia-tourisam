import React, { useState } from "react";
import {
  MessageCircle,
  X,
  Send,
  PhoneCall,
  Car,
  Building,
  Check,
  Bike,
  Compass,
} from "lucide-react";

export default function TelegramBot({ lang, isDark }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text:
        lang === "kh"
          ? "សួស្តី! ខ្ញុំជា Cambodia Travel Assistant 🤖 តើអ្នកត្រូវការកក់ឡាន កក់ម៉ូតូ រកអ្នកនាំផ្លូវ (Tour Guide) ឬលេខទាក់ទងសណ្ឋាគារដែរទេ?"
          : "Hello! I am your Cambodia Travel Assistant 🤖 Need assistance with car, motorbike rental, local tour guide, or hotel hotlines?",
    },
  ]);
  const [inputText, setInputText] = useState("");

  // Telegram Username របស់អ្នក
  const telegramUrl = "https://t.me/Ul_xnma";

  // Quick Action Prompts
  const quickActions = [
    {
      label: lang === "kh" ? "🛵 កក់ម៉ូតូជិះខ្លួនឯង" : "🛵 Rent a Motorbike",
      reply:
        lang === "kh"
          ? "សេវាកម្មជួលម៉ូតូទេសចរណ៍ (Motorbike Rental)៖\n• Honda Scoopy / Click (អូតូ): $10 - $12 / ថ្ងៃ\n• Honda Wave (លេខដៃ): $7 - $8 / ថ្ងៃ\n• Honda ADV / PCX (កម្លាំងខ្លាំង): $15 - $18 / ថ្ងៃ\n✨ ហ្វ្រីមួកសុវត្ថិភាព ២ និងសាំងមួយពេញធុង! សូមចុចប៊ូតុង Telegram ខាងក្រោម (@Ul_xnma) ដើម្បីកក់ម៉ូតូយកដល់កន្លែងស្នាក់នៅ។"
          : "Motorbike Rental Options:\n• Honda Scoopy / Click (Auto): $10 - $12 / day\n• Honda Wave (Semi-auto): $7 - $8 / day\n• Honda ADV / PCX (Touring): $15 - $18 / day\n✨ Free 2 helmets included. Contact via Telegram below (@Ul_xnma) to book!",
    },
    {
      label:
        lang === "kh"
          ? "🧭 កក់អ្នកនាំផ្លូវ (Tour Guide)"
          : "🧭 Book a Tour Guide",
      reply:
        lang === "kh"
          ? "សេវាកម្មមគ្គទេសក៍ទេសចរណ៍ជំនាញ (Tour Guide)៖\n• Guide ភាសាខ្មែរ & អង់គ្លេស: $25 - $30 / ថ្ងៃ\n• Guide ភាសាបារាំង / ចិន / ជប៉ុន: $35 - $45 / ថ្ងៃ\n👨‍🏫 មគ្គទេសក៍មានអាជ្ញាបណ្ណត្រឹមត្រូវពីក្រសួងទេសចរណ៍ ស្គាល់ប្រវត្តិប្រាសាទ និងតំបន់ធម្មជាតិច្បាស់លាស់។ សូមចុចប៊ូតុង Telegram ខាងក្រោម (@Ul_xnma) ដើម្បីជ្រើសរើស Guide!"
          : "Official Licensed Tour Guides:\n• Khmer & English speaking: $25 - $30 / day\n• French / Chinese / Japanese speaking: $35 - $45 / day\n👨‍🏫 Ministry-certified guides. Tap Telegram below (@Ul_xnma) to request!",
    },
    {
      label:
        lang === "kh"
          ? "🚗 ចុះមកដល់មានឡានយកអត់?"
          : "🚗 Airport pickup available?",
      reply:
        lang === "kh"
          ? "បាទមាន! យើងមានសេវាទទួលពីព្រលានយន្តហោះ (Phnom Penh & Siem Reap Angkor International Airport) ទៅកាន់សណ្ឋាគារផ្ទាល់ ២៤/៧។"
          : "Yes! We offer 24/7 airport transfers from Phnom Penh & Siem Reap airports directly to your hotel.",
    },
    {
      label: lang === "kh" ? "🚙 កំណត់ម៉ាកឡានជិះ" : "🚙 Choose vehicle model",
      reply:
        lang === "kh"
          ? "ជម្រើសរថយន្តទេសចរណ៍៖\n1. Hyundai Starex / H1 (ក្រុមគ្រួសារ ៧-១០ កៅអី)\n2. Toyota Alphard (កម្រិត VIP ប្រណីត)\n3. Lexus RX / Highlander (SUV ៤ កៅអី)\n4. Toyota Prius (សន្សំសំចៃ)\nសូមចុចទាក់ទង Telegram ខាងក្រោម (@Ul_xnma) ដើម្បីកក់!"
          : "Vehicle models:\n1. Hyundai Starex / H1 (Family 7-10 seats)\n2. Toyota Alphard (VIP Luxury)\n3. Lexus / Highlander (SUV 4 seats)\n4. Toyota Prius (Budget Eco)\nContact @Ul_xnma on Telegram below to reserve!",
    },
    {
      label:
        lang === "kh"
          ? "🏨 សុំលេខទូរស័ព្ទម្ចាស់សណ្ឋាគារ"
          : "🏨 Get Hotel Contacts",
      reply:
        lang === "kh"
          ? "លេខទូរស័ព្ទទាក់ទងបន្ទាន់ (Hotline 24/7)៖\n• Raffles Le Royal: 023 981 888\n• Sofitel Angkor: 063 964 600\n• Song Saa Private Island: 023 888 894\n• Telegram Support: @Ul_xnma"
          : "Direct Hotel Hotlines:\n• Raffles Le Royal: +855 23 981 888\n• Sofitel Angkor: +855 63 964 600\n• Song Saa Island: +855 23 888 894\n• Telegram Support: @Ul_xnma",
    },
  ];

  const handleSend = (textToSend) => {
    const query = textToSend || inputText;
    if (!query.trim()) return;

    const newMsgs = [...messages, { sender: "user", text: query }];
    setMessages(newMsgs);
    setInputText("");

    setTimeout(() => {
      let botResponse =
        lang === "kh"
          ? "សូមអរគុណចំពោះសំណួរ! អ្នកអាចចុចឆាតទៅកាន់ Telegram ផ្ទាល់តាមប៊ូតុងខាងក្រោម (@Ul_xnma) ដើម្បីទទួលបានការឆ្លើយតបរហ័ស។"
          : "Thank you for your inquiry! You can chat directly with @Ul_xnma on Telegram via the button below.";

      const lowerQ = query.toLowerCase();
      if (
        lowerQ.includes("ម៉ូតូ") ||
        lowerQ.includes("moto") ||
        lowerQ.includes("bike") ||
        lowerQ.includes("scoopy")
      ) {
        botResponse =
          lang === "kh"
            ? "សម្រាប់សេវាកម្មម៉ូតូ យើងមាន Scoopy, Click និង Wave តម្លៃចាប់ពី $7-$12/ថ្ងៃ។ សូមចុចប៊ូតុង Telegram ខាងក្រោម (@Ul_xnma) ដើម្បីកក់យកម៉ូតូ!"
            : "Motorbike rentals start from $7-$12/day. Click the Telegram button below (@Ul_xnma) to book!";
      } else if (
        lowerQ.includes("guide") ||
        lowerQ.includes("នាំផ្លូវ") ||
        lowerQ.includes("មគ្គទេសក៍") ||
        lowerQ.includes("guy")
      ) {
        botResponse =
          lang === "kh"
            ? "យើងមានមគ្គទេសក៍ទេសចរណ៍ (Tour Guide) មានអាជ្ញាបណ្ណផ្លូវការ ចេះច្រើនភាសា។ សូមឆាតទៅកាន់ @Ul_xnma តាម Telegram ខាងក្រោមដើម្បីជ្រើសរើស!"
            : "We provide licensed multi-lingual tour guides. Chat directly with @Ul_xnma via the Telegram button below!";
      } else if (
        lowerQ.includes("ឡាន") ||
        lowerQ.includes("car") ||
        lowerQ.includes("taxi")
      ) {
        botResponse =
          lang === "kh"
            ? "យើងមានឡាន Alphard, Starex, និង SUV ត្រៀមទទួលជូន ២៤ ម៉ោង។ ទំនាក់ទំនងកក់តាម Telegram @Ul_xnma ខាងក្រោម!"
            : "We have Alphard, Starex, and SUV vehicles ready. Contact @Ul_xnma via Telegram below!";
      } else if (
        lowerQ.includes("សណ្ឋាគារ") ||
        lowerQ.includes("hotel") ||
        lowerQ.includes("លេខ")
      ) {
        botResponse =
          lang === "kh"
            ? "Hotline សណ្ឋាគារបន្ទាន់គឺ 012 345 678 ឬទាក់ទងផ្ទាល់តាម Telegram: @Ul_xnma"
            : "Direct hotel support line is +855 12 345 678 or via Telegram: @Ul_xnma";
      }

      setMessages((prev) => [...prev, { sender: "bot", text: botResponse }]);
    }, 500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div
          className={`mb-3 w-80 sm:w-96 rounded-3xl shadow-2xl border flex flex-col overflow-hidden transition-all duration-300 ${
            isDark
              ? "bg-slate-900 border-slate-800 text-white"
              : "bg-white border-slate-200 text-slate-800"
          }`}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-sky-500 p-4 text-white flex items-center justify-between shadow-md">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center font-black text-sm">
                ✈️
              </div>
              <div>
                <h3 className="font-black text-xs sm:text-sm leading-tight">
                  Cambodia Concierge Bot
                </h3>
                <p className="text-[10px] text-blue-100 flex items-center gap-1 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse"></span>
                  @Ul_xnma • Online 24/7
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg hover:bg-white/20 transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Message List */}
          <div className="p-4 h-72 overflow-y-auto space-y-3 text-xs">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex ${m.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-2xl leading-relaxed whitespace-pre-line ${
                    m.sender === "user"
                      ? "bg-blue-600 text-white rounded-br-none shadow-sm"
                      : isDark
                        ? "bg-slate-800 text-slate-200 rounded-bl-none border border-slate-700"
                        : "bg-slate-100 text-slate-800 rounded-bl-none"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Buttons List */}
          <div
            className={`px-3 py-2 border-t flex gap-1.5 overflow-x-auto text-[11px] no-scrollbar ${
              isDark
                ? "border-slate-800 bg-slate-950/60"
                : "border-slate-100 bg-slate-50"
            }`}
          >
            {quickActions.map((qa, i) => (
              <button
                key={i}
                onClick={() => {
                  const newMsgs = [
                    ...messages,
                    { sender: "user", text: qa.label },
                    { sender: "bot", text: qa.reply },
                  ];
                  setMessages(newMsgs);
                }}
                className="shrink-0 px-2.5 py-1.5 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 text-blue-500 font-bold transition border border-blue-500/20 cursor-pointer whitespace-nowrap"
              >
                {qa.label}
              </button>
            ))}
          </div>

          {/* Chat Input & Direct Telegram Link */}
          <div
            className={`p-3 border-t space-y-2 ${isDark ? "border-slate-800 bg-slate-900" : "border-slate-200 bg-white"}`}
          >
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex gap-2"
            >
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder={
                  lang === "kh"
                    ? "សួរពីម៉ូតូ អ្នកនាំផ្លូវ ឡាន..."
                    : "Ask about bike, guide, car..."
                }
                className={`flex-1 px-3 py-2 rounded-xl text-xs border focus:outline-none focus:border-blue-500 ${
                  isDark
                    ? "bg-slate-950 border-slate-800 text-white"
                    : "bg-slate-50 border-slate-200 text-slate-900"
                }`}
              />
              <button
                type="submit"
                className="p-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white transition cursor-pointer"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>

            {/* Direct Telegram User Link */}
            <a
              href={telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-3 rounded-xl bg-sky-500 hover:bg-sky-600 active:scale-[0.98] text-white font-black text-xs flex items-center justify-center gap-2 transition shadow-md shadow-sky-500/20 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>
                {lang === "kh"
                  ? "ឆាតទៅកាន់ Telegram ផ្ទាល់ (@Ul_xnma)"
                  : "Chat on Telegram (@Ul_xnma)"}
              </span>
            </a>
          </div>
        </div>
      )}

      {/* Floating Button Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        title="Chat with Assistant"
        className="w-13 h-13 rounded-2xl bg-gradient-to-tr from-blue-600 to-sky-500 hover:scale-105 active:scale-95 text-white flex items-center justify-center shadow-xl shadow-blue-500/30 transition-all cursor-pointer border-2 border-white/40"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </button>
    </div>
  );
}
