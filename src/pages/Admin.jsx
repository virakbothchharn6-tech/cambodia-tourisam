import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  DollarSign,
  Users,
  ShieldCheck,
  Trash2,
  Calendar,
  Lock,
} from "lucide-react";

export default function Admin({ lang, isDark }) {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ត្រួតពិនិត្យសិទ្ធិ Role របស់អ្នកដែលកំពុង Login
    const currentUser = JSON.parse(
      localStorage.getItem("cambodia_current_user") || "null",
    );

    if (!currentUser || currentUser.role !== "admin") {
      setIsAdmin(false);
    } else {
      setIsAdmin(true);
      const data = JSON.parse(
        localStorage.getItem("cambodia_bookings") || "[]",
      );
      setBookings(data);
    }
    setLoading(false);
  }, []);

  const totalRevenue = bookings.reduce(
    (sum, item) => sum + (item.total || 0),
    0,
  );

  const clearAll = () => {
    if (
      window.confirm(
        lang === "kh"
          ? "តើអ្នកពិតជាចង់សម្អាតទិន្នន័យទាំងអស់មែនទេ?"
          : "Clear all bookings?",
      )
    ) {
      localStorage.removeItem("cambodia_bookings");
      setBookings([]);
    }
  };

  if (loading) return null;

  // ប្រសិនបើមិនមែនជា Admin គឺបិទមិនឱ្យមើលឃើញជាដាច់ខាត
  if (!isAdmin) {
    return (
      <div className="max-w-md mx-auto my-16 text-center space-y-4">
        <div
          className={`p-8 rounded-3xl border shadow-xl ${
            isDark
              ? "bg-slate-900/90 border-slate-800"
              : "bg-white border-slate-200"
          }`}
        >
          <div className="w-14 h-14 rounded-2xl bg-rose-500/10 text-rose-500 flex items-center justify-center mx-auto mb-4">
            <Lock className="w-7 h-7" />
          </div>
          <h2
            className={`text-xl font-black mb-2 ${isDark ? "text-white" : "text-slate-900"}`}
          >
            {lang === "kh" ? "តំបន់ការពារសុវត្ថិភាព!" : "Access Denied!"}
          </h2>
          <p className="text-xs text-slate-400 leading-relaxed mb-6 font-medium">
            {lang === "kh"
              ? "ទំព័រនេះសម្រាប់តែអ្នកគ្រប់គ្រង (Admin) ប៉ុណ្ណោះ។ ភ្ញៀវទេសចរទូទៅមិនមានសិទ្ធិចូលមើលទិន្នន័យនេះឡើយ។"
              : "This portal is restricted to system administrators only."}
          </p>
          <Link
            to="/login"
            className="w-full inline-block py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs shadow-md shadow-blue-500/20 transition cursor-pointer"
          >
            {lang === "kh"
              ? "ចូលគណនីជា Admin (Sign in as Admin)"
              : "Sign in as Admin"}
          </Link>
        </div>
      </div>
    );
  }

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
            ? "ផ្ទាំងគ្រប់គ្រង Admin"
            : "Admin Management Dashboard"}
        </h1>
        <p
          className={`text-xs sm:text-sm mt-1 transition-colors ${
            isDark ? "text-slate-300" : "text-slate-500"
          }`}
        >
          {lang === "kh"
            ? "គ្រប់គ្រងការកក់ និងតាមដានចំណូលទេសចរណ៍"
            : "Monitor tourism reservations and local revenue"}
        </p>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div
          className={`p-5 rounded-3xl border shadow-sm flex items-center gap-4 transition-colors ${
            isDark
              ? "bg-slate-900/90 border-slate-800"
              : "bg-white border-slate-200"
          }`}
        >
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
            <DollarSign className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs text-slate-400 font-bold block">
              {lang === "kh" ? "ចំណូលសរុប" : "Total Revenue"}
            </span>
            <span
              className={`text-2xl font-black ${isDark ? "text-white" : "text-slate-900"}`}
            >
              ${totalRevenue}
            </span>
          </div>
        </div>

        <div
          className={`p-5 rounded-3xl border shadow-sm flex items-center gap-4 transition-colors ${
            isDark
              ? "bg-slate-900/90 border-slate-800"
              : "bg-white border-slate-200"
          }`}
        >
          <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-500 flex items-center justify-center">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs text-slate-400 font-bold block">
              {lang === "kh" ? "ចំនួនអ្នកកក់" : "Total Bookings"}
            </span>
            <span
              className={`text-2xl font-black ${isDark ? "text-white" : "text-slate-900"}`}
            >
              {bookings.length}
            </span>
          </div>
        </div>

        <div
          className={`p-5 rounded-3xl border shadow-sm flex items-center gap-4 transition-colors ${
            isDark
              ? "bg-slate-900/90 border-slate-800"
              : "bg-white border-slate-200"
          }`}
        >
          <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center">
            <Calendar className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs text-slate-400 font-bold block">
              {lang === "kh" ? "ស្ថានភាពប្រព័ន្ធ" : "System Status"}
            </span>
            <span className="text-sm font-black text-amber-500">
              Offline Active 100%
            </span>
          </div>
        </div>
      </div>

      {/* Bookings Table */}
      <div
        className={`rounded-3xl border shadow-sm overflow-hidden transition-colors ${
          isDark
            ? "bg-slate-900/90 border-slate-800"
            : "bg-white border-slate-200"
        }`}
      >
        <div className="p-5 flex items-center justify-between border-b border-slate-200 dark:border-slate-800">
          <h2
            className={`font-black text-base ${isDark ? "text-white" : "text-slate-900"}`}
          >
            {lang === "kh" ? "បញ្ជីឈ្មោះភ្ញៀវដែលបានកក់" : "Guest Reservations"}
          </h2>
          {bookings.length > 0 && (
            <button
              onClick={clearAll}
              className="flex items-center gap-1.5 text-xs text-rose-500 hover:text-rose-600 font-bold transition cursor-pointer"
            >
              <Trash2 className="w-4 h-4" />
              <span>{lang === "kh" ? "លុបទិន្នន័យទាំងអស់" : "Clear All"}</span>
            </button>
          )}
        </div>

        {bookings.length === 0 ? (
          <div className="p-12 text-center text-xs text-slate-400 font-bold">
            {lang === "kh"
              ? "មិនទាន់មានទិន្នន័យកក់នៅឡើយទេ"
              : "No bookings recorded yet"}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead
                className={`border-b ${isDark ? "bg-slate-950 border-slate-800 text-slate-400" : "bg-slate-50 border-slate-200 text-slate-600"}`}
              >
                <tr>
                  <th className="p-4 font-black">
                    {lang === "kh" ? "កូដ" : "ID"}
                  </th>
                  <th className="p-4 font-black">
                    {lang === "kh" ? "ឈ្មោះភ្ញៀវ" : "Guest"}
                  </th>
                  <th className="p-4 font-black">
                    {lang === "kh" ? "ទូរស័ព្ទ" : "Phone"}
                  </th>
                  <th className="p-4 font-black">
                    {lang === "kh" ? "ទីតាំង / សណ្ឋាគារ" : "Item"}
                  </th>
                  <th className="p-4 font-black">
                    {lang === "kh" ? "កាលបរិច្ឆេទ" : "Date"}
                  </th>
                  <th className="p-4 font-black">
                    {lang === "kh" ? "សរុប" : "Total"}
                  </th>
                  <th className="p-4 font-black">
                    {lang === "kh" ? "ស្ថានភាព" : "Status"}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                {bookings.map((b) => (
                  <tr
                    key={b.id}
                    className={
                      isDark
                        ? "text-slate-200 hover:bg-slate-800/50"
                        : "text-slate-800 hover:bg-slate-50"
                    }
                  >
                    <td className="p-4 font-mono font-bold text-blue-500">
                      {b.id}
                    </td>
                    <td className="p-4 font-bold">{b.name}</td>
                    <td className="p-4 text-slate-400">{b.phone}</td>
                    <td className="p-4 font-semibold">{b.destName}</td>
                    <td className="p-4 text-slate-400">{b.date}</td>
                    <td className="p-4 font-black text-emerald-500">
                      ${b.total}
                    </td>
                    <td className="p-4">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-black bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                        {b.status || "Paid"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
