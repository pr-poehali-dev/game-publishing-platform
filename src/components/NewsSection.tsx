import Icon from "@/components/ui/icon";

const NewsSection = () => {
  const news = [
    {
      title: "Новый турнир Word Master с призовым фондом 1 млн рублей!",
      description:
        "Регистрация открыта до 25 декабря. Покажи свои знания русского языка и выиграй крутые призы!",
      date: "15 декабря 2024",
      image:
        "https://images.unsplash.com/photo-1�丁業-5730-5d7b9af1efc5?w=400&h=250&fit=crop",
      category: "Турниры",
    },
    {
      title: "Обновление Bubble Pop Saga - 50 новых уровней!",
      description:
        "Встречай праздничное обновление с зимними уровнями, новыми бонусами и эксклюзивными наградами.",
      date: "12 декабря 2024",
      image:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=250&fit=crop",
      category: "Обновления",
    },
    {
      title: "Интеграция с VK Клипами - делись своими достижениями!",
      description:
        "Теперь можно создавать короткие видео о своих игровых успехах прямо в приложении и делиться ими в VK.",
      date: "8 декабря 2024",
      image:
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=250&fit=crop",
      category: "Новости",
    },
  ];

  return (
    <section id="news" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-game-purple/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
            <span className="bg-gradient-to-r from-game-orange to-game-pink bg-clip-text text-transparent">
              Последние новости
            </span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Следи за обновлениями, турнирами и событиями в мире казуальных игр
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <article
              key={item.title}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover-glow animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                <div className="absolute top-4 left-4">
                  <span className="bg-game-orange px-3 py-1 rounded-full text-white text-sm font-medium">
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-2 text-foreground/60 mb-3">
                  <Icon name="Calendar" size={16} />
                  <time className="text-sm">{item.date}</time>
                </div>

                <h3 className="text-xl font-montserrat font-bold mb-3 group-hover:text-game-orange transition-colors line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-foreground/70 mb-4 line-clamp-3">
                  {item.description}
                </p>

                <button className="flex items-center space-x-2 text-game-orange hover:text-game-pink transition-colors font-medium">
                  <span>Читать далее</span>
                  <Icon name="ArrowRight" size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="border-2 border-game-orange text-game-orange px-8 py-4 rounded-full font-semibold text-lg hover:bg-game-orange hover:text-white transition-all">
            Все новости
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
