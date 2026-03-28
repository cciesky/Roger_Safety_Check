import React, { useState, useEffect, useRef } from 'react';
import { 
  Shield, 
  Lock, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Lightbulb, 
  Home as HomeIcon, 
  Settings as SettingsIcon,
  Plus,
  MinusCircle,
  ChevronRight,
  History,
  Mail,
  Trash2,
  Power,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---
type Page = 'signin' | 'signup' | 'dashboard' | 'settings';

// --- Components ---

const Layout = ({ children, activePage, onNavigate }: { children: React.ReactNode, activePage: Page, onNavigate: (page: Page) => void }) => {
  const showNav = activePage === 'dashboard' || activePage === 'settings';

  return (
    <div className="min-h-screen bg-[#f9f9fe] text-[#1a1c1f] font-sans selection:bg-blue-500/20">
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100">
        <div className="flex items-center justify-between px-6 h-16 max-w-2xl mx-auto">
          <div className="flex items-center gap-2">
            <Shield className="text-blue-600 w-6 h-6" />
            <span className="text-lg font-bold text-slate-900 tracking-tight">Safety Check</span>
          </div>
          {showNav ? (
            <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden border border-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" 
                alt="Profile" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          ) : (
            <button className="text-sm font-medium text-blue-600 hover:opacity-70 transition-opacity">Help</button>
          )}
        </div>
      </header>

      <main className="pt-16 pb-32">
        {children}
      </main>

      {showNav && (
        <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex justify-around items-center h-16 px-8 bg-white/80 backdrop-blur-xl w-[90%] max-w-md rounded-3xl shadow-[0_8px_24px_rgba(26,28,31,0.06)] border border-slate-100">
          <button 
            onClick={() => onNavigate('dashboard')}
            className={`flex flex-col items-center justify-center transition-all duration-200 ${activePage === 'dashboard' ? 'text-blue-600' : 'text-slate-400'}`}
          >
            <HomeIcon className={`w-6 h-6 ${activePage === 'dashboard' ? 'fill-current' : ''}`} />
            <span className="text-[11px] font-medium tracking-wide uppercase mt-1">Home</span>
          </button>
          <button 
            onClick={() => onNavigate('settings')}
            className={`flex flex-col items-center justify-center transition-all duration-200 ${activePage === 'settings' ? 'text-blue-600' : 'text-slate-400'}`}
          >
            <SettingsIcon className={`w-6 h-6 ${activePage === 'settings' ? 'fill-current' : ''}`} />
            <span className="text-[11px] font-medium tracking-wide uppercase mt-1">Settings</span>
          </button>
        </nav>
      )}
    </div>
  );
};

const SignIn = ({ onNavigate }: { onNavigate: (page: Page) => void }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center px-6 py-12"
    >
      <div className="w-full max-w-sm text-center mb-12">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-white shadow-[0_8px_24px_rgba(26,28,31,0.06)] mb-8">
          <ShieldCheck className="text-blue-600 w-10 h-10 fill-blue-600/10" />
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 mb-3">Sign In</h1>
        <p className="text-slate-500 text-base">Protecting what matters most.</p>
      </div>

      <div className="w-full max-w-sm space-y-8">
        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); onNavigate('dashboard'); }}>
          <div className="space-y-2">
            <input 
              className="w-full h-14 px-5 rounded-xl bg-slate-100 border-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all duration-200 text-slate-900 placeholder:text-slate-400" 
              placeholder="Email" 
              type="email" 
              required
            />
            <input 
              className="w-full h-14 px-5 rounded-xl bg-slate-100 border-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all duration-200 text-slate-900 placeholder:text-slate-400" 
              placeholder="Password" 
              type="password" 
              required
            />
          </div>
          <div className="pt-2">
            <button className="w-full h-14 bg-gradient-to-br from-blue-600 to-blue-500 text-white font-semibold rounded-xl text-lg active:scale-[0.98] transition-transform duration-200 shadow-sm">
              Sign In
            </button>
          </div>
          <div className="flex justify-center">
            <button type="button" className="text-sm font-medium text-blue-600 hover:opacity-70 transition-opacity">Forgot Password?</button>
          </div>
        </form>

        <div className="pt-8 text-center">
          <div className="inline-flex items-center gap-2 text-slate-300 mb-8">
            <div className="h-[1px] w-12 bg-slate-200"></div>
            <span className="text-xs font-bold uppercase tracking-widest">Secure Access</span>
            <div className="h-[1px] w-12 bg-slate-200"></div>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <div className="p-4 rounded-2xl bg-slate-50 text-left border border-slate-100">
              <Lock className="text-blue-600 w-5 h-5 mb-2" />
              <h3 className="text-xs font-bold text-slate-900 block">End-to-End</h3>
              <p className="text-[10px] text-slate-500 leading-tight mt-1">Your data is fully encrypted at all times.</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 text-left border border-slate-100">
              <ShieldCheck className="text-orange-600 w-5 h-5 mb-2" />
              <h3 className="text-xs font-bold text-slate-900 block">Trusted Devices</h3>
              <p className="text-[10px] text-slate-500 leading-tight mt-1">Manage and revoke access remotely.</p>
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-12 text-center w-full max-w-sm">
        <p className="text-[11px] text-slate-400 leading-relaxed px-4">
          Don't have an account? <button onClick={() => onNavigate('signup')} className="text-blue-600 font-semibold">Sign Up</button>
        </p>
      </footer>
    </motion.div>
  );
};

