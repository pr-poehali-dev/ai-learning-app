import { useState, useRef } from "react";
import Icon from "@/components/ui/icon";
import { Section } from "@/pages/Index";

type Lesson = { id: number; title: string; duration: string; done: boolean; type: string; active?: boolean };
type Module = { id: number; title: string; lessons: Lesson[] };

type CourseData = {
  id: number;
  emoji: string;
  title: string;
  category: string;
  categoryColor: string;
  level: string;
  rating: number;
  reviewCount: number;
  description: string;
  price: string;
  oldPrice?: string;
  promo?: string;
  hours: number;
  authorName: string;
  authorRole: string;
  authorBio: string;
  authorInitial: string;
  authorGrad: string;
  progress: number;
  modules: Module[];
  reviews: { name: string; avatar: string; grad: string; text: string; rating: number; date: string }[];
};

const coursesData: CourseData[] = [
  {
    id: 1,
    emoji: "🤖",
    title: "ChatGPT и промпт-инжиниринг",
    category: "ИИ",
    categoryColor: "bg-purple-500/20 text-purple-300 border-purple-500/20",
    level: "Начинающий",
    rating: 4.9,
    reviewCount: 1240,
    description: "Научись разговаривать с ИИ так, чтобы он делал всё, что тебе нужно. Реальные кейсы из маркетинга, продаж и автоматизации — без воды.",
    price: "Бесплатно",
    oldPrice: "1 990 ₽",
    promo: "🎁 Акция заканчивается через 2 дня",
    hours: 8,
    authorName: "Алексей Волков",
    authorRole: "AI-инженер • Ex-Яндекс",
    authorBio: "5 лет в разработке AI-продуктов. Автор 8 курсов с общим рейтингом 4.9. Консультант 30+ компаний по внедрению ИИ.",
    authorInitial: "А",
    authorGrad: "from-purple-500 to-cyan-500",
    progress: 65,
    modules: [
      { id: 1, title: "Введение в промпт-инжиниринг", lessons: [
        { id: 1, title: "Что такое промпт и зачем это нужно", duration: "8:24", done: true, type: "video" },
        { id: 2, title: "Анатомия идеального промпта", duration: "12:10", done: true, type: "video" },
        { id: 3, title: "Практика: первые промпты", duration: "5:00", done: true, type: "practice" },
      ]},
      { id: 2, title: "Техники управления контекстом", lessons: [
        { id: 4, title: "Системные инструкции: как думает GPT", duration: "15:32", done: true, type: "video" },
        { id: 5, title: "Chain-of-Thought и пошаговое мышление", duration: "18:45", done: false, type: "video", active: true },
        { id: 6, title: "Few-shot обучение через примеры", duration: "11:20", done: false, type: "video" },
        { id: 7, title: "Тест: модуль 2", duration: "10:00", done: false, type: "test" },
      ]},
      { id: 3, title: "Продвинутые паттерны", lessons: [
        { id: 8, title: "Ролевые промпты и персонажи", duration: "14:18", done: false, type: "video" },
        { id: 9, title: "Промпты для кода и данных", duration: "20:05", done: false, type: "video" },
        { id: 10, title: "Автоматизация с Zapier и Make", duration: "25:00", done: false, type: "video" },
      ]},
      { id: 4, title: "Применение в бизнесе", lessons: [
        { id: 11, title: "Маркетинг: тексты, посты, рекламы", duration: "16:40", done: false, type: "video" },
        { id: 12, title: "Продажи: скрипты и возражения", duration: "13:55", done: false, type: "video" },
        { id: 13, title: "Финальный проект", duration: "—", done: false, type: "project" },
        { id: 14, title: "Итоговый тест и сертификат", duration: "15:00", done: false, type: "test" },
      ]},
    ],
    reviews: [
      { name: "Дмитрий К.", avatar: "Д", grad: "from-blue-500 to-purple-500", text: "Лучший курс по GPT что я проходил. Структура идеальная, сразу применил в работе.", rating: 5, date: "20 марта" },
      { name: "Ольга М.", avatar: "О", grad: "from-pink-500 to-orange-500", text: "Практические задания просто огонь. За неделю автоматизировал 3 рабочих процесса.", rating: 5, date: "15 марта" },
      { name: "Артём Н.", avatar: "А", grad: "from-green-500 to-cyan-500", text: "Чётко, без воды. Ценность каждого урока максимальная. Рекомендую всем.", rating: 5, date: "10 марта" },
    ],
  },
  {
    id: 2,
    emoji: "🧠",
    title: "Управление тревогой и стрессом",
    category: "Психология",
    categoryColor: "bg-pink-500/20 text-pink-300 border-pink-500/20",
    level: "Начинающий",
    rating: 4.8,
    reviewCount: 890,
    description: "Практические техники КПТ и медитации для снижения тревоги. Научишься управлять своим состоянием в любой ситуации — за 3 недели.",
    price: "1 490 ₽",
    hours: 5,
    authorName: "Мария Соколова",
    authorRole: "Клинический психолог • КПТ",
    authorBio: "10 лет практики. Специализация: тревожные расстройства. Автор книги «Тихий ум». 3000+ клиентов.",
    authorInitial: "М",
    authorGrad: "from-pink-500 to-orange-500",
    progress: 30,
    modules: [
      { id: 1, title: "Природа тревоги", lessons: [
        { id: 1, title: "Что такое тревога и зачем она нужна", duration: "10:15", done: true, type: "video" },
        { id: 2, title: "Физиология стресса: что происходит в теле", duration: "9:40", done: true, type: "video" },
        { id: 3, title: "Дневник тревоги: первый шаг", duration: "5:00", done: false, type: "practice" },
      ]},
      { id: 2, title: "КПТ-техники", lessons: [
        { id: 4, title: "Когнитивные искажения: список и примеры", duration: "14:20", done: false, type: "video" },
        { id: 5, title: "Техника «Оспаривание мысли»", duration: "12:00", done: false, type: "video" },
        { id: 6, title: "Практика: разбор своих мыслей", duration: "7:00", done: false, type: "practice" },
      ]},
      { id: 3, title: "Телесные практики", lessons: [
        { id: 7, title: "Техника 4-7-8: дыхание при панике", duration: "8:30", done: false, type: "video" },
        { id: 8, title: "Прогрессивная мышечная релаксация", duration: "15:00", done: false, type: "video" },
        { id: 9, title: "Заземление: 5-4-3-2-1", duration: "6:00", done: false, type: "practice" },
        { id: 10, title: "Итоговый тест", duration: "10:00", done: false, type: "test" },
      ]},
    ],
    reviews: [
      { name: "Катерина Л.", avatar: "К", grad: "from-pink-500 to-red-500", text: "После 3 недель техники заземления тревога снизилась на 60%. Реально работает!", rating: 5, date: "18 марта" },
      { name: "Борис В.", avatar: "Б", grad: "from-blue-500 to-indigo-500", text: "Простые объяснения сложных вещей. Дыхательные техники уже спасли меня на собеседовании.", rating: 5, date: "12 марта" },
      { name: "Надежда Т.", avatar: "Н", grad: "from-purple-500 to-pink-500", text: "Мария объясняет так, что сразу понимаешь. Практикую каждый день уже месяц.", rating: 4, date: "5 марта" },
    ],
  },
  {
    id: 3,
    emoji: "🎯",
    title: "Система высоких достижений",
    category: "Мотивация",
    categoryColor: "bg-orange-500/20 text-orange-300 border-orange-500/20",
    level: "Продвинутый",
    rating: 5.0,
    reviewCount: 2100,
    description: "Построй систему целей, которая реально работает. OKR, GTD, глубокая работа — всё что нужно для кратного роста результатов.",
    price: "2 990 ₽",
    hours: 12,
    authorName: "Сергей Громов",
    authorRole: "Executive Coach • Ex-McKinsey",
    authorBio: "15 лет коучинга топ-менеджеров. Помог 200+ людям выйти на новый уровень. Спикер TED.",
    authorInitial: "С",
    authorGrad: "from-orange-500 to-pink-500",
    progress: 0,
    modules: [
      { id: 1, title: "Философия достижений", lessons: [
        { id: 1, title: "Почему большинство целей не работают", duration: "12:00", done: false, type: "video" },
        { id: 2, title: "Разница между занятостью и продуктивностью", duration: "10:30", done: false, type: "video" },
        { id: 3, title: "Аудит своих результатов", duration: "8:00", done: false, type: "practice" },
      ]},
      { id: 2, title: "Система OKR", lessons: [
        { id: 4, title: "OKR: как это работает в Google", duration: "18:00", done: false, type: "video" },
        { id: 5, title: "Написание Objectives и Key Results", duration: "15:00", done: false, type: "video" },
        { id: 6, title: "Практика: пишем свои OKR", duration: "10:00", done: false, type: "practice" },
        { id: 7, title: "Тест: модуль 2", duration: "8:00", done: false, type: "test" },
      ]},
      { id: 3, title: "Глубокая работа", lessons: [
        { id: 8, title: "Концентрация как суперсила", duration: "14:00", done: false, type: "video" },
        { id: 9, title: "Уничтожение отвлекающих факторов", duration: "11:00", done: false, type: "video" },
        { id: 10, title: "Timeblocking: блокировка времени", duration: "9:00", done: false, type: "video" },
      ]},
      { id: 4, title: "Система привычек", lessons: [
        { id: 11, title: "Цикл привычки: триггер, действие, награда", duration: "13:00", done: false, type: "video" },
        { id: 12, title: "Стекинг привычек", duration: "10:00", done: false, type: "video" },
        { id: 13, title: "Финальный проект: 90-дневный план", duration: "—", done: false, type: "project" },
        { id: 14, title: "Итоговый тест", duration: "15:00", done: false, type: "test" },
        { id: 15, title: "Бонус: шаблоны и чеклисты", duration: "5:00", done: false, type: "video" },
        { id: 16, title: "Сертификат", duration: "—", done: false, type: "test" },
      ]},
    ],
    reviews: [
      { name: "Иван Ф.", avatar: "И", grad: "from-cyan-500 to-green-500", text: "Внедрил OKR — за месяц выполнил 80% годовых целей. Это не мотивашка, а реальная система.", rating: 5, date: "22 марта" },
      { name: "Светлана Р.", avatar: "С", grad: "from-orange-500 to-yellow-500", text: "Лучшие 3000 рублей в моей жизни. Окупились за первую неделю применения.", rating: 5, date: "17 марта" },
      { name: "Михаил Б.", avatar: "М", grad: "from-red-500 to-pink-500", text: "Наконец-то понял разницу между занятым и продуктивным. Курс меняет мышление.", rating: 5, date: "9 марта" },
    ],
  },
  {
    id: 4,
    emoji: "⚡",
    title: "Нейросети для бизнеса",
    category: "ИИ",
    categoryColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/20",
    level: "Средний",
    rating: 4.7,
    reviewCount: 756,
    description: "Автоматизируй рутину с помощью ИИ. Midjourney для визуалов, GPT для текстов, Make и Zapier для процессов — прокачай бизнес без программирования.",
    price: "3 490 ₽",
    hours: 15,
    authorName: "Алексей Волков",
    authorRole: "AI-инженер • Ex-Яндекс",
    authorBio: "5 лет в разработке AI-продуктов. Автор 8 курсов с общим рейтингом 4.9. Консультант 30+ компаний по внедрению ИИ.",
    authorInitial: "А",
    authorGrad: "from-cyan-500 to-blue-500",
    progress: 0,
    modules: [
      { id: 1, title: "ИИ-инструменты: обзор", lessons: [
        { id: 1, title: "Карта ИИ-инструментов 2024", duration: "15:00", done: false, type: "video" },
        { id: 2, title: "Как выбрать инструмент под задачу", duration: "10:00", done: false, type: "video" },
        { id: 3, title: "Тест: что автоматизировать первым", duration: "8:00", done: false, type: "practice" },
      ]},
      { id: 2, title: "Контент с ИИ", lessons: [
        { id: 4, title: "Midjourney: создание брендинга", duration: "20:00", done: false, type: "video" },
        { id: 5, title: "GPT для копирайтинга и SEO", duration: "18:00", done: false, type: "video" },
        { id: 6, title: "Автоматизация постинга в соцсетях", duration: "14:00", done: false, type: "video" },
        { id: 7, title: "Практика: создаём контент-план", duration: "10:00", done: false, type: "practice" },
      ]},
      { id: 3, title: "Автоматизация процессов", lessons: [
        { id: 8, title: "Make (Integromat): первый сценарий", duration: "22:00", done: false, type: "video" },
        { id: 9, title: "Zapier: CRM + Email + Telegram", duration: "18:00", done: false, type: "video" },
        { id: 10, title: "ИИ в продажах: квалификация лидов", duration: "16:00", done: false, type: "video" },
      ]},
      { id: 4, title: "Итоговый проект", lessons: [
        { id: 11, title: "Финальный проект: автоматизируем бизнес", duration: "—", done: false, type: "project" },
        { id: 12, title: "Итоговый тест и сертификат", duration: "15:00", done: false, type: "test" },
      ]},
    ],
    reviews: [
      { name: "Роман К.", avatar: "Р", grad: "from-cyan-500 to-blue-500", text: "Внедрил автоматизацию в агентстве — сэкономили 40 часов в неделю. Реальные кейсы.", rating: 5, date: "19 марта" },
      { name: "Алина Д.", avatar: "А", grad: "from-blue-500 to-purple-500", text: "Make научилась за 2 дня. Теперь всё что раньше делала руками — автоматически.", rating: 5, date: "14 марта" },
      { name: "Пётр С.", avatar: "П", grad: "from-indigo-500 to-cyan-500", text: "Midjourney для бизнеса — это отдельная история. Теперь сами делаем все визуалы.", rating: 4, date: "8 марта" },
    ],
  },
  {
    id: 5,
    emoji: "💚",
    title: "Эмоциональный интеллект",
    category: "Психология",
    categoryColor: "bg-green-500/20 text-green-300 border-green-500/20",
    level: "Средний",
    rating: 4.9,
    reviewCount: 1050,
    description: "Пойми себя и других. Эмоциональный интеллект — ключевой навык лидера и счастливого человека. Развивай эмпатию, управляй конфликтами, строй отношения.",
    price: "1 990 ₽",
    hours: 7,
    authorName: "Мария Соколова",
    authorRole: "Клинический психолог • КПТ",
    authorBio: "10 лет практики. Специализация: эмоциональные компетенции и межличностные отношения. 3000+ клиентов.",
    authorInitial: "М",
    authorGrad: "from-green-500 to-cyan-500",
    progress: 0,
    modules: [
      { id: 1, title: "Что такое ЭИ", lessons: [
        { id: 1, title: "Модели эмоционального интеллекта", duration: "11:00", done: false, type: "video" },
        { id: 2, title: "Самодиагностика: тест ЭИ", duration: "10:00", done: false, type: "practice" },
        { id: 3, title: "Эмоции как информация, а не слабость", duration: "9:30", done: false, type: "video" },
      ]},
      { id: 2, title: "Самоосознанность", lessons: [
        { id: 4, title: "Колесо эмоций: называем чувства точно", duration: "12:00", done: false, type: "video" },
        { id: 5, title: "Триггеры: что выводит нас из себя", duration: "10:00", done: false, type: "video" },
        { id: 6, title: "Практика: дневник эмоций 7 дней", duration: "—", done: false, type: "practice" },
      ]},
      { id: 3, title: "Эмпатия и отношения", lessons: [
        { id: 7, title: "Активное слушание: техника и практика", duration: "14:00", done: false, type: "video" },
        { id: 8, title: "Ненасильственное общение", duration: "16:00", done: false, type: "video" },
        { id: 9, title: "Конфликты: находим win-win", duration: "12:00", done: false, type: "video" },
        { id: 10, title: "Практика: разбор сложной ситуации", duration: "8:00", done: false, type: "practice" },
        { id: 11, title: "Итоговый тест и сертификат", duration: "12:00", done: false, type: "test" },
        { id: 12, title: "Бонус: материалы и книги", duration: "—", done: false, type: "video" },
      ]},
    ],
    reviews: [
      { name: "Юлия П.", avatar: "Ю", grad: "from-green-500 to-teal-500", text: "Наконец-то понимаю, почему реагирую так, а не иначе. Отношения стали в разы лучше.", rating: 5, date: "21 марта" },
      { name: "Андрей М.", avatar: "А", grad: "from-teal-500 to-blue-500", text: "Для руководителя — must have. Команда чувствует разницу буквально с первой недели.", rating: 5, date: "15 марта" },
      { name: "Вера Н.", avatar: "В", grad: "from-green-500 to-yellow-500", text: "Техника ненасильственного общения изменила мои отношения с партнёром.", rating: 5, date: "7 марта" },
    ],
  },
  {
    id: 6,
    emoji: "🔥",
    title: "Поток: жить в состоянии кайфа",
    category: "Мотивация",
    categoryColor: "bg-yellow-500/20 text-yellow-300 border-yellow-500/20",
    level: "Начинающий",
    rating: 4.8,
    reviewCount: 3400,
    description: "Состояние потока — когда время летит, ты счастлив и сверхпродуктивен. Научись входить в него каждый день и превращать работу в удовольствие.",
    price: "990 ₽",
    hours: 4,
    authorName: "Сергей Громов",
    authorRole: "Executive Coach • Ex-McKinsey",
    authorBio: "15 лет коучинга. Исследователь состояний потока. Помог 200+ людям найти своё призвание и кайф в работе.",
    authorInitial: "С",
    authorGrad: "from-yellow-500 to-orange-500",
    progress: 0,
    modules: [
      { id: 1, title: "Наука о потоке", lessons: [
        { id: 1, title: "Что такое поток: исследования Чиксентмихайи", duration: "10:00", done: false, type: "video" },
        { id: 2, title: "8 компонентов состояния потока", duration: "12:00", done: false, type: "video" },
        { id: 3, title: "Самодиагностика: когда ты в потоке", duration: "7:00", done: false, type: "practice" },
      ]},
      { id: 2, title: "Вход в поток", lessons: [
        { id: 4, title: "Баланс навык-сложность: зона роста", duration: "11:00", done: false, type: "video" },
        { id: 5, title: "Ритуалы входа в поток", duration: "9:00", done: false, type: "video" },
        { id: 6, title: "Среда для потока: окружение и инструменты", duration: "8:00", done: false, type: "video" },
      ]},
      { id: 3, title: "Поток в жизни", lessons: [
        { id: 7, title: "Работа как поток: переосмысление задач", duration: "13:00", done: false, type: "video" },
        { id: 8, title: "Финальная практика: план на 30 дней", duration: "—", done: false, type: "practice" },
        { id: 9, title: "Итоговый тест и сертификат", duration: "10:00", done: false, type: "test" },
      ]},
    ],
    reviews: [
      { name: "Максим К.", avatar: "М", grad: "from-yellow-500 to-orange-500", text: "Лёгкий и вдохновляющий курс. После него по-другому смотришь на скуку и усталость.", rating: 5, date: "23 марта" },
      { name: "Ксения Л.", avatar: "К", grad: "from-orange-500 to-red-500", text: "Простой, без занудства. Ввела 3 ритуала из курса — и теперь рабочее утро стало любимым временем дня.", rating: 5, date: "16 марта" },
      { name: "Тимур Б.", avatar: "Т", grad: "from-yellow-500 to-green-500", text: "За 990 рублей — больше пользы, чем за 10 000 в другом месте. Честный курс.", rating: 4, date: "10 марта" },
    ],
  },
];

