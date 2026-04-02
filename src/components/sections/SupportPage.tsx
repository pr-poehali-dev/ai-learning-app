import { useState } from "react";
import Icon from "@/components/ui/icon";

const faqs = [
  { q: "Как работает адаптивная траектория?", a: "Система анализирует твой прогресс, скорость прохождения уроков и результаты тестов. На основе этих данных ИИ подбирает следующие курсы и адаптирует темп обучения под твой стиль." },
  { q: "Можно ли приостановить обучение?", a: "Да! Прогресс сохраняется автоматически. Ты можешь вернуться в любой момент — стрик, к сожалению, сбросится, но курсы и достижения останутся." },
  { q: "Как получить сертификат?", a: "Нужно пройти все уроки курса и сдать итоговый тест с результатом 70% и выше. Сертификат выдаётся мгновенно в PDF с QR-кодом для верификации." },
  { q: "Есть ли мобильное приложение?", a: "Пока платформа работает как веб-приложение, оптимизированное для мобильных устройств. Нативное приложение в планах на 2024 год." },
  { q: "Как отменить подписку?", a: "Подписку можно отменить в Профиле → Настройки → Подписка. Доступ сохраняется до конца оплаченного периода." },
];

export default function SupportPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ subject: "", message: "", category: "general" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="max-w-4xl mx-auto px-3 sm:px-4 pb-16">
      <div className="pt-4 sm:pt-6 pb-5 sm:pb-8">
        <h1 className="font-montserrat font-black text-3xl sm:text-4xl mb-2">Поддержка</h1>
        <p className="text-sm sm:text-base text-muted-foreground">Мы ответим в течение 2 часов в рабочее время</p>
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {[
          { icon: "Book", label: "Документация", color: "text-purple-400" },
          { icon: "MessageCircle", label: "Чат 24/7", color: "text-cyan-400" },
          { icon: "Mail", label: "Email", color: "text-pink-400" },
          { icon: "Users", label: "Сообщество", color: "text-orange-400" },
        ].map((item, i) => (
          <button
            key={i}
            className="glass rounded-2xl p-4 border border-white/5 hover:border-purple-500/20 transition-all text-center card-3d flex flex-col items-center gap-2"
          >
            <Icon name={item.icon} size={20} className={item.color} />
            <span className="text-sm font-medium">{item.label}</span>
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Contact Form */}
        <div>
          <h2 className="font-montserrat font-bold text-xl mb-5 flex items-center gap-2">
            <Icon name="Send" size={16} className="text-purple-400" />
            Написать нам
          </h2>

          {sent ? (
            <div className="glass rounded-2xl p-8 border border-green-500/20 bg-green-500/5 text-center animate-fade-in">
              <div className="text-5xl mb-4">🎉</div>
              <h3 className="font-montserrat font-bold text-lg mb-2">Сообщение отправлено!</h3>
              <p className="text-muted-foreground text-sm">Мы ответим на твой email в течение 2 часов</p>
              <button
                onClick={() => setSent(false)}
                className="mt-4 text-sm text-purple-400 hover:text-purple-300 transition-colors"
              >
                Отправить ещё одно
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Категория</label>
                <select
                  value={form.category}
                  onChange={e => setForm({...form, category: e.target.value})}
                  className="w-full glass rounded-xl px-4 py-3 text-sm border border-white/10 bg-background focus:outline-none focus:border-purple-500/50 text-foreground"
                >
                  <option value="general">Общий вопрос</option>
                  <option value="technical">Техническая проблема</option>
                  <option value="payment">Оплата</option>
                  <option value="certificate">Сертификат</option>
                  <option value="course">Вопрос по курсу</option>
                </select>
              </div>

              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Тема</label>
                <input
                  value={form.subject}
                  onChange={e => setForm({...form, subject: e.target.value})}
                  placeholder="Кратко опиши проблему"
                  required
                  className="w-full glass rounded-xl px-4 py-3 text-sm border border-white/10 bg-transparent focus:outline-none focus:border-purple-500/50 text-foreground placeholder:text-muted-foreground"
                />
              </div>

              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Сообщение</label>
                <textarea
                  value={form.message}
                  onChange={e => setForm({...form, message: e.target.value})}
                  placeholder="Опиши подробно, что случилось..."
                  required
                  rows={5}
                  className="w-full glass rounded-xl px-4 py-3 text-sm border border-white/10 bg-transparent focus:outline-none focus:border-purple-500/50 text-foreground placeholder:text-muted-foreground resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl font-medium text-sm bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:opacity-90 transition-all glow-purple flex items-center justify-center gap-2"
              >
                <Icon name="Send" size={15} />
                Отправить
              </button>
            </form>
          )}
        </div>

        {/* FAQ */}
        <div>
          <h2 className="font-montserrat font-bold text-xl mb-5 flex items-center gap-2">
            <Icon name="HelpCircle" size={16} className="text-cyan-400" />
            Частые вопросы
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`glass rounded-2xl border transition-all cursor-pointer ${
                  openFaq === i ? "border-purple-500/25" : "border-white/5"
                }`}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <div className="flex items-center justify-between p-4 gap-3">
                  <span className="text-sm font-medium">{faq.q}</span>
                  <Icon
                    name="ChevronDown"
                    size={14}
                    className={`text-muted-foreground shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </div>
                {openFaq === i && (
                  <div className="px-4 pb-4 text-sm text-muted-foreground leading-relaxed border-t border-white/5 pt-3 animate-fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-5 glass rounded-2xl p-4 border border-purple-500/15 bg-purple-500/5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <Icon name="Zap" size={16} className="text-white" />
              </div>
              <div>
                <div className="font-medium text-sm">ИИ-помощник</div>
                <div className="text-xs text-muted-foreground">Мгновенные ответы 24/7</div>
              </div>
              <button className="ml-auto px-4 py-2 rounded-xl text-xs font-medium bg-gradient-to-r from-purple-600/50 to-cyan-600/30 text-white border border-purple-500/20 hover:opacity-90 transition-all">
                Спросить
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}