const SignUp = ({ onNavigate }: { onNavigate: (page: Page) => void }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="flex flex-col px-6 py-12 max-w-md mx-auto"
    >
      <div className="mb-12 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">Create your account</h1>
        <p className="text-slate-500 text-lg leading-relaxed">Join a community built on trust and protection. Your safety journey begins here.</p>
      </div>

      <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onNavigate('dashboard'); }}>
        <div className="bg-white rounded-xl shadow-[0_8px_24px_rgba(26,28,31,0.04)] overflow-hidden border border-slate-100">
          <div className="p-4 border-b border-slate-100">
            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1 px-1">Email Address</label>
            <input className="w-full bg-transparent border-none focus:ring-0 text-slate-900 placeholder:text-slate-300 text-lg py-1 px-1 outline-none" placeholder="name@example.com" type="email" required />
          </div>
          <div className="p-4 border-b border-slate-100">
            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1 px-1">Password</label>
            <input className="w-full bg-transparent border-none focus:ring-0 text-slate-900 placeholder:text-slate-300 text-lg py-1 px-1 outline-none" placeholder="Minimum 8 characters" type="password" required />
          </div>
          <div className="p-4">
            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1 px-1">Confirm Password</label>
            <input className="w-full bg-transparent border-none focus:ring-0 text-slate-900 placeholder:text-slate-300 text-lg py-1 px-1 outline-none" placeholder="Repeat password" type="password" required />
          </div>
        </div>

        <p className="text-[13px] text-slate-400 text-center px-4 leading-relaxed">
          By clicking Get Started, you agree to our 
          <button type="button" className="text-blue-600 hover:underline mx-1">Terms of Service</button> and 
          <button type="button" className="text-blue-600 hover:underline mx-1">Privacy Policy</button>.
        </p>

        <div className="pt-4">
          <button className="w-full h-[56px] bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold text-lg rounded-xl active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20">
            Get Started
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </form>

      <div className="mt-12 text-center">
        <p className="text-slate-500">
          Already have an account? 
          <button onClick={() => onNavigate('signin')} className="text-blue-600 font-semibold hover:underline ml-1">Sign In</button>
        </p>
      </div>

      <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { icon: Lock, title: "Private by Design", desc: "Your data is encrypted and never shared with third parties." },
          { icon: Clock, title: "Instant Response", desc: "Get connected to safety services in under 10 seconds." },
          { icon: ShieldCheck, title: "Circle of Trust", desc: "Keep your loved ones informed and secure automatically." }
        ].map((item, i) => (
          <div key={i} className="bg-slate-50 p-8 rounded-xl flex flex-col items-center text-center border border-slate-100">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-4 text-blue-600 shadow-sm">
              <item.icon className="w-6 h-6 fill-current opacity-20" />
              <item.icon className="w-6 h-6 absolute" />
            </div>
            <h3 className="text-slate-900 font-bold mb-2">{item.title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const Dashboard = () => {
  const [isHolding, setIsHolding] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const holdTimer = useRef<NodeJS.Timeout | null>(null);
  const progressInterval = useRef<NodeJS.Timeout | null>(null);

  const startHold = () => {
    setIsHolding(true);
    const startTime = Date.now();
    const duration = 5000;

    progressInterval.current = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      setProgress(newProgress);
      
      if (newProgress >= 100) {
        clearInterval(progressInterval.current!);
        setShowModal(true);
        setIsHolding(false);
      }
    }, 10);
  };

  const stopHold = () => {
    setIsHolding(false);
    if (progress < 100) {
      setProgress(0);
    }
    if (progressInterval.current) clearInterval(progressInterval.current);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-2xl mx-auto w-full flex flex-col items-center px-6 space-y-12"
    >
      <div className="flex items-center space-x-2 bg-slate-50 px-4 py-2 rounded-full border border-slate-100 shadow-sm">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
        </span>
        <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">Active</span>
      </div>

      <section className="w-full flex flex-col items-center">
        <div className="relative flex items-center justify-center">
          <div className="absolute w-72 h-72 rounded-full border-[6px] border-slate-100"></div>
          <svg className="absolute w-72 h-72 -rotate-90 pointer-events-none" viewBox="0 0 100 100">
            <circle 
              cx="50" cy="50" r="47" 
              fill="none" 
              stroke="#34C759" 
              strokeWidth="2.5" 
              strokeDasharray="295.31" 
              strokeDashoffset={295.31 - (progress / 100) * 295.31}
              strokeLinecap="round"
              className="transition-all duration-100"
            />
          </svg>
          <button 
            onMouseDown={startHold}
            onMouseUp={stopHold}
            onMouseLeave={stopHold}
            onTouchStart={startHold}
            onTouchEnd={stopHold}
            className="relative w-64 h-64 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex flex-col items-center justify-center text-white shadow-2xl active:scale-95 transition-transform duration-300 select-none"
          >
            <motion.div
              animate={{ scale: isHolding ? 1.1 : 1 }}
              className="flex flex-col items-center"
            >
              <Shield className="w-12 h-12 mb-4 fill-white/20" />
              <p className="text-center font-bold text-lg leading-tight px-8">
                Hold for 5s<br/>to Confirm
              </p>
            </motion.div>
          </button>
        </div>
        <div className="mt-12 text-center">
          <h2 className="text-5xl font-extrabold tracking-tighter text-slate-900 mb-2">3:45</h2>
          <p className="text-slate-500 font-medium">remaining</p>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col justify-between aspect-square">
          <div className="w-10 h-10 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <p className="text-slate-500 text-sm font-medium mb-1">Next Check-in</p>
            <h3 className="text-2xl font-bold text-slate-900">6:00 PM</h3>
            <p className="text-xs text-blue-600 mt-2 font-semibold">Automatic alert at 6:05 PM</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col justify-between aspect-square">
          <div className="w-10 h-10 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-600">
            <MapPin className="w-6 h-6" />
          </div>
          <div className="relative h-24 w-full rounded-2xl overflow-hidden mt-2 bg-slate-100">
            <img 
              className="w-full h-full object-cover opacity-80" 
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=400&h=300&fit=crop" 
              alt="Map"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
          </div>
          <p className="text-xs text-slate-500 font-medium mt-2 text-center">Current Location Sharing Enabled</p>
        </div>
      </div>

      <div className="w-full bg-slate-50 p-4 rounded-2xl flex items-start space-x-4 border border-slate-100">
        <Lightbulb className="text-blue-600 w-5 h-5 mt-0.5" />
        <p className="text-sm text-slate-500 leading-relaxed">
          <span className="font-bold text-slate-900">Pro tip:</span> Next check-in required by 6:00 PM. We'll send a notification 10 minutes prior to help you stay safe.
        </p>
      </div>

      <AnimatePresence>
        {showModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/20 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white backdrop-blur-2xl w-full max-w-sm rounded-[2.5rem] p-8 shadow-2xl flex flex-col items-center text-center border border-slate-100"
            >
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-green-500/30">
                <CheckCircle2 className="text-white w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Interaction Complete</h3>
              <p className="text-slate-500 mb-8">
                Next interaction must be completed before <span className="font-semibold text-slate-900">10:00 PM</span>
              </p>
              <button 
                onClick={() => { setShowModal(false); setProgress(0); }}
                className="w-full py-4 bg-blue-600 text-white font-semibold rounded-2xl shadow-lg shadow-blue-500/25 active:scale-95 transition-all duration-200"
              >
                Got it
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Settings = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto px-6 space-y-10"
    >
      <section className="space-y-4">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">Settings</h2>
        <div className="bg-slate-50 rounded-xl p-6 space-y-4 border border-slate-100">
          <div className="flex items-start gap-4">
            <div className="mt-1 bg-blue-100 p-2 rounded-lg">
              <Shield className="text-blue-600 w-5 h-5 fill-blue-600/10" />
            </div>
            <div>
              <h3 className="text-slate-900 font-bold text-lg">4-Hour Interaction Rule</h3>
              <p className="text-slate-500 text-sm mt-1 leading-relaxed">
                To ensure your safety, the system requires an interaction every 4 hours. If missed, we follow a strict escalation protocol to your emergency contacts.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
            <div className="bg-white p-4 rounded-xl border border-slate-100">
              <span className="text-orange-600 font-bold text-[10px] uppercase tracking-wider">1st Missed</span>
              <p className="text-slate-900 font-semibold mt-1">Warning Sent</p>
              <p className="text-xs text-slate-500">Email nudge to you and secondary contacts.</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-100">
              <span className="text-red-600 font-bold text-[10px] uppercase tracking-wider">3rd Missed</span>
              <p className="text-slate-900 font-semibold mt-1">Full Alert</p>
              <p className="text-xs text-slate-500">Emergency broadcast to all designated emails.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 px-2">System Status</h3>
        <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100">
          <div className="flex items-center justify-between p-5 hover:bg-slate-50 transition-colors duration-200">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                <Power className="text-blue-600 w-5 h-5" />
              </div>
              <div>
                <p className="font-semibold text-slate-900">System Monitoring</p>
                <p className="text-xs text-slate-500">Active monitoring of interaction pings</p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <div className="flex items-center justify-between px-2">
          <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Emergency Contacts</h3>
          <button className="text-blue-600 text-xs font-bold flex items-center gap-1 active:scale-95 transition-transform">
            <Plus className="w-4 h-4" /> Add New
          </button>
        </div>
        <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 divide-y divide-slate-50">
          {[
            { name: "John Doe", email: "john.doe@safetymail.com", initials: "JD" },
            { name: "Alice Smith", email: "alice.smith@guardian.net", initials: "AS" }
          ].map((contact, i) => (
            <div key={i} className="flex items-center justify-between p-5 group">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold text-sm">
                  {contact.initials}
                </div>
                <div>
                  <p className="font-semibold text-slate-900">{contact.name}</p>
                  <p className="text-xs text-slate-500">{contact.email}</p>
                </div>
              </div>
              <button className="w-8 h-8 rounded-full flex items-center justify-center text-red-500 hover:bg-red-50 active:scale-90 transition-all">
                <MinusCircle className="w-5 h-5" />
              </button>
            </div>
          ))}
          <div className="p-4 bg-slate-50/50">
            <div className="flex gap-2">
              <input className="flex-1 bg-white border border-slate-100 rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500/10 outline-none placeholder:text-slate-300" placeholder="new.contact@email.com" type="email" />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-bold shadow-sm active:scale-95 transition-transform">Add</button>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 px-2">Account & Data</h3>
        <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 divide-y divide-slate-50">
          {[
            { icon: History, label: "Interaction History" },
            { icon: Mail, label: "Email Notification Logic" },
            { icon: Trash2, label: "Delete Safety Profile", danger: true }
          ].map((item, i) => (
            <div key={i} className={`flex items-center justify-between p-5 group cursor-pointer transition-colors ${item.danger ? 'hover:bg-red-50' : 'hover:bg-slate-50'}`}>
              <div className="flex items-center gap-4">
                <item.icon className={`w-5 h-5 ${item.danger ? 'text-red-500' : 'text-slate-400'}`} />
                <p className={`font-medium ${item.danger ? 'text-red-500' : 'text-slate-900'}`}>{item.label}</p>
              </div>
              <ChevronRight className={`w-5 h-5 ${item.danger ? 'text-red-200' : 'text-slate-200'}`} />
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

// --- Main App ---

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('signin');

  return (
    <Layout activePage={currentPage} onNavigate={setCurrentPage}>
      {currentPage === 'signin' && <SignIn onNavigate={setCurrentPage} />}
      {currentPage === 'signup' && <SignUp onNavigate={setCurrentPage} />}
      {currentPage === 'dashboard' && <Dashboard />}
      {currentPage === 'settings' && <Settings />}
    </Layout>
  );
}
