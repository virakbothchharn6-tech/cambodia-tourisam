import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { User, Lock, Phone, LogIn, UserPlus, ShieldCheck } from "lucide-react";

export default function Login({ lang, isDark }) {
  const navigate = useNavigate();
  const location = useLocation();

  // ពិនិត្យមើលថាតើគាត់មកពីទំព័រ Booking ដែរឬទេ
  const from = location.state?.from || "/";

  const [isRegister, setIsRegister] = useState(false);
  const [role, setRole] = useState("user"); // 'user' or 'admin'
  const [form, setForm] = useState({
    username: "",
    password: "",
    phone: "",
    fullName: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const users = JSON.parse(localStorage.getItem("cambodia_users") || "[]");

    if (isRegister) {
      // Logic ចុះឈ្មោះ (Register)
      if (!form.username || !form.password || !form.fullName) {
        setError(
          lang === "kh"
            ? "សូមបំពេញព័ត៌មានឱ្យបានគ្រប់គ្រាន់!"
            : "Please fill all fields!",
        );
        return;
      }
      const existingUser = users.find(
        (u) => u.username.toLowerCase() === form.username.toLowerCase(),
      );
      if (existingUser) {
        setError(
          lang === "kh" ? "ឈ្មោះគណនីនេះមានរួចហើយ!" : "Username already exists!",
        );
        return;
      }

      const newUser = {
        id: "U-" + Date.now(),
        username: form.username,
        password: form.password,
        fullName: form.fullName,
        phone: form.phone || "012 345 678",
        role: "user",
      };

      users.push(newUser);
      localStorage.setItem("cambodia_users", JSON.stringify(users));

      // Auto login ក្រោយ Register
      localStorage.setItem("cambodia_current_user", JSON.stringify(newUser));
      setSuccess(
        lang === "kh" ? "បង្កើតគណនីជោគជ័យ!" : "Account created successfully!",
      );
      setTimeout(() => navigate(from, { replace: true }), 800);
    } else {
      // Logic ចូលគណនី (Login)
      if (role === "admin") {
        if (form.username === "admin" && form.password === "admin123") {
          const adminUser = {
            username: "admin",
            fullName: "System Administrator",
            role: "admin",
          };
          localStorage.setItem(
            "cambodia_current_user",
            JSON.stringify(adminUser),
          );
          navigate("/admin");
          return;
        } else {
          setError(
            lang === "kh"
              ? "គណនី Admin មិនត្រឹមត្រូវ! (admin / admin123)"
              : "Invalid admin credentials! (admin / admin123)",
          );
          return;
        }
      }

      // Default tourist demo account ឬ Account ដែលបាន register
      const foundUser =
        users.find(
          (u) =>
            u.username.toLowerCase() === form.username.toLowerCase() &&
            u.password === form.password,
        ) ||
        (form.username === "tourist" && form.password === "123456"
          ? {
              username: "tourist",
              fullName: "ភ្ញៀវទេសចរ",
              phone: "012 888 999",
              role: "user",
            }
          : null);

      if (foundUser) {
        localStorage.setItem(
          "cambodia_current_user",
          JSON.stringify(foundUser),
        );
        navigate(from, { replace: true });
      } else {
        setError(
          lang === "kh"
            ? "ឈ្មោះគណនី ឬពាក្យសម្ងាត់មិនត្រឹមត្រូវ!"
            : "Invalid username or password!",
        );
      }
    }
  };

  return (
    <div className="max-w-md mx-auto my-8">
      <div
        className={`p-6 sm:p-8 rounded-3xl border shadow-2xl transition-colors ${
          isDark
            ? "bg-slate-900/90 border-slate-800"
            : "bg-white border-slate-200"
        }`}
      >
        {/* Brand Icon */}
        <div className="text-center space-y-2 mb-6">
          <div className="w-12 h-12 mx-auto rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
            {role === "admin" ? (
              <ShieldCheck className="w-6 h-6 text-amber-300" />
            ) : (
              <LogIn className="w-6 h-6" />
            )}
          </div>
          <h1
            className={`text-2xl font-black ${isDark ? "text-white" : "text-slate-900"}`}
          >
            {isRegister
              ? lang === "kh"
                ? "ចុះឈ្មោះបង្កើតគណនី"
                : "Create Account"
              : lang === "kh"
                ? "ចូលប្រើប្រាស់ប្រព័ន្ធ"
                : "Sign In"}
          </h1>
          <p className="text-xs text-slate-400">
            {isRegister
              ? lang === "kh"
                ? "បង្កើតគណនីដើម្បីកក់ និងទូទាត់ប្រាក់ KHQR"
                : "Register to book tours & pay via KHQR"
              : lang === "kh"
                ? "ចូលជាភ្ញៀវទេសចរ ឬអ្នកគ្រប់គ្រង Admin"
                : "Sign in as Tourist or Admin Portal"}
          </p>
        </div>

        {/* Role Toggle (Tourist / Admin) សម្រាប់ពេល Login */}
        {!isRegister && (
          <div
            className={`grid grid-cols-2 p-1 rounded-2xl mb-6 border ${
              isDark
                ? "bg-slate-950 border-slate-800"
                : "bg-slate-100 border-slate-200"
            }`}
          >
            <button
              type="button"
              onClick={() => {
                setRole("user");
                setError("");
              }}
              className={`py-2 rounded-xl text-xs font-black transition cursor-pointer ${
                role === "user"
                  ? "bg-blue-600 text-white shadow-md"
                  : isDark
                    ? "text-slate-400 hover:text-white"
                    : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {lang === "kh" ? "ភ្ញៀវទេសចរ (User)" : "Tourist (User)"}
            </button>
            <button
              type="button"
              onClick={() => {
                setRole("admin");
                setError("");
              }}
              className={`py-2 rounded-xl text-xs font-black transition cursor-pointer ${
                role === "admin"
                  ? "bg-blue-600 text-white shadow-md"
                  : isDark
                    ? "text-slate-400 hover:text-white"
                    : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {lang === "kh" ? "អ្នកគ្រប់គ្រង (Admin)" : "Admin Portal"}
            </button>
          </div>
        )}

        {/* Error / Success Messages */}
        {error && (
          <div className="mb-4 p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-500 text-xs font-bold text-center">
            {error}
          </div>
        )}
        {success && (
          <div className="mb-4 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-bold text-center">
            {success}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {isRegister && (
            <div>
              <label
                className={`text-xs font-bold block mb-1.5 ${isDark ? "text-slate-300" : "text-slate-700"}`}
              >
                {lang === "kh" ? "ឈ្មោះពេញ" : "Full Name"}
              </label>
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  required
                  value={form.fullName}
                  onChange={(e) =>
                    setForm({ ...form, fullName: e.target.value })
                  }
                  placeholder="ឧ. ឈន វីរះបុត្រ"
                  className={`w-full pl-10 pr-4 py-2.5 rounded-2xl text-xs sm:text-sm border focus:outline-none focus:border-blue-500 transition ${
                    isDark
                      ? "bg-slate-950 border-slate-800 text-white"
                      : "bg-slate-50 border-slate-200 text-slate-900"
                  }`}
                />
              </div>
            </div>
          )}

          {isRegister && (
            <div>
              <label
                className={`text-xs font-bold block mb-1.5 ${isDark ? "text-slate-300" : "text-slate-700"}`}
              >
                {lang === "kh" ? "លេខទូរស័ព្ទ" : "Phone Number"}
              </label>
              <div className="relative">
                <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="012 345 678"
                  className={`w-full pl-10 pr-4 py-2.5 rounded-2xl text-xs sm:text-sm border focus:outline-none focus:border-blue-500 transition ${
                    isDark
                      ? "bg-slate-950 border-slate-800 text-white"
                      : "bg-slate-50 border-slate-200 text-slate-900"
                  }`}
                />
              </div>
            </div>
          )}

          <div>
            <label
              className={`text-xs font-bold block mb-1.5 ${isDark ? "text-slate-300" : "text-slate-700"}`}
            >
              {lang === "kh" ? "ឈ្មោះគណនី (Username)" : "Username"}
            </label>
            <div className="relative">
              <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                required
                value={form.username}
                onChange={(e) => setForm({ ...form, username: e.target.value })}
                placeholder={
                  role === "admin" && !isRegister ? "admin" : "tourist"
                }
                className={`w-full pl-10 pr-4 py-2.5 rounded-2xl text-xs sm:text-sm border focus:outline-none focus:border-blue-500 transition ${
                  isDark
                    ? "bg-slate-950 border-slate-800 text-white"
                    : "bg-slate-50 border-slate-200 text-slate-900"
                }`}
              />
            </div>
          </div>

          <div>
            <label
              className={`text-xs font-bold block mb-1.5 ${isDark ? "text-slate-300" : "text-slate-700"}`}
            >
              {lang === "kh" ? "ពាក្យសម្ងាត់ (Password)" : "Password"}
            </label>
            <div className="relative">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="password"
                required
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                placeholder="••••••••"
                className={`w-full pl-10 pr-4 py-2.5 rounded-2xl text-xs sm:text-sm border focus:outline-none focus:border-blue-500 transition ${
                  isDark
                    ? "bg-slate-950 border-slate-800 text-white"
                    : "bg-slate-50 border-slate-200 text-slate-900"
                }`}
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs sm:text-sm shadow-md shadow-blue-500/20 transition cursor-pointer flex items-center justify-center gap-2"
          >
            {isRegister ? (
              <UserPlus className="w-4 h-4" />
            ) : (
              <LogIn className="w-4 h-4" />
            )}
            <span>
              {isRegister
                ? lang === "kh"
                  ? "ចុះឈ្មោះឥឡូវនេះ"
                  : "Register Now"
                : lang === "kh"
                  ? "ចូលប្រើប្រាស់"
                  : "Login"}
            </span>
          </button>
        </form>

        {/* Switch Between Login and Register */}
        <div className="mt-6 text-center">
          <button
            type="button"
            onClick={() => {
              setIsRegister(!isRegister);
              setError("");
              setSuccess("");
            }}
            className="text-xs font-bold text-blue-500 hover:text-blue-400 transition cursor-pointer"
          >
            {isRegister
              ? lang === "kh"
                ? "មានគណនីរួចហើយ? ចូលគណនីនៅទីនេះ"
                : "Already have an account? Sign In"
              : lang === "kh"
                ? "មិនទាន់មានគណនី? ចុចចុះឈ្មោះបង្កើតគណនី"
                : "Don't have an account? Register"}
          </button>
        </div>

        {/* Demo Hints */}
        {!isRegister && (
          <div className="mt-4 p-3 rounded-xl bg-slate-500/10 border border-slate-500/15 text-[11px] text-slate-400 text-center">
            {role === "admin"
              ? "Demo Admin: admin / admin123"
              : "Demo User: tourist / 123456 (ឬចុច Register)"}
          </div>
        )}
      </div>
    </div>
  );
}
