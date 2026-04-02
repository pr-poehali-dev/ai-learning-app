import { useState, useRef } from "react";
import Icon from "@/components/ui/icon";
import { Section } from "@/pages/Index";

const modules = [
  {
    id: 1,
    title: "Введение в промпт-инжиниринг",
    lessons: [
      { id: 1, title: "Что такое промпт и зачем это нужно", duration: "8:24", done: true, type: "video" },
      { id: 2, title: "Анатомия идеального промпта", duration: "12:10", done: true, type: "video" },
      { id: 3, title: "Практика: первые промпты", duration: "5:00", done: true, type: "practice" },
    ]
  },
  {
    id: 2,
    title: "Техники управления контекстом",
    lessons: [
      { id: 4, title: "Системные инструкции: как думает GPT", duration: "15:32", done: true, type: "video" },
      { id: 5, title: "Chain-of-Thought и пошаговое мышление", duration: "18:45", done: false, type: "video", active: true },
      { id: 6, title: "Few-shot обучение через примеры", duration: "11:20", done: false, type: "video" },
      { id: 7, title: "Тест: модуль 2", duration: "10:00", done: false, type: "test" },
    ]
  },
  {
    id: 3,
    title: "Продвинутые паттерны",
    lessons: [
      { id: 8, title: "Ролевые промпты и персонажи", duration: "14:18", done: false, type: "video" },
      { id: 9, title: "Промпты для кода и данных", duration: "20:05", done: false, type: "video" },
      { id: 10, title: "Автоматизация с Zapier и Make", duration: "25:00", done: false, type: "video" },
    ]
  },
  {
    id: 4,
    title: "Применение в бизнесе",
    lessons: [
      { id: 11, title: "Маркетинг: тексты, посты, рекламы", duration: "16:40", done: false, type: "video" },
      { id: 12, title: "Продажи: скрипты и возражения", duration: "13:55", done: false, type: "video" },
      { id: 13, title: "Финальный проект", duration: "—", done: false, type: "project" },
      { id: 14, title: "Итоговый тест и сертификат", duration: "15:00", done: false, type: "test" },
    ]
  },
];

const reviews = [
  { name: "Дмитрий К.", avatar: "Д", grad: "from-blue-500 to-purple-500", text: "Лучший курс по GPT что я проходил. Структура идеальная, сразу применил в работе.", rating: 5, date: "20 марта" },
  { name: "Ольга М.", avatar: "О", grad: "from-pink-500 to-orange-500", text: "Практические задания просто огонь. За неделю автоматизировал 3 рабочих процесса.", rating: 5, date: "15 марта" },
  { name: "Арtem Н.", avatar: "А", grad: "from-green-500 to-cyan-500", text: "Четко, без воды. Ценность каждого урока максимальная. Рекомендую всем.", rating: 5, date: "10 марта" },
];

interface CourseSinglePageProps {
  onNavigate: (s: Section) => void;
}

