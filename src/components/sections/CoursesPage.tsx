import { useState } from "react";
import Icon from "@/components/ui/icon";
import { Section } from "@/pages/Index";

const filters = ["Все", "ИИ", "Психология", "Мотивация"];
const levels = ["Любой", "Начинающий", "Средний", "Продвинутый"];

const courses = [
  { id: 1, emoji: "🤖", title: "ChatGPT и промпт-инжиниринг", cat: "ИИ", level: "Начинающий", lessons: 14, hours: 8, students: 1240, rating: 4.9, price: "Бесплатно", tags: ["GPT", "Промпты", "Автоматизация"], gradient: "from-purple-600/20 to-cyan-600/10", progress: 65 },
  { id: 2, emoji: "🧠", title: "Управление тревогой и стрессом", cat: "Психология", level: "Начинающий", lessons: 10, hours: 5, students: 890, rating: 4.8, price: "1 490 ₽", tags: ["КПТ", "Медитация", "Тревога"], gradient: "from-pink-600/20 to-purple-600/10", progress: 30 },
  { id: 3, emoji: "🎯", title: "Система высоких достижений", cat: "Мотивация", level: "Продвинутый", lessons: 16, hours: 12, students: 2100, rating: 5.0, price: "2 990 ₽", tags: ["Цели", "Продуктивность", "Привычки"], gradient: "from-orange-600/20 to-pink-600/10", progress: 0 },
  { id: 4, emoji: "⚡", title: "Нейросети для бизнеса", cat: "ИИ", level: "Средний", lessons: 20, hours: 15, students: 756, rating: 4.7, price: "3 490 ₽", tags: ["Midjourney", "Автоматизация", "Стартап"], gradient: "from-cyan-600/20 to-blue-600/10", progress: 0 },
  { id: 5, emoji: "💚", title: "Эмоциональный интеллект", cat: "Психология", level: "Средний", lessons: 12, hours: 7, students: 1050, rating: 4.9, price: "1 990 ₽", tags: ["ЭИ", "Отношения", "Эмпатия"], gradient: "from-green-600/20 to-cyan-600/10", progress: 0 },
  { id: 6, emoji: "🔥", title: "Поток: жить в состоянии кайфа", cat: "Мотивация", level: "Начинающий", lessons: 8, hours: 4, students: 3400, rating: 4.8, price: "990 ₽", tags: ["Поток", "Счастье", "Фокус"], gradient: "from-yellow-600/20 to-orange-600/10", progress: 0 },
];

const recommended = [
  { title: "Начни с основ ИИ", reason: "Твой профиль: новичок в технологиях", icon: "🤖" },
  { title: "Психология принятия решений", reason: "Популярно среди похожих на тебя", icon: "💡" },
];

interface CoursesPageProps {
  onNavigate?: (s: Section) => void;
}

