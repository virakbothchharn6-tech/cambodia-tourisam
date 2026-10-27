import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation, Link } from "react-router-dom";
import destinations from "../data/destinations.json";
import {
  CheckCircle,
  Calendar,
  User,
  Phone,
  DollarSign,
  ShieldAlert,
  LogIn,
  Lock,
  Printer,
} from "lucide-react";

export default function Booking({ lang, isDark }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const user = JSON.parse(
      localStorage.getItem("cambodia_current_user") || "null",
    );
    setCurrentUser(user);
    if (user) {
      setForm((prev) => ({
        ...prev,
        name: user.fullName || user.username || "",
        phone: user.phone || "",
      }));
    }
  }, []);

  const searchParams = new URLSearchParams(location.search);
  const customName = searchParams.get("name");
  const customPrice = searchParams.get("price");

  const dest = destinations.find((d) => d.id === id);
  const bookingTitle =
    customName ||
    (dest ? (lang === "kh" ? dest.nameKh : dest.nameEn) : "សេវាកម្មទេសចរណ៍");
  const basePrice = customPrice
    ? parseInt(customPrice.replace("$", ""))
    : dest && dest.price !== "Free"
      ? parseInt(dest.price.replace("$", ""))
      : 10;

  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    guests: 1,
  });
  const [step, setStep] = useState(1);
  const [hasScanned, setHasScanned] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [bookingId, setBookingId] = useState("");

  const total = basePrice * form.guests;

  const handleSubmitInfo = (e) => {
    e.preventDefault();

    // ពិនិត្យមើល Auth មុននឹងឱ្យទៅ Step 2 (ចេញ KHQR)
    if (!currentUser) {
      navigate("/login", {
        state: { from: location.pathname + location.search },
      });
      return;
    }

    if (!form.name || !form.phone || !form.date) return;
    setStep(2);
  };

  const handleConfirmPay = () => {
    if (!hasScanned) {
      setShowWarning(true);
      return;
    }
    const generatedId = "BK-" + Date.now().toString().slice(-4);
    setBookingId(generatedId);

    const existing = JSON.parse(
      localStorage.getItem("cambodia_bookings") || "[]",
    );
    const newBooking = {
      id: generatedId,
      destName: bookingTitle,
      ...form,
      total,
      bookedBy: currentUser?.username || "Guest",
      dateCreated: new Date().toLocaleDateString(),
      status: "Paid",
    };
    localStorage.setItem(
      "cambodia_bookings",
      JSON.stringify([newBooking, ...existing]),
    );
    setStep(3);
  };

  return (
    <div className="max-w-md mx-auto">
      {/* Alert Warning Popup */}
      {showWarning && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-3xl p-6 max-w-sm w-full text-center space-y-4 shadow-2xl border border-rose-200">
            <div className="w-12 h-12 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center mx-auto">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <h3 className="text-base font-black text-slate-800">
              {lang === "kh"
                ? "សូមស្កេនបង់លុយសិន!"
                : "Please Scan to Pay First!"}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              {lang === "kh"
                ? "សូមធ្វើការស្កេនទូទាត់ប្រាក់តាម Bakong KHQR រួចចុចធីក (Check) លើប្រអប់បញ្ជាក់ជាមុនសិន។"
                : "Please scan the KHQR code and tick the confirmation box before finalizing."}
            </p>
            <button
              onClick={() => setShowWarning(false)}
              className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs transition cursor-pointer"
            >
              {lang === "kh" ? "យល់ព្រម ខ្ញុំនឹងស្កេន" : "Got it"}
            </button>
          </div>
        </div>
      )}

      <div
        className={`border rounded-3xl p-6 sm:p-8 shadow-xl space-y-6 transition-colors ${
          isDark
            ? "bg-slate-900/90 border-slate-800"
            : "bg-white border-slate-200"
        }`}
      >
        <div className="text-center space-y-1">
          <h1
            className={`text-2xl font-black ${isDark ? "text-white" : "text-blue-950"}`}
          >
            {lang === "kh" ? "កក់ដំណើរកម្សាន្ត" : "Reservation & Booking"}
          </h1>
          <p className="text-sm font-black text-blue-500">{bookingTitle}</p>
        </div>

        {/* បង្ហាញ Card ក្រើនរំលឹកប្រសិនបើមិនទាន់ Login */}
        {!currentUser && (
          <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-500 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 shrink-0" />
              <span className="text-xs font-bold">
                {lang === "kh"
                  ? "តម្រូវឱ្យចូលគណនីមុនពេលបង់ប្រាក់ KHQR"
                  : "Account required to unlock KHQR payment"}
              </span>
            </div>
            <Link
              to="/login"
              state={{ from: location.pathname + location.search }}
              className="px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs whitespace-nowrap transition shadow-sm"
            >
              {lang === "kh" ? "ចូលគណនី" : "Login"}
            </Link>
          </div>
        )}

        {step === 1 && (
          <form onSubmit={handleSubmitInfo} className="space-y-4">
            <div>
              <label
                className={`text-xs font-bold flex items-center gap-1.5 mb-1.5 ${isDark ? "text-slate-300" : "text-slate-700"}`}
              >
                <User className="w-3.5 h-3.5 text-blue-500" />
                <span>{lang === "kh" ? "ឈ្មោះអ្នកកក់" : "Full Name"}</span>
              </label>
              <input
                type="text"
                required
                placeholder="ឈ្មោះពេញរបស់អ្នក"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={`w-full px-4 py-2.5 rounded-2xl border text-xs sm:text-sm focus:border-blue-600 focus:outline-none transition ${
                  isDark
                    ? "bg-slate-950 border-slate-800 text-white"
                    : "bg-slate-50 border-slate-200 text-slate-900"
                }`}
              />
            </div>

            <div>
              <label
                className={`text-xs font-bold flex items-center gap-1.5 mb-1.5 ${isDark ? "text-slate-300" : "text-slate-700"}`}
              >
                <Phone className="w-3.5 h-3.5 text-blue-500" />
                <span>{lang === "kh" ? "លេខទូរស័ព្ទ" : "Phone Number"}</span>
              </label>
              <input
                type="tel"
                required
                placeholder="012 345 678"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className={`w-full px-4 py-2.5 rounded-2xl border text-xs sm:text-sm focus:border-blue-600 focus:outline-none transition ${
                  isDark
                    ? "bg-slate-950 border-slate-800 text-white"
                    : "bg-slate-50 border-slate-200 text-slate-900"
                }`}
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label
                  className={`text-xs font-bold flex items-center gap-1.5 mb-1.5 ${isDark ? "text-slate-300" : "text-slate-700"}`}
                >
                  <Calendar className="w-3.5 h-3.5 text-blue-500" />
                  <span>{lang === "kh" ? "កាលបរិច្ឆេទ" : "Date"}</span>
                </label>
                <input
                  type="date"
                  required
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  className={`w-full px-3 py-2.5 rounded-2xl border text-xs focus:border-blue-600 focus:outline-none transition ${
                    isDark
                      ? "bg-slate-950 border-slate-800 text-white"
                      : "bg-slate-50 border-slate-200 text-slate-900"
                  }`}
                />
              </div>
              <div>
                <label
                  className={`text-xs font-bold flex items-center gap-1.5 mb-1.5 ${isDark ? "text-slate-300" : "text-slate-700"}`}
                >
                  <DollarSign className="w-3.5 h-3.5 text-blue-500" />
                  <span>
                    {lang === "kh" ? "ចំនួនសំបុត្រ/បន្ទប់" : "Quantity"}
                  </span>
                </label>
                <input
                  type="number"
                  min="1"
                  max="15"
                  value={form.guests}
                  onChange={(e) =>
                    setForm({ ...form, guests: parseInt(e.target.value) || 1 })
                  }
                  className={`w-full px-3 py-2.5 rounded-2xl border text-xs focus:border-blue-600 focus:outline-none transition ${
                    isDark
                      ? "bg-slate-950 border-slate-800 text-white"
                      : "bg-slate-50 border-slate-200 text-slate-900"
                  }`}
                />
              </div>
            </div>

            <div
              className={`p-4 rounded-2xl border flex justify-between items-center text-sm ${
                isDark
                  ? "bg-slate-950 border-slate-800"
                  : "bg-blue-50 border-blue-100"
              }`}
            >
              <span
                className={
                  isDark ? "text-slate-300" : "text-slate-700 font-bold"
                }
              >
                {lang === "kh" ? "សរុបទឹកប្រាក់" : "Total Price"}:
              </span>
              <span className="text-2xl font-black text-blue-500">
                ${total}
              </span>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs sm:text-sm shadow-md shadow-blue-500/20 transition cursor-pointer flex items-center justify-center gap-2"
            >
              <span>
                {currentUser
                  ? lang === "kh"
                    ? "បន្តទៅបង់ប្រាក់ KHQR →"
                    : "Proceed to KHQR Pay →"
                  : lang === "kh"
                    ? "ចូលគណនីដើម្បីបន្តទៅ KHQR →"
                    : "Login to Proceed to KHQR →"}
              </span>
            </button>
          </form>
        )}

        {step === 2 && (
          <div className="space-y-4 text-center">
            {/* Real KHQR Image */}
            <div className="p-2 bg-white rounded-2xl inline-block shadow-lg border border-slate-200 mx-auto">
              <img
                src="/khqr.jpg"
                alt="CHHARN VIRAKBOTH KHQR"
                className="w-64 max-h-96 object-contain mx-auto rounded-xl"
              />
            </div>

            <div className="space-y-1">
              <p className="text-xs text-slate-500">
                {lang === "kh" ? "ទឹកប្រាក់ត្រូវទូទាត់" : "Payment Amount"}
              </p>
              <p className="text-2xl font-black text-blue-500">${total}.00</p>
              <p className="text-[11px] text-slate-400 font-medium">
                {lang === "kh"
                  ? "ស្កេនជាមួយ Bakong ឬ Mobile Banking ណាមួយ"
                  : "Scan with Bakong or any Banking App"}
              </p>
            </div>

            {/* Checkbox */}
            <div
              className={`p-3.5 rounded-2xl border text-left ${
                isDark
                  ? "bg-slate-950 border-slate-800"
                  : "bg-blue-50 border-blue-100"
              }`}
            >
              <label className="flex items-center gap-2.5 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={hasScanned}
                  onChange={(e) => {
                    setHasScanned(e.target.checked);
                    if (e.target.checked) setShowWarning(false);
                  }}
                  className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 border-slate-300"
                />
                <span
                  className={`text-xs font-bold ${isDark ? "text-slate-200" : "text-slate-800"}`}
                >
                  {lang === "kh"
                    ? "ខ្ញុំបានស្កេន និងផ្ទេរប្រាក់រួចរាល់ហើយ"
                    : "I have scanned and completed the payment"}
                </span>
              </label>
            </div>

            <div className="flex gap-2 pt-1">
              <button
                onClick={() => setStep(1)}
                className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                  isDark
                    ? "bg-slate-800 text-slate-300 hover:bg-slate-700"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {lang === "kh" ? "ថយក្រោយ" : "Back"}
              </button>
              <button
                onClick={handleConfirmPay}
                className="flex-1 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-black shadow-md shadow-blue-500/20 transition cursor-pointer"
              >
                {lang === "kh" ? "ខ្ញុំបានកក់រួចរាល់" : "Confirm Booking"}
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="text-center py-6 space-y-5">
            <CheckCircle className="w-14 h-14 text-emerald-500 mx-auto" />
            <div className="space-y-1">
              <h2
                className={`text-xl font-black ${isDark ? "text-white" : "text-slate-900"}`}
              >
                {lang === "kh" ? "ការកក់ជោគជ័យ!" : "Booking Confirmed!"}
              </h2>
              <p className="text-xs text-slate-400 font-medium max-w-xs mx-auto">
                {lang === "kh"
                  ? "ទិន្នន័យនៃការកក់ត្រូវបានកត់ត្រាចូលក្នុងប្រព័ន្ធរួចរាល់។"
                  : "Your reservation has been recorded successfully."}
              </p>
            </div>

            {/* ប័ណ្ណវិក្កយបត្រសង្ខេប (Booking Receipt Card) */}
            <div
              className={`p-4 rounded-2xl border text-left text-xs space-y-2 ${
                isDark
                  ? "bg-slate-950 border-slate-800 text-slate-300"
                  : "bg-slate-50 border-slate-200 text-slate-700"
              }`}
            >
              <div className="flex justify-between border-b pb-2 border-slate-200 dark:border-slate-800">
                <span className="text-slate-400">
                  {lang === "kh" ? "លេខកូដកក់" : "Booking ID"}:
                </span>
                <span className="font-mono font-bold text-blue-500">
                  {bookingId || "BK-" + Date.now().toString().slice(-4)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">
                  {lang === "kh" ? "ឈ្មោះភ្ញៀវ" : "Guest"}:
                </span>
                <span className="font-bold">{form.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">
                  {lang === "kh" ? "ទូរស័ព្ទ" : "Phone"}:
                </span>
                <span>{form.phone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">
                  {lang === "kh" ? "កម្មវិធី/ទីតាំង" : "Service"}:
                </span>
                <span className="font-bold">{bookingTitle}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">
                  {lang === "kh" ? "កាលបរិច្ឆេទ" : "Date"}:
                </span>
                <span>{form.date}</span>
              </div>
              <div className="flex justify-between border-t pt-2 border-slate-200 dark:border-slate-800">
                <span className="font-bold">
                  {lang === "kh" ? "ស្ថានភាពបង់ប្រាក់" : "Payment Status"}:
                </span>
                <span className="font-black text-emerald-500">PAID (KHQR)</span>
              </div>
            </div>

            {/* ប៊ូតុងបញ្ជា Print Receipt & View Admin */}
            <div className="flex gap-2 justify-center">
              <button
                type="button"
                onClick={() => window.print()}
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-xs font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
              >
                <Printer className="w-4 h-4 text-blue-500" />
                <span>
                  {lang === "kh" ? "បោះពុម្ពវិក្កយបត្រ" : "Print Receipt"}
                </span>
              </button>
              <button
                type="button"
                onClick={() => navigate("/admin")}
                className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs shadow-md shadow-blue-500/20 transition cursor-pointer"
              >
                {lang === "kh" ? "ពិនិត្យក្នុង Admin" : "View Admin"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
