import Icon from "@/components/ui/icon";

const activeCourses = [
  { emoji: "🤖", title: "ChatGPT и промпт-инжиниринг", progress: 65, nextLesson: "Урок 10: Системные промпты", timeLeft: "3 ч 20 мин", cat: "ИИ", gradient: "from-purple-600/20 to-cyan-600/10" },
  { emoji: "🧘", title: "Управление тревогой и стрессом", progress: 30, nextLesson: "Урок 4: Техника 4-7-8", timeLeft: "5 ч 15 мин", cat: "Психология", gradient: "from-pink-600/20 to-purple-600/10" },
];

const weekActivity = [60, 80, 40, 100, 70, 50, 90];
const days = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

const milestones = [
  { icon: "✅", text: "Завершён курс «Основы ИИ»", date: "28 марта", done: true },
  { icon: "✅", text: "Получен первый сертификат", date: "28 марта", done: true },
  { icon: "⏳", text: "Завершить «ChatGPT и промпты»", date: "В процессе", done: false },
  { icon: "🔒", text: "Начать «Эмоциональный интеллект»", date: "Следующий шаг", done: false },
  { icon: "🔒", text: "Пройти «Систему достижений»", date: "Цель апрель", done: false },
];

export default function ProgressPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 pb-16">
      <div className="pt-6 pb-8">
        <h1 className="font-montserrat font-black text-4xl mb-2">Мой прогресс</h1>
        <p className="text-muted-foreground">Траектория адаптируется под твои результаты</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { value: "65%", label: "Общий прогресс", icon: "TrendingUp", color: "text-purple-400" },
          { value: "47ч", label: "Время обучения", icon: "Clock", color: "text-cyan-400" },
          { value: "🔥 7", label: "Дней подряд", icon: "Flame", color: "text-orange-400" },
          { value: "1", label: "Сертификат", icon: "Award", color: "text-yellow-400" },
        ].map((s, i) => (
          <div key={i} className="glass rounded-2xl p-4 border border-white/5 text-center card-3d hover:border-purple-500/20 transition-all">
            <Icon name={s.icon} size={18} className={`${s.color} mx-auto mb-2`} />
            <div className="font-montserrat font-black text-xl gradient-text">{s.value}</div>
            <div className="text-xs text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Active Courses */}
      <div className="mb-8">
        <h2 className="font-montserrat font-bold text-xl mb-4">Продолжить обучение</h2>
        <div className="space-y-4">
          {activeCourses.map((c, i) => (
            <div key={i} className={`glass rounded-2xl p-5 border border-white/5 hover:border-purple-500/20 transition-all bg-gradient-to-br ${c.gradient}`}>
              <div className="flex items-start gap-4">
                <span className="text-3xl">{c.emoji}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-montserrat font-bold text-base truncate pr-4">{c.title}</h3>
                    <span className="text-sm font-medium text-purple-400 shrink-0">{c.progress}%</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{c.nextLesson}</p>

                  <div className="mb-3">
                    <div className="h-2 bg-white/10 rounded-full">
                      <div className="progress-bar h-2 rounded-full" style={{width: `${c.progress}%`}} />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Icon name="Clock" size={11} /> {c.timeLeft} осталось
                    </span>
                    <button className="text-xs px-4 py-1.5 rounded-lg bg-gradient-to-r from-purple-600/50 to-cyan-600/30 hover:from-purple-600/70 hover:to-cyan-600/50 transition-all text-white border border-purple-500/30 font-medium">
                      Продолжить →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Weekly Chart */}
        <div className="glass rounded-2xl p-5 border border-white/5">
          <h2 className="font-montserrat font-bold text-lg mb-4 flex items-center gap-2">
            <Icon name="BarChart2" size={16} className="text-purple-400" />
            Активность за неделю
          </h2>
          <div className="flex items-end gap-2 h-28">
            {weekActivity.map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1.5">
                <div
                  className="w-full rounded-t-lg transition-all"
                  style={{
                    height: `${h}%`,
                    background: h === 100
                      ? 'linear-gradient(180deg, #a855f7, #22d3ee)'
                      : 'rgba(168, 85, 247, 0.35)'
                  }}
                />
                <span className="text-xs text-muted-foreground">{days[i]}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-3 text-center">Среднее время: 48 мин/день</p>
        </div>

        {/* Streak Calendar */}
        <div className="glass rounded-2xl p-5 border border-white/5">
          <h2 className="font-montserrat font-bold text-lg mb-4 flex items-center gap-2">
            <Icon name="Calendar" size={16} className="text-orange-400" />
            Стрик апреля
          </h2>
          <div className="grid grid-cols-7 gap-1.5">
            {Array.from({length: 30}, (_, i) => {
              const isActive = i < 7;
              const isToday = i === 6;
              return (
                <div
                  key={i}
                  className={`aspect-square rounded-md flex items-center justify-center text-xs transition-all ${
                    isToday ? 'bg-gradient-to-br from-purple-500 to-cyan-500 text-white font-bold shadow-lg shadow-purple-500/30'
                    : isActive ? 'bg-purple-500/40 text-purple-300'
                    : 'bg-white/5 text-muted-foreground/40'
                  }`}
                >
                  {i + 1}
                </div>
              );
            })}
          </div>
          <p className="text-xs text-center mt-3 text-orange-400 font-medium">🔥 Продолжай! Уже 7 дней подряд</p>
        </div>
      </div>

      {/* Milestones */}
      <div className="glass rounded-2xl p-5 border border-white/5">
        <h2 className="font-montserrat font-bold text-xl mb-5 flex items-center gap-2">
          <Icon name="MapPin" size={16} className="text-cyan-400" />
          Траектория обучения
        </h2>
        <div className="relative pl-6">
          <div className="absolute left-2 top-2 bottom-2 w-0.5 bg-gradient-to-b from-purple-500 to-transparent" />
          {milestones.map((m, i) => (
            <div key={i} className={`flex items-start gap-3 mb-5 last:mb-0 ${!m.done ? 'opacity-50' : ''}`}>
              <div className={`absolute left-0 w-4 h-4 rounded-full flex items-center justify-center text-xs
                ${m.done ? 'bg-purple-500' : 'bg-white/10 border border-white/20'}`}
                style={{top: `${i * 60 + 8}px`}}
              />
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span>{m.icon}</span>
                  <span className="text-sm font-medium">{m.text}</span>
                </div>
                <span className={`text-xs mt-0.5 block ${m.done ? 'text-green-400' : 'text-muted-foreground'}`}>{m.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
