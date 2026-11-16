import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Smartphone,
  Home,
  LayoutGrid,
  User,
  Lock,
  Bell,
  Upload,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Wifi,
  BatteryCharging,
  Sparkles,
  Plus,
  CreditCard,
  LogOut,
  Search,
} from 'lucide-react';

type AndroidScreenId = 'home' | 'dashboard' | 'profile' | 'login';

interface AppTaskItem {
  id: string;
  title: string;
  tag: string;
  done: boolean;
}

export const AndroidAppSimulatorDemo: React.FC<{ onEnrollClick: () => void }> = ({
  onEnrollClick,
}) => {
  const [activeScreen, setActiveScreen] = useState<AndroidScreenId>('home');
  const [isLoggedInApp, setIsLoggedInApp] = useState<boolean>(true);
  const [appUserName, setAppUserName] = useState<string>('Rohan Kulkarni');
  const [appUserEmail, setAppUserEmail] = useState<string>('rohan.k@android.dev');
  const [appUserBio, setAppUserBio] = useState<string>('Full-Stack Android & AI Builder');
  const [pushEnabled, setPushEnabled] = useState<boolean>(true);
  const [biometricEnabled, setBiometricEnabled] = useState<boolean>(true);
  const [pushToast, setPushToast] = useState<string | null>(null);
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'uploading' | 'done'>('idle');
  const [uploadedFileName, setUploadedFileName] = useState<string>('product_showcase_v2.png');

  const [tasks, setTasks] = useState<AppTaskItem[]>([
    { id: 't1', title: 'Firebase Auth & Google Sign-In', tag: 'Auth', done: true },
    { id: 't2', title: 'Cloud Firestore Real-Time Sync', tag: 'Database', done: true },
    { id: 't3', title: 'Push Notification FCM Service', tag: 'Cloud', done: false },
    { id: 't4', title: 'Signed AAB Bundle for Play Store', tag: 'Release', done: false },
  ]);

  const toggleTask = (id: string) => {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  const triggerTestPush = () => {
    setPushToast('FCM Notification: Your Android build #42 passed automated security checks!');
    setTimeout(() => {
      setPushToast(null);
    }, 3500);
  };

  const simulateFileUpload = () => {
    setUploadStatus('uploading');
    setTimeout(() => {
      setUploadedFileName(`android_asset_${Math.floor(100 + Math.random() * 899)}.png`);
      setUploadStatus('done');
    }, 800);
  };

  return (
    <div className="w-full bg-white rounded-3xl border border-slate-200/90 shadow-[0_8px_30px_rgba(15,23,42,0.06)] overflow-hidden">
      {/* Top Simulator Bar */}
      <div className="bg-slate-900 text-white px-4 py-3 flex flex-wrap items-center justify-between gap-3 border-b border-slate-800">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 flex items-center justify-center">
            <Smartphone className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs sm:text-sm font-black tracking-tight block leading-none">
              Interactive Android App Simulator
            </span>
            <span className="text-[10px] text-slate-400 font-medium">
              Click buttons & bottom tabs inside the smartphone frame to navigate screens
            </span>
          </div>
        </div>

        {/* Quick Screen Jump Buttons */}
        <div className="flex items-center gap-1.5 flex-wrap">
          {(
            [
              { id: 'home', label: 'App Home' },
              { id: 'dashboard', label: 'User Dashboard' },
              { id: 'profile', label: 'Profile & Settings' },
              { id: 'login', label: 'Login / Auth' },
            ] as const
          ).map((scr) => (
            <button
              key={scr.id}
              type="button"
              onClick={() => setActiveScreen(scr.id)}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold cursor-pointer transition-all ${
                activeScreen === scr.id
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-slate-800 text-slate-300 hover:text-white'
              }`}
            >
              {scr.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Grid: Smartphone Frame + Live Interactive Controls */}
      <div className="p-4 sm:p-6 bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Left/Center: Realistic Smartphone Frame (lg:col-span-5) */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-[320px] sm:w-[340px] h-[620px] rounded-[42px] bg-slate-950 p-3 shadow-[0_20px_50px_rgba(15,23,42,0.28)] border-[4px] border-slate-800 flex flex-col justify-between select-none">
            {/* Hardware Side Buttons */}
            <div className="absolute -right-[6px] top-28 w-[3px] h-12 bg-slate-700 rounded-r" />
            <div className="absolute -right-[6px] top-44 w-[3px] h-8 bg-slate-700 rounded-r" />

            {/* Inner Phone Screen */}
            <div className="relative w-full h-full bg-slate-50 rounded-[32px] overflow-hidden flex flex-col justify-between border border-slate-800/40">
              {/* Android Status Bar & Camera Punch Hole */}
              <div className="bg-slate-900 text-white px-4 pt-2.5 pb-2 flex items-center justify-between text-[10px] font-bold shrink-0 relative">
                <span>9:41</span>
                <div className="w-3.5 h-3.5 rounded-full bg-black border border-slate-700 absolute left-1/2 -translate-x-1/2 top-2" />
                <div className="flex items-center gap-1.5 text-slate-200">
                  <span>5G</span>
                  <Wifi className="w-3 h-3" />
                  <BatteryCharging className="w-3.5 h-3.5 text-emerald-400" />
                </div>
              </div>

              {/* Push Notification Toast inside Phone */}
              <AnimatePresence>
                {pushToast && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="absolute top-9 left-2.5 right-2.5 z-30 p-2.5 rounded-2xl bg-slate-900/95 text-white border border-emerald-500/40 shadow-lg flex items-start gap-2 text-left"
                  >
                    <Bell className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div className="text-[10.5px] leading-snug font-medium">{pushToast}</div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Dynamic Screen Body */}
              <div className="flex-1 overflow-y-auto p-3.5 text-left" style={{ scrollbarWidth: 'none' }}>
                <AnimatePresence mode="wait">
                  {/* SCREEN 1: HOME */}
                  {activeScreen === 'home' && (
                    <motion.div
                      key="home"
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -16 }}
                      transition={{ duration: 0.18 }}
                      className="space-y-3"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider block">
                            PulseAI Android App
                          </span>
                          <h4 className="text-sm font-black text-slate-900">
                            Hi, {isLoggedInApp ? appUserName.split(' ')[0] : 'Guest'} 👋
                          </h4>
                        </div>
                        <button
                          type="button"
                          onClick={triggerTestPush}
                          className="w-8 h-8 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-700 hover:text-emerald-600 cursor-pointer shadow-2xs"
                          title="Trigger Push Notification"
                        >
                          <Bell className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Search Bar */}
                      <div className="relative">
                        <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          readOnly
                          value="AI Mobile Services & Cloud Sync"
                          className="w-full pl-8 pr-3 py-1.5 rounded-xl bg-white border border-slate-200 text-[11px] font-medium text-slate-600"
                        />
                      </div>

                      {/* Hero Card inside Phone */}
                      <div className="p-3.5 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-700 text-white space-y-2 shadow-sm">
                        <div className="flex items-center justify-between">
                          <span className="px-2 py-0.5 rounded-full bg-white/20 text-[9.5px] font-bold">
                            Firebase Connected
                          </span>
                          <span className="text-[10px] font-bold text-emerald-100">v2.4 APK</span>
                        </div>
                        <h5 className="text-xs font-black leading-snug">
                          Production Android Architecture with AI Assistant
                        </h5>
                        <div className="flex items-center gap-2 pt-1">
                          <button
                            type="button"
                            onClick={() => setActiveScreen('dashboard')}
                            className="px-2.5 py-1 rounded-lg bg-white text-emerald-800 font-black text-[10px] cursor-pointer"
                          >
                            Open Dashboard →
                          </button>
                          <button
                            type="button"
                            onClick={triggerTestPush}
                            className="px-2.5 py-1 rounded-lg bg-emerald-800/60 text-white font-bold text-[10px] cursor-pointer"
                          >
                            Test Push Alert
                          </button>
                        </div>
                      </div>

                      {/* Quick App Modules */}
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => setActiveScreen('dashboard')}
                          className="p-2.5 rounded-xl bg-white border border-slate-200 text-left hover:border-emerald-400 transition-all cursor-pointer"
                        >
                          <Upload className="w-4 h-4 text-emerald-600 mb-1" />
                          <span className="text-[11px] font-black text-slate-900 block">
                            Cloud Upload
                          </span>
                          <span className="text-[9.5px] text-slate-500">Images & Files</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setActiveScreen('login')}
                          className="p-2.5 rounded-xl bg-white border border-slate-200 text-left hover:border-emerald-400 transition-all cursor-pointer"
                        >
                          <Lock className="w-4 h-4 text-blue-600 mb-1" />
                          <span className="text-[11px] font-black text-slate-900 block">
                            Firebase Auth
                          </span>
                          <span className="text-[9.5px] text-slate-500">Login & Security</span>
                        </button>
                      </div>

                      {/* Interactive Task Checklist */}
                      <div className="bg-white rounded-2xl p-3 border border-slate-200 space-y-2">
                        <span className="text-[10.5px] font-black uppercase tracking-wider text-slate-500 block">
                          Live App Features (Tap to Toggle)
                        </span>
                        {tasks.map((t) => (
                          <div
                            key={t.id}
                            onClick={() => toggleTask(t.id)}
                            className="flex items-center justify-between gap-2 p-1.5 rounded-lg hover:bg-slate-50 cursor-pointer"
                          >
                            <div className="flex items-center gap-2 min-w-0">
                              <div
                                className={`w-4 h-4 rounded flex items-center justify-center shrink-0 ${
                                  t.done
                                    ? 'bg-emerald-600 text-white'
                                    : 'border border-slate-300 bg-white'
                                }`}
                              >
                                {t.done && <CheckCircle2 className="w-3 h-3" />}
                              </div>
                              <span
                                className={`text-[11px] font-semibold truncate ${
                                  t.done ? 'line-through text-slate-400' : 'text-slate-800'
                                }`}
                              >
                                {t.title}
                              </span>
                            </div>
                            <span className="px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 text-[9px] font-bold shrink-0">
                              {t.tag}
                            </span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* SCREEN 2: USER DASHBOARD & UPLOAD */}
                  {activeScreen === 'dashboard' && (
                    <motion.div
                      key="dashboard"
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -16 }}
                      transition={{ duration: 0.18 }}
                      className="space-y-3"
                    >
                      <h4 className="text-sm font-black text-slate-900">User Dashboard & API</h4>

                      <div className="grid grid-cols-2 gap-2">
                        <div className="p-2.5 rounded-xl bg-white border border-slate-200">
                          <span className="text-[9.5px] text-slate-500 font-bold block">API Latency</span>
                          <span className="text-sm font-black text-emerald-600">42 ms</span>
                        </div>
                        <div className="p-2.5 rounded-xl bg-white border border-slate-200">
                          <span className="text-[9.5px] text-slate-500 font-bold block">Auth State</span>
                          <span className="text-sm font-black text-blue-600">
                            {isLoggedInApp ? 'Verified' : 'Guest'}
                          </span>
                        </div>
                      </div>

                      {/* File & Image Upload Simulation */}
                      <div className="p-3 rounded-2xl bg-white border border-slate-200 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-black text-slate-900">
                            Cloud Storage File Upload
                          </span>
                          <span className="text-[9.5px] font-bold text-emerald-600">Firebase Bucket</span>
                        </div>
                        <p className="text-[10px] text-slate-500">
                          Test uploading an image or document to cloud storage:
                        </p>
                        <div className="p-2.5 rounded-xl bg-slate-50 border border-dashed border-slate-300 text-center space-y-1.5">
                          <span className="text-[10.5px] font-bold text-slate-700 block truncate">
                            {uploadedFileName}
                          </span>
                          <button
                            type="button"
                            onClick={simulateFileUpload}
                            className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[10.5px] inline-flex items-center gap-1 cursor-pointer"
                          >
                            <Plus className="w-3 h-3" />
                            <span>
                              {uploadStatus === 'uploading'
                                ? 'Uploading...'
                                : uploadStatus === 'done'
                                ? 'Upload Another File'
                                : 'Simulate File Upload'}
                            </span>
                          </button>
                          {uploadStatus === 'done' && (
                            <span className="block text-[10px] font-bold text-emerald-600">
                              ✓ Uploaded to Cloud Storage successfully
                            </span>
                          )}
                        </div>
                      </div>

                      {/* In-App Payment Gateway Preview (Test Mode) */}
                      <div className="p-3 rounded-2xl bg-amber-50/90 border border-amber-200 space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-black text-amber-950 flex items-center gap-1">
                            <CreditCard className="w-3.5 h-3.5 text-amber-700" />
                            <span>In-App Checkout (Test Mode)</span>
                          </span>
                          <span className="px-1.5 py-0.5 rounded bg-amber-200 text-amber-950 text-[9px] font-black">
                            SANDBOX
                          </span>
                        </div>
                        <p className="text-[10px] text-amber-900">
                          Demonstrates Android Razorpay SDK sheet trigger inside the app.
                        </p>
                        <button
                          type="button"
                          onClick={triggerTestPush}
                          className="w-full py-1.5 rounded-lg bg-slate-900 text-white font-bold text-[10.5px] cursor-pointer"
                        >
                          Test Sandbox Payment Callback
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* SCREEN 3: PROFILE & SETTINGS */}
                  {activeScreen === 'profile' && (
                    <motion.div
                      key="profile"
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -16 }}
                      transition={{ duration: 0.18 }}
                      className="space-y-3"
                    >
                      <h4 className="text-sm font-black text-slate-900">User Profile Management</h4>

                      <div className="p-3 rounded-2xl bg-white border border-slate-200 space-y-2.5">
                        <div className="flex items-center gap-2.5">
                          <div className="w-10 h-10 rounded-full bg-emerald-600 text-white font-black text-sm flex items-center justify-center">
                            {appUserName.charAt(0)}
                          </div>
                          <div className="min-w-0">
                            <div className="text-xs font-black text-slate-900 truncate">
                              {appUserName}
                            </div>
                            <div className="text-[10px] text-slate-500 truncate">{appUserEmail}</div>
                          </div>
                        </div>

                        <div>
                          <label className="block text-[9.5px] font-bold text-slate-500 mb-0.5">
                            Display Name
                          </label>
                          <input
                            type="text"
                            value={appUserName}
                            onChange={(e) => setAppUserName(e.target.value)}
                            className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 text-[11px] font-semibold text-slate-800"
                          />
                        </div>

                        <div>
                          <label className="block text-[9.5px] font-bold text-slate-500 mb-0.5">
                            Role / Status Bio
                          </label>
                          <input
                            type="text"
                            value={appUserBio}
                            onChange={(e) => setAppUserBio(e.target.value)}
                            className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 text-[11px] font-semibold text-slate-800"
                          />
                        </div>
                      </div>

                      {/* Toggles */}
                      <div className="p-3 rounded-2xl bg-white border border-slate-200 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-bold text-slate-800">
                            Push Notifications
                          </span>
                          <button
                            type="button"
                            onClick={() => setPushEnabled(!pushEnabled)}
                            className={`px-2.5 py-0.5 rounded-full text-[10px] font-black cursor-pointer ${
                              pushEnabled
                                ? 'bg-emerald-600 text-white'
                                : 'bg-slate-200 text-slate-600'
                            }`}
                          >
                            {pushEnabled ? 'ON' : 'OFF'}
                          </button>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-bold text-slate-800">
                            App Security Lock
                          </span>
                          <button
                            type="button"
                            onClick={() => setBiometricEnabled(!biometricEnabled)}
                            className={`px-2.5 py-0.5 rounded-full text-[10px] font-black cursor-pointer ${
                              biometricEnabled
                                ? 'bg-emerald-600 text-white'
                                : 'bg-slate-200 text-slate-600'
                            }`}
                          >
                            {biometricEnabled ? 'ACTIVE' : 'OFF'}
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* SCREEN 4: LOGIN / FIREBASE AUTH */}
                  {activeScreen === 'login' && (
                    <motion.div
                      key="login"
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -16 }}
                      transition={{ duration: 0.18 }}
                      className="space-y-3"
                    >
                      <h4 className="text-sm font-black text-slate-900">
                        Firebase Authentication
                      </h4>

                      {isLoggedInApp ? (
                        <div className="p-4 rounded-2xl bg-white border border-slate-200 text-center space-y-2.5">
                          <ShieldCheck className="w-8 h-8 text-emerald-600 mx-auto" />
                          <div className="text-xs font-black text-slate-900">
                            Signed in as {appUserName}
                          </div>
                          <p className="text-[10px] text-slate-500">
                            Firebase JWT Session Active • UID: fii_and_9281
                          </p>
                          <button
                            type="button"
                            onClick={() => setIsLoggedInApp(false)}
                            className="w-full py-2 rounded-xl bg-rose-50 text-rose-700 border border-rose-200 font-bold text-[11px] flex items-center justify-center gap-1 cursor-pointer"
                          >
                            <LogOut className="w-3.5 h-3.5" />
                            <span>Sign Out of Simulator</span>
                          </button>
                        </div>
                      ) : (
                        <form
                          onSubmit={(e) => {
                            e.preventDefault();
                            setIsLoggedInApp(true);
                            setActiveScreen('home');
                          }}
                          className="p-3.5 rounded-2xl bg-white border border-slate-200 space-y-2.5"
                        >
                          <div>
                            <label className="block text-[10px] font-bold text-slate-600 mb-1">
                              Email
                            </label>
                            <input
                              type="email"
                              required
                              value={appUserEmail}
                              onChange={(e) => setAppUserEmail(e.target.value)}
                              className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 text-[11px]"
                            />
                          </div>
                          <div>
                            <label className="block text-[10px] font-bold text-slate-600 mb-1">
                              Password
                            </label>
                            <input
                              type="password"
                              required
                               defaultValue="••••••••"
                              className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 text-[11px]"
                            />
                          </div>
                          <button
                            type="submit"
                            className="w-full py-2 rounded-xl bg-emerald-600 text-white font-bold text-[11px] cursor-pointer"
                          >
                            Sign In with Firebase Auth
                          </button>
                        </form>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Bottom Android App Navigation Bar */}
              <div className="bg-white border-t border-slate-200 px-3 py-2 flex items-center justify-around shrink-0">
                {(
                  [
                    { id: 'home', icon: Home, label: 'Home' },
                    { id: 'dashboard', icon: LayoutGrid, label: 'Dashboard' },
                    { id: 'profile', icon: User, label: 'Profile' },
                    { id: 'login', icon: Lock, label: 'Auth' },
                  ] as const
                ).map((nav) => {
                  const Icon = nav.icon;
                  const active = activeScreen === nav.id;
                  return (
                    <button
                      key={nav.id}
                      type="button"
                      onClick={() => setActiveScreen(nav.id)}
                      className={`flex flex-col items-center gap-0.5 px-2.5 py-1 rounded-xl cursor-pointer transition-all ${
                        active ? 'text-emerald-600 font-black' : 'text-slate-400 hover:text-slate-700'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="text-[9.5px]">{nav.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Android Gesture Pill */}
              <div className="bg-white pb-2 flex justify-center shrink-0">
                <div className="w-24 h-1 rounded-full bg-slate-300" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Guide & What Students Build in Live Class (lg:col-span-7) */}
        <div className="lg:col-span-7 space-y-4 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-black">
            <Sparkles className="w-3.5 h-3.5" />
            <span>REAL INTERACTIVE ANDROID SIMULATOR</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            Test Drive the Android App Before You Build It Live
          </h3>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Interact with the smartphone simulator on the left—switch between the{' '}
            <strong>App Home Screen</strong>, <strong>User Dashboard</strong>,{' '}
            <strong>Profile Editor</strong>, and <strong>Firebase Authentication</strong> views, trigger push notifications, and test cloud file uploads.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-1">
              <span className="text-xs font-black text-emerald-700 block">
                1. AI App Builder & UI/UX
              </span>
              <p className="text-xs text-slate-600">
                Generate multi-screen Android layouts, navigation graphs, and responsive components using structured AI prompts.
              </p>
            </div>
            <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-1">
              <span className="text-xs font-black text-blue-700 block">
                2. Firebase Auth & Backend APIs
              </span>
              <p className="text-xs text-slate-600">
                Connect user registration, login, cloud database collections, image uploads, and push notifications.
              </p>
            </div>
            <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-1">
              <span className="text-xs font-black text-purple-700 block">
                3. Payment Gateway & Security
              </span>
              <p className="text-xs text-slate-600">
                Integrate mobile checkout flows, API key protection, app debugging, and runtime security checks.
              </p>
            </div>
            <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-1">
              <span className="text-xs font-black text-amber-700 block">
                4. Signed APK/AAB & Play Store
              </span>
              <p className="text-xs text-slate-600">
                Generate signed APK and Android App Bundles (AAB) and learn the complete Google Play Store publishing workflow.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900 text-white flex flex-wrap items-center justify-between gap-3">
            <div className="space-y-0.5">
              <span className="text-xs font-black text-emerald-400 block">
                LIVE Instructor-Led Training
              </span>
              <p className="text-xs text-slate-300">
                The 10-minute demonstration covers rapid app creation. Complete integrations and production deployment are covered in live training.
              </p>
            </div>
            <button
              type="button"
              onClick={onEnrollClick}
              className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black text-xs flex items-center gap-1.5 cursor-pointer shrink-0"
            >
              <span>Enroll Now — ₹2,499</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