export default function CoursesPage({ onNavigate }: CoursesPageProps) {
  const [activeFilter, setActiveFilter] = useState("Все");
  const [activeLevel, setActiveLevel] = useState("Любой");
  const [search, setSearch] = useState("");

  const filtered = courses.filter(c => {
    const matchCat = activeFilter === "Все" || c.cat === activeFilter;
    const matchLevel = activeLevel === "Любой" || c.level === activeLevel;
    const matchSearch = c.title.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchLevel && matchSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-4 pb-16">
      <div className="pt-4 sm:pt-6 pb-5 sm:pb-8">
        <h1 className="font-montserrat font-black text-3xl sm:text-4xl mb-2">Каталог курсов</h1>
        <p className="text-sm sm:text-base text-muted-foreground">Выбери путь — система подберёт траекторию под тебя</p>
      </div>

      {/* Recommended */}
      <div className="glass rounded-2xl p-5 mb-8 border border-purple-500/20">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-purple-400"><Icon name="Sparkles" size={16} /></span>
          <span className="font-montserrat font-bold text-sm gradient-text">Рекомендовано для тебя</span>
        </div>
        <div className="grid md:grid-cols-2 gap-3">
          {recommended.map((r, i) => (
            <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/8 cursor-pointer transition-all">
              <span className="text-2xl">{r.icon}</span>
              <div>
                <div className="font-medium text-sm">{r.title}</div>
                <div className="text-xs text-muted-foreground">{r.reason}</div>
              </div>
              <Icon name="ChevronRight" size={14} className="ml-auto text-muted-foreground" />
            </div>
          ))}
        </div>
      </div>

      {/* Search + Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Icon name="Search" size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Найти курс..."
            className="w-full glass rounded-xl pl-10 pr-4 py-3 text-sm border border-white/10 bg-transparent focus:outline-none focus:border-purple-500/50 text-foreground placeholder:text-muted-foreground"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all border ${
                activeFilter === f
                  ? "bg-gradient-to-r from-purple-600/50 to-cyan-600/30 border-purple-500/40 text-white"
                  : "glass border-white/10 text-muted-foreground hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="flex gap-2 mb-8 flex-wrap">
        {levels.map(l => (
          <button
            key={l}
            onClick={() => setActiveLevel(l)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all border ${
              activeLevel === l
                ? "border-cyan-500/40 text-cyan-400 bg-cyan-500/10"
                : "border-white/10 text-muted-foreground hover:text-foreground"
            }`}
          >
            {l}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map(course => (
          <div
            key={course.id}
            onClick={() => onNavigate?.("course")}
            className={`glass rounded-2xl overflow-hidden card-3d border border-white/5 hover:border-purple-500/20 transition-all cursor-pointer bg-gradient-to-br ${course.gradient}`}
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <span className="text-4xl">{course.emoji}</span>
                <span className={`text-xs px-2 py-1 rounded-lg font-medium ${
                  course.price === "Бесплатно"
                    ? "bg-green-500/20 text-green-400 border border-green-500/20"
                    : "bg-purple-500/20 text-purple-300 border border-purple-500/20"
                }`}>
                  {course.price}
                </span>
              </div>

              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs text-muted-foreground">{course.cat}</span>
                <span className="text-xs text-muted-foreground">•</span>
                <span className="text-xs text-muted-foreground">{course.level}</span>
              </div>

              <h3 className="font-montserrat font-bold text-base mb-3">{course.title}</h3>

              <div className="flex flex-wrap gap-1 mb-4">
                {course.tags.map(t => (
                  <span key={t} className="text-xs px-2 py-0.5 rounded-md bg-white/5 text-muted-foreground border border-white/5">{t}</span>
                ))}
              </div>

              <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                <span className="flex items-center gap-1"><Icon name="BookOpen" size={11} /> {course.lessons}</span>
                <span className="flex items-center gap-1"><Icon name="Clock" size={11} /> {course.hours}ч</span>
                <span className="flex items-center gap-1"><Icon name="Users" size={11} /> {course.students}</span>
                <span className="flex items-center gap-1 text-yellow-400"><Icon name="Star" size={11} /> {course.rating}</span>
              </div>

              {course.progress > 0 ? (
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-muted-foreground">Продолжить</span>
                    <span className="text-purple-400">{course.progress}%</span>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-full">
                    <div className="progress-bar h-1.5 rounded-full" style={{width: `${course.progress}%`}} />
                  </div>
                </div>
              ) : (
                <button className="w-full py-2.5 rounded-xl text-sm font-medium bg-gradient-to-r from-purple-600/40 to-cyan-600/30 hover:from-purple-600/60 hover:to-cyan-600/50 transition-all border border-purple-500/20 text-white">
                  {course.price === "Бесплатно" ? "Начать бесплатно" : "Записаться"}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-muted-foreground">
          <span className="text-4xl block mb-3">🔍</span>
          <p>Курсы не найдены. Попробуй другой запрос.</p>
        </div>
      )}
    </div>
  );
}