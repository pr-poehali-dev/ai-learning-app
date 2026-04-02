import Icon from "@/components/ui/icon";
import { Section } from "@/pages/Index";

const categories = [
  { icon: "🤖", label: "Искусственный интеллект", count: 24, gradient: "from-purple-500/20 to-cyan-500/20", border: "border-purple-500/20" },
  { icon: "🧠", label: "Психология", count: 18, gradient: "from-pink-500/20 to-orange-500/20", border: "border-pink-500/20" },
  { icon: "🚀", label: "Мотивация", count: 12, gradient: "from-orange-500/20 to-yellow-500/20", border: "border-orange-500/20" },
];

const featuredCourses = [
  {
    id: 1,
    title: "ChatGPT и промпт-инжиниринг",
    category: "ИИ",
    categoryColor: "text-purple-400",
    level: "Начинающий",
    lessons: 14,
    students: 1240,
    rating: 4.9,
    progress: 65,
    gradient: "from-purple-600/30 to-cyan-600/20",
    emoji: "🤖",
  },
  {
    id: 2,
    title: "Управление тревогой",
    category: "Психология",
    categoryColor: "text-pink-400",
    level: "Средний",
    lessons: 10,
    students: 890,
    rating: 4.8,
    progress: 30,
    gradient: "from-pink-600/30 to-purple-600/20",
    emoji: "🧘",
  },
  {
    id: 3,
    title: "Система высоких достижений",
    category: "Мотивация",
    categoryColor: "text-orange-400",
    level: "Продвинутый",
    lessons: 16,
    students: 2100,
    rating: 5.0,
    progress: 0,
    gradient: "from-orange-600/30 to-pink-600/20",
    emoji: "🎯",
  },
];

const stats = [
  { value: "50+", label: "курсов", icon: "BookOpen" },
  { value: "4200", label: "студентов", icon: "Users" },
  { value: "98%", label: "довольных", icon: "Star" },
  { value: "24/7", label: "поддержка", icon: "Headphones" },
];

interface HomePageProps {
  onNavigate: (s: Section) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-4 pb-16">
      {/* Hero */}
      <section className="pt-6 sm:pt-8 pb-10 sm:pb-16 text-center relative">
        <div className="inline-flex items-center gap-2 glass rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm text-muted-foreground mb-5 border border-purple-500/20 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0" />
          Адаптивное обучение на основе ИИ
        </div>

        <h1 className="font-montserrat font-black text-4xl sm:text-5xl md:text-7xl leading-tight mb-5 animate-slide-up">
          Прокачай разум
          <br />
          <span className="gradient-text glow-text-purple">с нейросетями</span>
        </h1>

        <p className="text-sm sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in px-2" style={{animationDelay: '0.2s'}}>
          Персональные траектории обучения по ИИ, психологии и мотивации.
          Система адаптируется под твой прогресс и стиль мышления.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 animate-fade-in px-4 sm:px-0" style={{animationDelay: '0.3s'}}>
          <button
            onClick={() => onNavigate("courses")}
            className="w-full sm:w-auto px-8 py-3.5 sm:py-4 rounded-2xl font-montserrat font-bold text-base text-white bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 transition-all duration-200 glow-purple active:scale-95"
          >
            Начать обучение
          </button>
          <button
            onClick={() => onNavigate("courses")}
            className="w-full sm:w-auto px-8 py-3.5 sm:py-4 rounded-2xl font-montserrat font-bold text-base glass border border-white/10 hover:bg-white/8 transition-all duration-200 flex items-center justify-center gap-2"
          >
            <Icon name="Play" size={16} />
            Смотреть демо
          </button>
        </div>

