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
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-3">
      <nav className="glass rounded-2xl max-w-7xl mx-auto px-4 py-3 flex items-center justify-between glow-purple">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center">
            <span className="text-white font-montserrat font-black text-sm">N</span>
          </div>
          <span className="font-montserrat font-black text-lg gradient-text hidden sm:block">NeuraMind</span>
        </div>

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
            className={`flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200 border border-transparent
              ${activeSection === "profile"
                ? "nav-active"
                : "text-muted-foreground hover:text-foreground hover:bg-white/5"
              }`}
          >
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-xs font-bold">А</div>
            <span className="hidden sm:block">Анна</span>
          </button>

          <button
            className="lg:hidden p-2 rounded-xl glass border-glass-border text-muted-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <Icon name={mobileOpen ? "X" : "Menu"} size={18} />
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="glass rounded-2xl max-w-7xl mx-auto mt-2 p-3 grid grid-cols-3 gap-2 lg:hidden animate-fade-in">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => { onNavigate(item.id as Section); setMobileOpen(false); }}
              className={`flex flex-col items-center gap-1 p-3 rounded-xl text-xs font-medium transition-all border border-transparent
                ${activeSection === item.id ? "nav-active" : "text-muted-foreground hover:text-foreground hover:bg-white/5"}`}
            >
              <Icon name={item.icon} size={18} />
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
