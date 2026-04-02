import { useState } from "react";
import Icon from "@/components/ui/icon";

const posts = [
  {
    id: 1,
    author: "Максим К.",
    avatar: "М",
    avatarGrad: "from-purple-500 to-blue-500",
    time: "2 часа назад",
    category: "ИИ",
    catColor: "text-purple-400",
    text: "Попробовал использовать ChatGPT для анализа финансовых данных — результаты поразительные! Делюсь промптом, который даёт точность 95%...",
    likes: 34,
    comments: 12,
    emoji: "🤖",
    tags: ["ChatGPT", "Промпты"],
  },
  {
    id: 2,
    author: "Елена В.",
    avatar: "Е",
    avatarGrad: "from-pink-500 to-orange-500",
    time: "5 часов назад",
    category: "Психология",
    catColor: "text-pink-400",
    text: "Три недели практикую технику «заземления» из курса. Тревога снизилась примерно на 60%. Если кто проходил — давайте обменяемся опытом!",
    likes: 67,
    comments: 28,
    emoji: "🧘",
    tags: ["Тревога", "Практика"],
  },
  {
    id: 3,
    author: "Иван Ф.",
    avatar: "И",
    avatarGrad: "from-cyan-500 to-green-500",
    time: "1 день назад",
    category: "Мотивация",
    catColor: "text-orange-400",
    text: "Закончил курс «Система достижений» и внедрил систему OKR в свою жизнь. За месяц выполнил 80% годовых целей. AMA!",
    likes: 92,
    comments: 45,
    emoji: "🚀",
    tags: ["OKR", "Цели", "Продуктивность"],
  },
];

const topMembers = [
  { name: "Максим К.", avatar: "М", grad: "from-purple-500 to-blue-500", points: 2840, badge: "🏆" },
  { name: "Елена В.", avatar: "Е", grad: "from-pink-500 to-orange-500", points: 2310, badge: "🥈" },
  { name: "Иван Ф.", avatar: "И", grad: "from-cyan-500 to-green-500", points: 1950, badge: "🥉" },
  { name: "Анна С.", avatar: "А", grad: "from-violet-500 to-pink-500", points: 1780, badge: "⭐", isYou: true },
];

export default function CommunityPage() {
  const [likedPosts, setLikedPosts] = useState<number[]>([]);

  const toggleLike = (id: number) => {
    setLikedPosts(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 pb-16">
      <div className="pt-6 pb-8">
        <h1 className="font-montserrat font-black text-4xl mb-2">Сообщество</h1>
        <p className="text-muted-foreground">Учись с теми, кто идёт тем же путём</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Feed */}
        <div className="md:col-span-2 space-y-5">
          {/* New Post */}
          <div className="glass rounded-2xl p-4 border border-white/5">
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center text-white font-bold shrink-0">А</div>
              <div className="flex-1">
                <textarea
                  placeholder="Поделись инсайтом или вопросом..."
                  className="w-full glass rounded-xl p-3 text-sm border border-white/10 bg-transparent resize-none focus:outline-none focus:border-purple-500/50 text-foreground placeholder:text-muted-foreground h-16"
                />
                <div className="flex items-center justify-between mt-2">
                  <div className="flex gap-2">
                    <button className="text-muted-foreground hover:text-foreground p-1.5 rounded-lg hover:bg-white/5 transition-all">
                      <Icon name="Image" size={15} />
                    </button>
                    <button className="text-muted-foreground hover:text-foreground p-1.5 rounded-lg hover:bg-white/5 transition-all">
                      <Icon name="Link" size={15} />
                    </button>
                  </div>
                  <button className="px-4 py-1.5 rounded-xl text-xs font-medium bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:opacity-90 transition-all">
                    Опубликовать
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Posts */}
          {posts.map(post => (
            <div key={post.id} className="glass rounded-2xl p-5 border border-white/5 hover:border-purple-500/15 transition-all">
              <div className="flex items-start gap-3 mb-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${post.avatarGrad} flex items-center justify-center text-white font-bold shrink-0`}>
                  {post.avatar}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-medium text-sm">{post.author}</span>
                    <span className={`text-xs ${post.catColor}`}>{post.category}</span>
                    <span className="text-xs text-muted-foreground ml-auto">{post.time}</span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                <span className="text-lg mr-1">{post.emoji}</span>
                {post.text}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {post.tags.map(t => (
                  <span key={t} className="text-xs px-2 py-0.5 rounded-md bg-white/5 text-muted-foreground border border-white/5">#{t}</span>
                ))}
              </div>

              <div className="flex items-center gap-4 pt-3 border-t border-white/5">
                <button
                  onClick={() => toggleLike(post.id)}
                  className={`flex items-center gap-1.5 text-xs transition-all hover:scale-105 ${likedPosts.includes(post.id) ? 'text-pink-400' : 'text-muted-foreground hover:text-pink-400'}`}
                >
                  <Icon name="Heart" size={14} />
                  {post.likes + (likedPosts.includes(post.id) ? 1 : 0)}
                </button>
                <button className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-all">
                  <Icon name="MessageCircle" size={14} />
                  {post.comments}
                </button>
                <button className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-all ml-auto">
                  <Icon name="Share2" size={14} />
                  Поделиться
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <div className="space-y-5">
          {/* Stats */}
          <div className="glass rounded-2xl p-5 border border-white/5">
            <h3 className="font-montserrat font-bold mb-4 flex items-center gap-2">
              <Icon name="Users" size={14} className="text-purple-400" />
              Сообщество
            </h3>
            <div className="space-y-3">
              {[
                { label: "Участников", value: "4 218" },
                { label: "Постов сегодня", value: "47" },
                { label: "Онлайн сейчас", value: "124" },
              ].map((s, i) => (
                <div key={i} className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{s.label}</span>
                  <span className="font-medium gradient-text">{s.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Leaderboard */}
          <div className="glass rounded-2xl p-5 border border-white/5">
            <h3 className="font-montserrat font-bold mb-4 flex items-center gap-2">
              <Icon name="Trophy" size={14} className="text-yellow-400" />
              Топ недели
            </h3>
            <div className="space-y-3">
              {topMembers.map((m, i) => (
                <div key={i} className={`flex items-center gap-3 p-2 rounded-xl transition-all ${m.isYou ? 'bg-purple-500/10 border border-purple-500/20' : ''}`}>
                  <span className="text-base w-5">{m.badge}</span>
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${m.grad} flex items-center justify-center text-white text-xs font-bold`}>
                    {m.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">{m.name} {m.isYou && <span className="text-xs text-purple-400">(ты)</span>}</div>
                    <div className="text-xs text-muted-foreground">{m.points} очков</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hot Topics */}
          <div className="glass rounded-2xl p-5 border border-white/5">
            <h3 className="font-montserrat font-bold mb-4 flex items-center gap-2">
              <Icon name="Flame" size={14} className="text-orange-400" />
              Горячие темы
            </h3>
            {["#ChatGPT", "#Медитация", "#OKR", "#Продуктивность", "#ЭмоцИнтеллект"].map((tag, i) => (
              <div key={i} className="flex items-center justify-between py-1.5">
                <span className="text-sm text-purple-400 hover:text-purple-300 cursor-pointer transition-colors">{tag}</span>
                <span className="text-xs text-muted-foreground">{[28, 21, 19, 15, 11][i]} постов</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
