import { useState } from "react";
import Icon from "@/components/ui/icon";
import { Section } from "@/pages/Index";

const interests = ["ИИ", "Психология", "Мотивация", "Нейронауки", "Медитация"];
const achievements = [
  { icon: "🔥", title: "7 дней подряд", desc: "Серия обучения", earned: true },
  { icon: "🎓", title: "Первый сертификат", desc: "Завершил курс", earned: true },
  { icon: "⚡", title: "Быстрый старт", desc: "3 урока за день", earned: true },
  { icon: "🧠", title: "Мыслитель", desc: "10 курсов", earned: false },
  { icon: "🚀", title: "Пионер ИИ", desc: "Все курсы ИИ", earned: false },
  { icon: "💎", title: "Топ студент", desc: "Рейтинг 99%", earned: false },
];

interface ProfilePageProps {
  onNavigate: (s: Section) => void;
}

export default function ProfilePage({ onNavigate }: ProfilePageProps) {
  const [activeTab, setActiveTab] = useState<"info" | "achievements" | "settings">("info");

  return (
    <div className="max-w-4xl mx-auto px-4 pb-16">
      <div className="pt-6 pb-8">
        {/* Profile Header */}
        <div className="glass rounded-3xl p-6 md:p-8 border border-white/5 relative overflow-hidden mb-6">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-cyan-600/5" />
          <div className="relative flex flex-col md:flex-row gap-6 items-start md:items-center">
            <div className="relative">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-4xl font-bold text-white">
                А
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-white text-xs font-bold border-2 border-background">
                7
              </div>
            </div>
            <div className="flex-1">
              <h1 className="font-montserrat font-black text-2xl mb-1">Анна Смирнова</h1>
              <p className="text-muted-foreground text-sm mb-3">anna@example.com • Участник с января 2024</p>
              <div className="flex flex-wrap gap-2">
                {interests.map(t => (
                  <span key={t} className="text-xs px-3 py-1 rounded-full glass border border-purple-500/20 text-purple-300">{t}</span>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 md:text-center">
              <div>
                <div className="font-montserrat font-black text-xl gradient-text">3</div>
                <div className="text-xs text-muted-foreground">курса</div>
              </div>
              <div>
                <div className="font-montserrat font-black text-xl gradient-text">1</div>
                <div className="text-xs text-muted-foreground">сертификат</div>
              </div>
              <div>
                <div className="font-montserrat font-black text-xl gradient-text">47ч</div>
                <div className="text-xs text-muted-foreground">обучения</div>
              </div>
            </div>
          </div>

          {/* Trajectory */}
          <div className="relative mt-6 p-4 rounded-2xl bg-white/5 border border-purple-500/15">
            <div className="flex items-center gap-2 mb-3">
              <Icon name="Sparkles" size={14} className="text-purple-400" />
              <span className="text-sm font-medium gradient-text">Твоя адаптивная траектория</span>
            </div>
            <div className="flex items-center gap-3 flex-wrap">
              {["Основы ИИ ✓", "Промпты ✓", "Психология →", "Мотивация", "ИИ-мышление"].map((step, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className={`text-sm px-3 py-1 rounded-lg font-medium ${
                    step.includes('✓') ? 'text-green-400 bg-green-500/15 border border-green-500/20'
                    : step.includes('→') ? 'text-purple-400 bg-purple-500/20 border border-purple-500/30'
                    : 'text-muted-foreground bg-white/5 border border-white/10'
                  }`}>{step}</span>
                  {i < 4 && <Icon name="ChevronRight" size={12} className="text-muted-foreground" />}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          {[
            { id: "info", label: "Обо мне" },
            { id: "achievements", label: "Достижения" },
            { id: "settings", label: "Настройки" },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all border ${
                activeTab === tab.id
                  ? "nav-active border-purple-500/30"
                  : "glass border-white/10 text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === "info" && (
          <div className="space-y-4 animate-fade-in">
            <div className="glass rounded-2xl p-5 border border-white/5">
              <h3 className="font-montserrat font-bold mb-4">Стиль обучения</h3>
              <div className="space-y-3">
                {[
                  { label: "Визуал (видео и схемы)", value: 80 },
                  { label: "Практик (упражнения)", value: 65 },
                  { label: "Теоретик (тексты)", value: 40 },
                ].map((s, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-muted-foreground">{s.label}</span>
                      <span className="text-purple-400">{s.value}%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full">
                      <div className="progress-bar h-2 rounded-full transition-all" style={{width: `${s.value}%`}} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass rounded-2xl p-5 border border-white/5">
              <h3 className="font-montserrat font-bold mb-4">Активность за неделю</h3>
              <div className="flex items-end gap-2 h-20">
                {[40, 70, 55, 90, 60, 80, 100].map((h, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1">
                    <div
                      className="w-full rounded-t-lg transition-all"
                      style={{
                        height: `${h}%`,
                        background: i === 6
                          ? 'linear-gradient(180deg, #a855f7, #22d3ee)'
                          : 'rgba(168, 85, 247, 0.3)'
                      }}
                    />
                    <span className="text-xs text-muted-foreground">
                      {["Пн","Вт","Ср","Чт","Пт","Сб","Вс"][i]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "achievements" && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 animate-fade-in">
            {achievements.map((a, i) => (
              <div
                key={i}
                className={`glass rounded-2xl p-5 text-center border transition-all ${
                  a.earned
                    ? "border-purple-500/25 bg-gradient-to-br from-purple-600/10 to-cyan-600/5"
                    : "border-white/5 opacity-40"
                }`}
              >
                <div className="text-3xl mb-2">{a.icon}</div>
                <div className="font-montserrat font-bold text-sm mb-1">{a.title}</div>
                <div className="text-xs text-muted-foreground">{a.desc}</div>
                {a.earned && <div className="mt-2 text-xs text-green-400">✓ Получено</div>}
              </div>
            ))}
          </div>
        )}

        {activeTab === "settings" && (
          <div className="space-y-4 animate-fade-in">
            {[
              { label: "Уведомления о новых курсах", enabled: true },
              { label: "Напоминания об уроках", enabled: true },
              { label: "Еженедельный отчёт", enabled: false },
              { label: "Советы по траектории", enabled: true },
            ].map((s, i) => (
              <div key={i} className="glass rounded-2xl p-4 border border-white/5 flex items-center justify-between">
                <span className="text-sm">{s.label}</span>
                <div className={`w-10 h-6 rounded-full relative cursor-pointer transition-all ${s.enabled ? 'bg-gradient-to-r from-purple-500 to-cyan-500' : 'bg-white/20'}`}>
                  <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all ${s.enabled ? 'right-1' : 'left-1'}`} />
                </div>
              </div>
            ))}

            <button
              onClick={() => onNavigate("support")}
              className="w-full py-3 rounded-2xl glass border border-white/10 text-sm text-muted-foreground hover:text-foreground transition-all flex items-center justify-center gap-2"
            >
              <Icon name="HelpCircle" size={15} />
              Обратиться в поддержку
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
