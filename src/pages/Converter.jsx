import React, { useState } from "react";
import { RefreshCw, DollarSign, ArrowRightLeft } from "lucide-react";

export default function Converter({ lang, isDark }) {
  const [amount, setAmount] = useState(10);
  const [currency, setCurrency] = useState("USD");

  // អត្រាប្តូរប្រាក់លំនាំដើម Offline
  const rates = {
    USD: 1,
    KHR: 4050,
    EUR: 0.92,
    THB: 36.5,
  };

  const toKHR =
    currency === "USD"
      ? amount * rates.KHR
      : (amount / rates[currency]) * rates.KHR;
  const toUSD =
    currency === "KHR" ? amount / rates.KHR : amount / rates[currency];

  return (
    <div className="max-w-md mx-auto space-y-6">
      <div className="text-center space-y-1">
        <h1
          className={`text-2xl sm:text-3xl font-black ${isDark ? "text-white" : "text-slate-900"}`}
        >
          {lang === "kh"
            ? "ឧបករណ៍ប្តូររូបិយប័ណ្ណ"
            : "Offline Currency Converter"}
        </h1>
        <p className="text-xs text-slate-400">
          {lang === "kh"
            ? "គណនាអត្រាប្តូរប្រាក់រៀល និងដុល្លារដោយមិនបាច់មាន Internet"
            : "Instant offline conversion between KHR, USD, EUR, and THB"}
        </p>
      </div>

      <div
        className={`p-6 sm:p-8 rounded-3xl border shadow-xl space-y-6 ${
          isDark
            ? "bg-slate-900/90 border-slate-800"
            : "bg-white border-slate-200"
        }`}
      >
        <div>
          <label
            className={`text-xs font-bold block mb-2 ${isDark ? "text-slate-300" : "text-slate-700"}`}
          >
            {lang === "kh" ? "ចំនួនទឹកប្រាក់" : "Enter Amount"}
          </label>
          <div className="flex gap-2">
            <input
              type="number"
              min="0"
              value={amount}
              onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
              className={`flex-1 px-4 py-2.5 rounded-2xl border text-sm font-bold focus:outline-none focus:border-blue-500 ${
                isDark
                  ? "bg-slate-950 border-slate-800 text-white"
                  : "bg-slate-50 border-slate-200 text-slate-900"
              }`}
            />
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className={`px-3 py-2.5 rounded-2xl border text-xs font-black cursor-pointer ${
                isDark
                  ? "bg-slate-950 border-slate-800 text-white"
                  : "bg-slate-50 border-slate-200 text-slate-900"
              }`}
            >
              <option value="USD">USD ($)</option>
              <option value="KHR">KHR (៛)</option>
              <option value="EUR">EUR (€)</option>
              <option value="THB">THB (฿)</option>
            </select>
          </div>
        </div>

        <div
          className={`p-5 rounded-2xl border space-y-3 ${
            isDark
              ? "bg-slate-950 border-slate-800"
              : "bg-blue-50/60 border-blue-100"
          }`}
        >
          <div className="flex justify-between items-center text-xs">
            <span className="text-slate-400 font-bold">
              ស្មើនឹងប្រាក់រៀល (KHR)៖
            </span>
            <span className="text-lg font-black text-blue-500">
              {toKHR.toLocaleString()} ៛
            </span>
          </div>
          <div className="flex justify-between items-center text-xs">
            <span className="text-slate-400 font-bold">
              ស្មើនឹងប្រាក់ដុល្លារ (USD)៖
            </span>
            <span className="text-lg font-black text-emerald-500">
              ${toUSD.toFixed(2)}
            </span>
          </div>
        </div>

        <p className="text-[11px] text-center text-slate-400 font-semibold">
          អត្រាប្តូរប្រាក់ស្ដង់ដារ៖ 1 USD ≈ 4,050 KHR
        </p>
      </div>
    </div>
  );
}