interface CourseSinglePageProps {
  courseId: number;
  onNavigate: (s: Section) => void;
}

export default function CourseSinglePage({ courseId, onNavigate }: CourseSinglePageProps) {
  const course = coursesData.find(c => c.id === courseId) ?? coursesData[0];

  const [openModules, setOpenModules] = useState<number[]>([1, 2]);
  const [activeLesson, setActiveLesson] = useState(course.modules[0]?.lessons[0]?.id ?? 1);
  const [enrolled, setEnrolled] = useState(course.progress > 0);
  const [playing, setPlaying] = useState(false);
  const [videoProgress, setVideoProgress] = useState(course.progress > 0 ? 38 : 0);
  const progressRef = useRef<HTMLDivElement>(null);

  const toggleModule = (id: number) =>
    setOpenModules(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);

  const allLessons = course.modules.flatMap(m => m.lessons);
  const totalLessons = allLessons.length;
  const doneLessons = allLessons.filter(l => l.done).length;
  const progress = Math.round((doneLessons / totalLessons) * 100);

  const currentLesson = allLessons.find(l => l.id === activeLesson) ?? allLessons[0];

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
    <div className="max-w-7xl mx-auto px-3 sm:px-4 pb-20">
      <div className="pt-4 sm:pt-6 mb-4 sm:mb-6">
        <button
          onClick={() => onNavigate("courses")}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
        >
          <Icon name="ArrowLeft" size={15} className="group-hover:-translate-x-1 transition-transform" />
          Все курсы
        </button>
      </div>

      <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden mb-5 sm:mb-8 border border-white/5">
        <div className="relative bg-black aspect-video w-full flex items-center justify-center">
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse at 30% 40%, rgba(168,85,247,0.25) 0%, transparent 60%), radial-gradient(ellipse at 70% 60%, rgba(34,211,238,0.15) 0%, transparent 60%)"
            }}
          />

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

          <div className="absolute top-3 left-3 right-3 sm:top-5 sm:left-5 sm:right-5 flex items-center justify-between gap-2">
            <div className="glass rounded-lg sm:rounded-xl px-2 py-1 sm:px-3 sm:py-1.5 text-[10px] sm:text-xs border border-white/10 truncate min-w-0">
              {currentLesson?.title}
            </div>
            <div className="glass rounded-lg sm:rounded-xl px-2 py-1 sm:px-3 sm:py-1.5 text-[10px] sm:text-xs border border-white/10 shrink-0">
              {currentLesson?.duration}
            </div>
          </div>

          <button
            onClick={() => setPlaying(!playing)}
            className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center transition-all hover:scale-110 active:scale-95"
            style={{
              background: playing ? 'rgba(255,255,255,0.15)' : 'linear-gradient(135deg, #a855f7, #22d3ee)',
              boxShadow: playing ? 'none' : '0 0 40px rgba(168,85,247,0.5)'
            }}
          >
            <Icon name={playing ? "Pause" : "Play"} size={24} className="text-white" style={{marginLeft: playing ? 0 : 3}} />
          </button>

          <div className="absolute bottom-0 left-0 right-0 px-3 py-3 sm:p-4 bg-gradient-to-t from-black/80 to-transparent">
            <div
              className="h-1.5 bg-white/20 rounded-full cursor-pointer mb-2.5 relative group"
              onClick={handleProgressClick}
              ref={progressRef}
            >
              <div
                className="h-full rounded-full relative"
                style={{ width: `${videoProgress}%`, background: 'linear-gradient(90deg, #a855f7, #22d3ee)' }}
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity shadow-lg" />
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 text-xs text-white/70">
              <button onClick={() => setPlaying(!playing)}>
                <Icon name={playing ? "Pause" : "Play"} size={14} className="text-white" />
              </button>
              <div className="flex-1" />
              <button className="hidden sm:flex items-center gap-1 hover:text-white transition-colors">
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

      <div className="grid lg:grid-cols-[1fr_380px] gap-5 sm:gap-6">
        <div>
          <div className="mb-5 sm:mb-6">
            <div className="flex items-center gap-2 mb-3 flex-wrap">
              <span className={`text-xs px-2.5 py-1 rounded-lg border font-medium ${course.categoryColor}`}>{course.category}</span>
              <span className="text-xs text-muted-foreground">•</span>
              <span className="text-xs text-muted-foreground">{course.level}</span>
              <span className="text-xs text-muted-foreground">•</span>
              <span className="flex items-center gap-1 text-xs text-yellow-400">
                <Icon name="Star" size={11} /> {course.rating}
                <span className="text-muted-foreground">({course.reviewCount.toLocaleString()} отзывов)</span>
              </span>
            </div>
            <h1 className="font-montserrat font-black text-2xl sm:text-3xl md:text-4xl mb-3 leading-tight">
              {course.emoji} {course.title}
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{course.description}</p>
          </div>

          <MobileEnrollBanner course={course} enrolled={enrolled} onEnroll={() => setEnrolled(true)} />

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

          <ProgramSection
            modules={course.modules}
            openModules={openModules}
            toggleModule={toggleModule}
            activeLesson={activeLesson}
            setActiveLesson={setActiveLesson}
            typeIcon={typeIcon}
            enrolled={enrolled}
          />

          <div className="mt-8">
            <h2 className="font-montserrat font-bold text-xl mb-5 flex items-center gap-2">
              <Icon name="Star" size={16} className="text-yellow-400" />
              Отзывы студентов
            </h2>
            <div className="space-y-4">
              {course.reviews.map((r, i) => (
                <div key={i} className="glass rounded-2xl p-5 border border-white/5 hover:border-white/10 transition-all">
                  <div className="flex items-start gap-3">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${r.grad} flex items-center justify-center text-white font-bold text-sm shrink-0`}>
                      {r.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium text-sm">{r.name}</span>
                        <div className="flex gap-0.5">
                          {Array.from({length: r.rating}, (_, j) => (
                            <span key={j} className="text-yellow-400 text-xs">★</span>
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

        <div className="hidden lg:block space-y-4">
          <div className="glass rounded-2xl p-6 border border-purple-500/20 bg-gradient-to-br from-purple-600/10 to-cyan-600/5 sticky top-24">
            <div className="flex items-center justify-between mb-1">
              <span className="text-3xl font-montserrat font-black gradient-text">{course.price}</span>
              {course.oldPrice && <span className="text-sm text-muted-foreground line-through">{course.oldPrice}</span>}
            </div>
            {course.promo && <p className="text-xs text-green-400 mb-5">{course.promo}</p>}

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
                  {course.price === "Бесплатно" ? "Начать бесплатно" : "Записаться на курс"}
                </button>
                <button className="w-full py-3 rounded-xl text-sm glass border border-white/10 hover:bg-white/5 transition-all text-foreground">
                  Добавить в избранное
                </button>
              </div>
            )}

            <div className="mt-5 pt-5 border-t border-white/5 space-y-2.5">
              {[
                { icon: "BookOpen", text: `${totalLessons} уроков` },
                { icon: "Clock", text: `${course.hours} часов контента` },
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

          <div className="glass rounded-2xl p-5 border border-white/5">
            <h3 className="font-montserrat font-bold text-sm mb-4">Автор курса</h3>
            <div className="flex items-center gap-3 mb-3">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${course.authorGrad} flex items-center justify-center text-white text-lg font-bold`}>
                {course.authorInitial}
              </div>
              <div>
                <div className="font-medium text-sm">{course.authorName}</div>
                <div className="text-xs text-muted-foreground">{course.authorRole}</div>
              </div>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">{course.authorBio}</p>
          </div>

          <div className="glass rounded-2xl p-4 border border-white/5">
            <p className="text-xs text-muted-foreground mb-3 text-center">Поделиться курсом</p>
            <div className="flex gap-2">
              {["Telegram", "VK", "Скопировать"].map((s, i) => (
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

function MobileEnrollBanner({ course, enrolled, onEnroll }: { course: CourseData; enrolled: boolean; onEnroll: () => void }) {
  return (
    <div className="lg:hidden glass rounded-2xl p-4 border border-purple-500/20 bg-gradient-to-br from-purple-600/10 to-cyan-600/5 mb-5">
      <div className="flex items-center justify-between mb-3">
        <div>
          <span className="text-xl font-montserrat font-black gradient-text">{course.price}</span>
          {course.oldPrice && <span className="text-xs text-muted-foreground line-through ml-2">{course.oldPrice}</span>}
        </div>
        {course.promo && <span className="text-xs text-green-400">🎁 Акция 2 дня</span>}
      </div>
      {enrolled ? (
        <button className="w-full py-3 rounded-xl font-montserrat font-bold text-sm text-white"
          style={{background: 'linear-gradient(135deg, #a855f7, #22d3ee)'}}>
          Продолжить обучение →
        </button>
      ) : (
        <button onClick={onEnroll}
          className="w-full py-3 rounded-xl font-montserrat font-bold text-sm text-white"
          style={{background: 'linear-gradient(135deg, #a855f7, #22d3ee)', boxShadow: '0 0 20px rgba(168,85,247,0.3)'}}>
          {course.price === "Бесплатно" ? "Начать бесплатно" : "Записаться на курс"}
        </button>
      )}
    </div>
  );
}

interface ProgramSectionProps {
  modules: Module[];
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
                <Icon name="ChevronDown" size={15} className={`text-muted-foreground transition-transform shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
              </button>

              {isOpen && (
                <div className="border-t border-white/5">
                  {mod.lessons.map((lesson, li) => {
                    const isActive = lesson.id === activeLesson;
                    const isLocked = !enrolled && !lesson.done && li > 2;
                    return (
                      <button
                        key={lesson.id}
                        onClick={() => !isLocked && setActiveLesson(lesson.id)}
                        className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-all border-b border-white/3 last:border-0
                          ${isActive ? 'bg-purple-500/10' : 'hover:bg-white/3'}
                          ${isLocked ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}`}
                      >
                        <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-all ${
                          lesson.done ? 'bg-green-500/20 border border-green-500/20'
                          : isActive ? 'bg-purple-500/30 border border-purple-500/40'
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