        <div className="mt-10 sm:mt-16 relative rounded-2xl sm:rounded-3xl overflow-hidden glass border border-purple-500/10 max-w-4xl mx-auto">
          <img
            src="https://cdn.poehali.dev/projects/9c924e3a-0603-4b7a-8a04-722f97a3c3b6/files/5b9fb5a0-ff5c-4537-b568-399ce065a049.jpg"
            alt="NeuraMind Platform"
            className="w-full h-44 sm:h-64 md:h-96 object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 flex items-end justify-between gap-3">
            <div className="glass rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/10 min-w-0 flex-1">
              <div className="text-[10px] sm:text-xs text-muted-foreground mb-1">Твоя траектория</div>
              <div className="font-montserrat font-bold text-xs sm:text-sm gradient-text truncate">ИИ → Психология → Мотивация</div>
              <div className="mt-2">
                <div className="h-1.5 bg-white/10 rounded-full">
                  <div className="progress-bar h-1.5 rounded-full" style={{width: '65%'}} />
                </div>
                <div className="text-[10px] sm:text-xs text-muted-foreground mt-1">65% пути пройдено</div>
              </div>
            </div>
            <div className="glass rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/10 text-center shrink-0">
              <div className="text-xl sm:text-2xl font-montserrat font-black gradient-text">🔥 7</div>
              <div className="text-[10px] sm:text-xs text-muted-foreground">дней подряд</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-10 sm:mb-16">
        {stats.map((s, i) => (
          <div key={i} className="glass rounded-2xl p-5 text-center card-3d border border-white/5 hover:border-purple-500/20 transition-all">
            <Icon name={s.icon} size={20} className="text-neon-purple mx-auto mb-2 text-purple-400" />
            <div className="font-montserrat font-black text-2xl gradient-text">{s.value}</div>
            <div className="text-sm text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </section>

      {/* Categories */}
      <section className="mb-16">
        <h2 className="font-montserrat font-black text-2xl mb-6">Направления</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => onNavigate("courses")}
              className={`glass rounded-2xl p-6 text-left transition-all duration-200 hover:scale-[1.02] hover:border-purple-500/30 border ${cat.border} bg-gradient-to-br ${cat.gradient}`}
            >
              <div className="text-4xl mb-3">{cat.icon}</div>
              <div className="font-montserrat font-bold text-lg mb-1">{cat.label}</div>
              <div className="text-sm text-muted-foreground">{cat.count} курсов</div>
            </button>
          ))}
        </div>
      </section>

      {/* Featured Courses */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-montserrat font-black text-2xl">Популярные курсы</h2>
          <button
            onClick={() => onNavigate("courses")}
            className="text-sm text-purple-400 hover:text-purple-300 flex items-center gap-1 transition-colors"
          >
            Все курсы <Icon name="ArrowRight" size={14} />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {featuredCourses.map((course) => (
            <div
              key={course.id}
              onClick={() => onNavigate("course")}
              className={`glass rounded-2xl overflow-hidden card-3d border border-white/5 hover:border-purple-500/20 transition-all cursor-pointer bg-gradient-to-br ${course.gradient}`}
            >
              <div className="p-6">
                <div className="text-4xl mb-4">{course.emoji}</div>
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-xs font-medium ${course.categoryColor}`}>{course.category}</span>
                  <span className="text-xs text-muted-foreground">•</span>
                  <span className="text-xs text-muted-foreground">{course.level}</span>
                </div>
                <h3 className="font-montserrat font-bold text-base mb-3">{course.title}</h3>

                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                  <span className="flex items-center gap-1"><Icon name="BookOpen" size={12} /> {course.lessons} уроков</span>
                  <span className="flex items-center gap-1"><Icon name="Users" size={12} /> {course.students}</span>
                  <span className="flex items-center gap-1"><Icon name="Star" size={12} className="text-yellow-400" /> {course.rating}</span>
                </div>

                {course.progress > 0 ? (
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-muted-foreground">Прогресс</span>
                      <span className="text-purple-400">{course.progress}%</span>
                    </div>
                    <div className="h-1.5 bg-white/10 rounded-full">
                      <div className="progress-bar h-1.5 rounded-full" style={{width: `${course.progress}%`}} />
                    </div>
                  </div>
                ) : (
                  <button className="w-full py-2.5 rounded-xl text-sm font-medium bg-gradient-to-r from-purple-600/40 to-cyan-600/30 hover:from-purple-600/60 hover:to-cyan-600/50 transition-all border border-purple-500/20 text-white">
                    Начать курс
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}