export default function CourseSinglePage({ onNavigate }: CourseSinglePageProps) {
  const [openModules, setOpenModules] = useState<number[]>([1, 2]);
  const [activeLesson, setActiveLesson] = useState(5);
  const [enrolled, setEnrolled] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [videoProgress, setVideoProgress] = useState(38);
  const progressRef = useRef<HTMLDivElement>(null);

  const toggleModule = (id: number) =>
    setOpenModules(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);

  const totalLessons = modules.reduce((s, m) => s + m.lessons.length, 0);
  const doneLessons = modules.reduce((s, m) => s + m.lessons.filter(l => l.done).length, 0);
  const progress = Math.round((doneLessons / totalLessons) * 100);

  const currentLesson = modules.flatMap(m => m.lessons).find(l => l.id === activeLesson);

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    setVideoProgress(Math.round((x / rect.width) * 100));
  };

  const typeIcon = (type: string) => {
    if (type === "video") return "Play";
    if (type === "practice") return "PenLine";
    if (type === "test") return "ClipboardCheck";
    return "FolderOpen";
  };

  return (
    <div className="max-w-7xl mx-auto px-4 pb-20">
      {/* Back */}
      <div className="pt-6 mb-6">
        <button
          onClick={() => onNavigate("courses")}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
        >
          <Icon name="ArrowLeft" size={15} className="group-hover:-translate-x-1 transition-transform" />
          Все курсы
        </button>
      </div>

      {/* Hero */}
      <div className="relative rounded-3xl overflow-hidden mb-8 border border-white/5">
        {/* Video area */}
        <div className="relative bg-black aspect-video max-h-[480px] w-full flex items-center justify-center">
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse at 30% 40%, rgba(168,85,247,0.25) 0%, transparent 60%), radial-gradient(ellipse at 70% 60%, rgba(34,211,238,0.15) 0%, transparent 60%)"
            }}
          />

          {/* Fake waveform */}
          <div className="absolute bottom-16 left-0 right-0 flex items-end justify-center gap-0.5 px-8 opacity-30">
            {Array.from({length: 80}, (_, i) => (
              <div
                key={i}
                className="w-1 rounded-full"
                style={{
                  height: `${12 + Math.sin(i * 0.4) * 8 + Math.random() * 10}px`,
                  background: i / 80 < videoProgress / 100
                    ? 'linear-gradient(180deg, #a855f7, #22d3ee)'
                    : 'rgba(255,255,255,0.3)'
                }}
              />
            ))}
          </div>

          {/* Lesson title overlay */}
          <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
            <div className="glass rounded-xl px-3 py-1.5 text-xs border border-white/10 max-w-xs truncate">
              Урок {activeLesson}: {currentLesson?.title}
            </div>
            <div className="glass rounded-xl px-3 py-1.5 text-xs border border-white/10">
              {currentLesson?.duration}
            </div>
          </div>

          {/* Play Button */}
          <button
            onClick={() => setPlaying(!playing)}
            className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center transition-all hover:scale-110 active:scale-95"
            style={{
              background: playing
                ? 'rgba(255,255,255,0.15)'
                : 'linear-gradient(135deg, #a855f7, #22d3ee)',
              boxShadow: playing ? 'none' : '0 0 40px rgba(168,85,247,0.5)'
            }}
          >
            <Icon name={playing ? "Pause" : "Play"} size={24} className="text-white" style={{marginLeft: playing ? 0 : 3}} />
          </button>

          {/* Controls bar */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
            {/* Progress */}
            <div
              className="h-1.5 bg-white/20 rounded-full cursor-pointer mb-3 relative group"
              onClick={handleProgressClick}
              ref={progressRef}
            >
              <div
                className="h-full rounded-full relative"
                style={{
                  width: `${videoProgress}%`,
                  background: 'linear-gradient(90deg, #a855f7, #22d3ee)'
                }}
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity shadow-lg" />
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs text-white/70">
              <button onClick={() => setPlaying(!playing)}>
                <Icon name={playing ? "Pause" : "Play"} size={14} className="text-white" />
              </button>
              <span className="font-mono">
                {Math.floor(videoProgress * 8.24 / 100)}:{String(Math.floor(((videoProgress * 8.24 / 100) % 1) * 60)).padStart(2,'0')} / 8:24
              </span>
              <div className="flex-1" />
              <button className="flex items-center gap-1 hover:text-white transition-colors">
                <Icon name="Volume2" size={13} /> 100%
              </button>
              <button className="hover:text-white transition-colors text-xs">1x</button>
              <button className="hover:text-white transition-colors">
                <Icon name="Maximize" size={13} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-[1fr_380px] gap-6">
        {/* LEFT */}
        <div>
          {/* Course Header */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs px-2.5 py-1 rounded-lg bg-purple-500/20 text-purple-300 border border-purple-500/20 font-medium">ИИ</span>
              <span className="text-xs text-muted-foreground">•</span>
              <span className="text-xs text-muted-foreground">Начинающий</span>
              <span className="text-xs text-muted-foreground">•</span>
              <span className="flex items-center gap-1 text-xs text-yellow-400">
                <Icon name="Star" size={11} /> 4.9
                <span className="text-muted-foreground">(1 240 отзывов)</span>
              </span>
            </div>
            <h1 className="font-montserrat font-black text-3xl md:text-4xl mb-3 leading-tight">
              ChatGPT и промпт-инжиниринг
            </h1>
            <p className="text-muted-foreground leading-relaxed max-w-2xl">
              Научись разговаривать с ИИ так, чтобы он делал всё, что тебе нужно. Реальные кейсы из маркетинга, продаж и автоматизации — без воды.
            </p>
          </div>

          {/* Progress bar (if enrolled) */}
          {enrolled && (
            <div className="glass rounded-2xl p-4 border border-purple-500/20 mb-6 animate-fade-in">
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="font-medium">Твой прогресс</span>
                <span className="text-purple-400 font-bold">{progress}%</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full">
                <div className="h-2 rounded-full transition-all duration-700" style={{width:`${progress}%`, background:'linear-gradient(90deg,#a855f7,#22d3ee)'}} />
              </div>
              <p className="text-xs text-muted-foreground mt-2">{doneLessons} из {totalLessons} уроков завершено</p>
            </div>
          )}

          {/* Tabs */}
          <ProgramSection
            modules={modules}
            openModules={openModules}
            toggleModule={toggleModule}
            activeLesson={activeLesson}
            setActiveLesson={setActiveLesson}
            typeIcon={typeIcon}
            enrolled={enrolled}
          />

          {/* Reviews */}
          <div className="mt-8">
            <h2 className="font-montserrat font-bold text-xl mb-5 flex items-center gap-2">
              <Icon name="Star" size={16} className="text-yellow-400" />
              Отзывы студентов
            </h2>
            <div className="space-y-4">
              {reviews.map((r, i) => (
                <div key={i} className="glass rounded-2xl p-5 border border-white/5 hover:border-white/10 transition-all">
                  <div className="flex items-start gap-3">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${r.grad} flex items-center justify-center text-white font-bold text-sm shrink-0`}>
                      {r.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium text-sm">{r.name}</span>
                        <div className="flex gap-0.5">
                          {Array.from({length: r.rating}, (_, i) => (
                            <span key={i} className="text-yellow-400 text-xs">★</span>
                          ))}
                        </div>
                        <span className="text-xs text-muted-foreground ml-auto">{r.date}</span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{r.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="space-y-4">
          {/* Enroll Card */}
          <div className="glass rounded-2xl p-6 border border-purple-500/20 bg-gradient-to-br from-purple-600/10 to-cyan-600/5 sticky top-24">
            <div className="flex items-center justify-between mb-1">
              <span className="text-3xl font-montserrat font-black gradient-text">Бесплатно</span>
              <span className="text-sm text-muted-foreground line-through">1 990 ₽</span>
            </div>
            <p className="text-xs text-green-400 mb-5">🎁 Акция заканчивается через 2 дня</p>

            {enrolled ? (
              <div className="space-y-3">
                <button className="w-full py-3.5 rounded-xl font-montserrat font-bold text-sm text-white transition-all hover:opacity-90 active:scale-95"
                  style={{background: 'linear-gradient(135deg, #a855f7, #22d3ee)', boxShadow: '0 0 30px rgba(168,85,247,0.3)'}}>
                  Продолжить обучение →
                </button>
                <button className="w-full py-3 rounded-xl text-sm text-muted-foreground glass border border-white/10 hover:bg-white/5 transition-all">
                  Задать вопрос куратору
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                <button
                  onClick={() => setEnrolled(true)}
                  className="w-full py-3.5 rounded-xl font-montserrat font-bold text-sm text-white transition-all hover:opacity-90 hover:scale-[1.02] active:scale-95"
                  style={{background: 'linear-gradient(135deg, #a855f7, #22d3ee)', boxShadow: '0 0 30px rgba(168,85,247,0.3)'}}>
                  Начать бесплатно
                </button>
                <button className="w-full py-3 rounded-xl text-sm glass border border-white/10 hover:bg-white/5 transition-all">
                  Добавить в избранное
                </button>
              </div>
            )}

            <div className="mt-5 pt-5 border-t border-white/5 space-y-2.5">
              {[
                { icon: "BookOpen", text: `${totalLessons} уроков` },
                { icon: "Clock", text: "8 часов контента" },
                { icon: "Infinity", text: "Пожизненный доступ" },
                { icon: "Smartphone", text: "Мобильная версия" },
                { icon: "Award", text: "Сертификат по итогу" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Icon name={item.icon} size={14} className="text-purple-400 shrink-0" />
                  {item.text}
                </div>
              ))}
            </div>
          </div>

          {/* Author */}
          <div className="glass rounded-2xl p-5 border border-white/5">
            <h3 className="font-montserrat font-bold text-sm mb-4">Автор курса</h3>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-white text-lg font-bold">
                А
              </div>
              <div>
                <div className="font-medium text-sm">Алексей Волков</div>
                <div className="text-xs text-muted-foreground">AI-инженер • Ex-Яндекс</div>
              </div>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              5 лет в разработке AI-продуктов. Автор 8 курсов с общим рейтингом 4.9. Консультант 30+ компаний по внедрению ИИ.
            </p>
          </div>

          {/* Share */}
          <div className="glass rounded-2xl p-4 border border-white/5">
            <p className="text-xs text-muted-foreground mb-3 text-center">Поделиться курсом</p>
            <div className="flex gap-2">
              {["Telegram", "VK", "Copy"].map((s, i) => (
                <button key={i} className="flex-1 py-2 rounded-xl text-xs glass border border-white/10 hover:bg-white/5 transition-all text-muted-foreground hover:text-foreground">
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface ProgramSectionProps {
  modules: typeof modules;
  openModules: number[];
  toggleModule: (id: number) => void;
  activeLesson: number;
  setActiveLesson: (id: number) => void;
  typeIcon: (t: string) => string;
  enrolled: boolean;
}

function ProgramSection({ modules, openModules, toggleModule, activeLesson, setActiveLesson, typeIcon, enrolled }: ProgramSectionProps) {
  return (
    <div>
      <h2 className="font-montserrat font-bold text-xl mb-4 flex items-center gap-2">
        <Icon name="LayoutList" size={16} className="text-cyan-400" />
        Программа курса
      </h2>
      <div className="space-y-2">
        {modules.map((mod) => {
          const isOpen = openModules.includes(mod.id);
          const doneInModule = mod.lessons.filter(l => l.done).length;
          return (
            <div key={mod.id} className="glass rounded-2xl border border-white/5 overflow-hidden transition-all hover:border-purple-500/15">
              <button
                onClick={() => toggleModule(mod.id)}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-white/3 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold font-montserrat ${
                    doneInModule === mod.lessons.length
                      ? 'bg-green-500/20 text-green-400 border border-green-500/20'
                      : 'bg-white/5 text-muted-foreground border border-white/10'
                  }`}>
                    {doneInModule === mod.lessons.length ? '✓' : mod.id}
                  </div>
                  <div>
                    <div className="font-medium text-sm">{mod.title}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{doneInModule}/{mod.lessons.length} уроков</div>
                  </div>
                </div>
                <Icon
                  name="ChevronDown"
                  size={15}
                  className={`text-muted-foreground transition-transform shrink-0 ${isOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {isOpen && (
                <div className="border-t border-white/5">
                  {mod.lessons.map((lesson, li) => {
                    const isActive = lesson.id === activeLesson;
                    const isLocked = !enrolled && !lesson.done && lesson.id > 3;
                    return (
                      <button
                        key={lesson.id}
                        onClick={() => !isLocked && setActiveLesson(lesson.id)}
                        className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-all border-b border-white/3 last:border-0
                          ${isActive ? 'bg-purple-500/10' : 'hover:bg-white/3'}
                          ${isLocked ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}`}
                      >
                        <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-all ${
                          lesson.done
                            ? 'bg-green-500/20 border border-green-500/20'
                            : isActive
                            ? 'bg-purple-500/30 border border-purple-500/40'
                            : 'bg-white/5 border border-white/10'
                        }`}>
                          {lesson.done
                            ? <Icon name="Check" size={12} className="text-green-400" />
                            : isLocked
                            ? <Icon name="Lock" size={11} className="text-muted-foreground" />
                            : <Icon name={typeIcon(lesson.type)} size={12} className={isActive ? "text-purple-400" : "text-muted-foreground"} />
                          }
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className={`text-sm truncate ${isActive ? 'text-purple-300 font-medium' : lesson.done ? 'text-muted-foreground' : 'text-foreground'}`}>
                            {li + 1}. {lesson.title}
                          </div>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          {lesson.type !== "video" && (
                            <span className={`text-xs px-1.5 py-0.5 rounded-md border ${
                              lesson.type === "test" ? 'bg-yellow-500/10 text-yellow-500/70 border-yellow-500/20'
                              : lesson.type === "project" ? 'bg-cyan-500/10 text-cyan-500/70 border-cyan-500/20'
                              : 'bg-pink-500/10 text-pink-500/70 border-pink-500/20'
                            }`}>
                              {lesson.type === "test" ? "Тест" : lesson.type === "project" ? "Проект" : "Практика"}
                            </span>
                          )}
                          <span className="text-xs text-muted-foreground font-mono">{lesson.duration}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
