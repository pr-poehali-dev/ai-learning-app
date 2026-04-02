import Icon from "@/components/ui/icon";

const earned = [
  {
    id: 1,
    title: "Основы искусственного интеллекта",
    category: "ИИ",
    date: "28 марта 2024",
    hours: 12,
    grade: "Отлично",
    id_num: "NM-2024-AI-001",
    gradient: "from-purple-600/40 via-cyan-600/20 to-blue-600/10",
    border: "border-purple-500/30",
    emoji: "🤖",
  },
];

const upcoming = [
  { emoji: "🤖", title: "ChatGPT и промпт-инжиниринг", progress: 65, leftLessons: 5 },
  { emoji: "🧘", title: "Управление тревогой", progress: 30, leftLessons: 7 },
];

export default function CertificatesPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 pb-16">
      <div className="pt-6 pb-8">
        <h1 className="font-montserrat font-black text-4xl mb-2">Сертификаты</h1>
        <p className="text-muted-foreground">Твои подтверждённые достижения</p>
      </div>

      {/* Earned */}
      <div className="mb-10">
        <h2 className="font-montserrat font-bold text-xl mb-5 flex items-center gap-2">
          <Icon name="Award" size={16} className="text-yellow-400" />
          Получены ({earned.length})
        </h2>
        {earned.map(cert => (
          <div
            key={cert.id}
            className={`glass rounded-3xl p-8 border ${cert.border} bg-gradient-to-br ${cert.gradient} relative overflow-hidden mb-4`}
          >
            {/* Decorative rings */}
            <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full border border-purple-500/10" />
            <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full border border-purple-500/10" />
            <div className="absolute top-4 right-4 text-4xl animate-float">{cert.emoji}</div>

            <div className="relative">
              <div className="inline-flex items-center gap-2 glass rounded-full px-3 py-1 text-xs text-purple-300 border border-purple-500/20 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                Верифицировано NeuraMind
              </div>

              <h3 className="font-montserrat font-black text-2xl md:text-3xl mb-2">{cert.title}</h3>
              <p className="text-muted-foreground text-sm mb-6">Анна Смирнова успешно завершила курс с оценкой «{cert.grade}»</p>

              <div className="flex flex-wrap items-center gap-5 text-sm text-muted-foreground mb-6">
                <span className="flex items-center gap-1.5">
                  <Icon name="Calendar" size={14} className="text-purple-400" />
                  {cert.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Icon name="Clock" size={14} className="text-cyan-400" />
                  {cert.hours} академических часов
                </span>
                <span className="flex items-center gap-1.5">
                  <Icon name="Hash" size={14} className="text-pink-400" />
                  {cert.id_num}
                </span>
              </div>

              <div className="flex flex-wrap gap-3">
                <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:opacity-90 transition-all glow-purple">
                  <Icon name="Download" size={14} />
                  Скачать PDF
                </button>
                <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium glass border border-white/10 hover:bg-white/8 transition-all">
                  <Icon name="Share2" size={14} />
                  Поделиться
                </button>
                <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium glass border border-white/10 hover:bg-white/8 transition-all">
                  <Icon name="Link" size={14} />
                  LinkedIn
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Upcoming */}
      <div className="mb-10">
        <h2 className="font-montserrat font-bold text-xl mb-5 flex items-center gap-2">
          <Icon name="Clock" size={16} className="text-cyan-400" />
          В процессе получения
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {upcoming.map((c, i) => (
            <div key={i} className="glass rounded-2xl p-5 border border-white/5 hover:border-purple-500/20 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{c.emoji}</span>
                <div>
                  <h3 className="font-medium text-sm">{c.title}</h3>
                  <p className="text-xs text-muted-foreground">Осталось {c.leftLessons} уроков</p>
                </div>
              </div>
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="text-muted-foreground">До сертификата</span>
                <span className="text-purple-400">{c.progress}%</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full">
                <div className="progress-bar h-2 rounded-full" style={{width: `${c.progress}%`}} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* How it Works */}
      <div className="glass rounded-2xl p-6 border border-white/5">
        <h2 className="font-montserrat font-bold text-lg mb-5 flex items-center gap-2">
          <Icon name="Info" size={16} className="text-blue-400" />
          Как получить сертификат
        </h2>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { step: "01", icon: "BookOpen", title: "Пройди все уроки", desc: "Посмотри все видео и прочитай материалы курса" },
            { step: "02", icon: "CheckCircle", title: "Сдай тест", desc: "Пройди итоговый тест с результатом от 70%" },
            { step: "03", icon: "Award", title: "Получи сертификат", desc: "Мгновенно получи PDF с уникальным QR-кодом" },
          ].map((s, i) => (
            <div key={i} className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600/30 to-cyan-600/20 border border-purple-500/20 flex items-center justify-center shrink-0">
                <span className="font-montserrat font-black text-xs gradient-text">{s.step}</span>
              </div>
              <div>
                <h4 className="font-medium text-sm mb-1">{s.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
