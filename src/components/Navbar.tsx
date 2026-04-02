import { useState } from "react";
import Icon from "@/components/ui/icon";
import { Section } from "@/pages/Index";

const navItems = [
  { id: "home", label: "Главная", icon: "Home" },
  { id: "courses", label: "Курсы", icon: "BookOpen" },
  { id: "progress", label: "Прогресс", icon: "TrendingUp" },
  { id: "community", label: "Сообщество", icon: "Users" },
  { id: "certificates", label: "Сертификаты", icon: "Award" },
  { id: "support", label: "Поддержка", icon: "HelpCircle" },
  { id: "profile", label: "Профиль", icon: "User" },
];

interface NavbarProps {
  activeSection: Section;
  onNavigate: (s: Section) => void;
}

export default function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Top bar */}
      <header className="fixed top-0 left-0 right-0 z-50 px-3 py-2 sm:px-4 sm:py-3">
        <nav className="glass rounded-2xl max-w-7xl mx-auto px-3 py-2.5 sm:px-4 sm:py-3 flex items-center justify-between glow-purple">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center shrink-0">
              <span className="text-white font-montserrat font-black text-sm">N</span>
            </div>
            <span className="font-montserrat font-black text-base sm:text-lg gradient-text hidden xs:block">NeuraMind</span>
          </div>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.slice(0, 6).map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id as Section)}
                className={`flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200 border border-transparent
                  ${activeSection === item.id
                    ? "nav-active"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                  }`}
              >
                <Icon name={item.icon} size={15} />
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onNavigate("profile")}
              className={`flex items-center gap-1.5 px-2 py-1.5 sm:px-3 sm:py-2 rounded-xl text-sm font-medium transition-all duration-200 border border-transparent
                ${activeSection === "profile"
                  ? "nav-active"
                  : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                }`}
            >
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-xs font-bold shrink-0">А</div>
              <span className="hidden sm:block text-sm">Анна</span>
            </button>

            <button
              className="lg:hidden p-2 rounded-xl glass border border-white/10 text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <Icon name={mobileOpen ? "X" : "Menu"} size={18} />
            </button>
          </div>
        </nav>

        {/* Mobile dropdown */}
        {mobileOpen && (
          <div className="glass rounded-2xl max-w-7xl mx-auto mt-2 p-2 lg:hidden animate-fade-in border border-white/5">
            <div className="grid grid-cols-4 gap-1">
              {navItems.slice(0, 4).map((item) => (
                <button
                  key={item.id}
                  onClick={() => { onNavigate(item.id as Section); setMobileOpen(false); }}
                  className={`flex flex-col items-center gap-1 p-2.5 rounded-xl transition-all border border-transparent
                    ${activeSection === item.id ? "nav-active" : "text-muted-foreground hover:text-foreground hover:bg-white/5"}`}
                >
                  <Icon name={item.icon} size={17} />
                  <span className="text-[10px] font-medium leading-tight text-center">{item.label}</span>
                </button>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-1 mt-1">
              {navItems.slice(4).map((item) => (
                <button
                  key={item.id}
                  onClick={() => { onNavigate(item.id as Section); setMobileOpen(false); }}
                  className={`flex flex-col items-center gap-1 p-2.5 rounded-xl transition-all border border-transparent
                    ${activeSection === item.id ? "nav-active" : "text-muted-foreground hover:text-foreground hover:bg-white/5"}`}
                >
                  <Icon name={item.icon} size={17} />
                  <span className="text-[10px] font-medium leading-tight text-center">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Mobile bottom nav */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 px-3 pb-3 pt-0">
        <div className="glass rounded-2xl border border-white/8 px-1 py-2 flex items-center justify-around"
          style={{boxShadow: '0 -4px 30px rgba(0,0,0,0.4)'}}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => { onNavigate(item.id as Section); setMobileOpen(false); }}
              className={`flex flex-col items-center gap-0.5 px-2 py-1 rounded-xl transition-all min-w-0 flex-1
                ${activeSection === item.id ? "text-purple-400" : "text-muted-foreground"}`}
            >
              <div className={`p-1.5 rounded-lg transition-all ${activeSection === item.id ? 'bg-purple-500/15' : ''}`}>
                <Icon name={item.icon} size={18} />
              </div>
              <span className="text-[9px] font-medium leading-tight truncate w-full text-center">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>
    </>
  );
}
