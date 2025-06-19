import GameCard from "./GameCard";

const GamesSection = () => {
  const games = [
    {
      title: "Bubble Pop Saga",
      description:
        "Лопай пузыри, собирай комбо и соревнуйся с друзьями в этой захватывающей головоломке!",
      players: "2.1M игроков",
      image:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=400&fit=crop",
      category: "Головоломка",
      gradient: "game-gradient",
    },
    {
      title: "Farm Heroes",
      description:
        "Создай свою ферму мечты, выращивай урожай и торгуй с соседями в социальной сети!",
      players: "1.8M игроков",
      image:
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&h=400&fit=crop",
      category: "Симулятор",
      gradient: "game-gradient-orange",
    },
    {
      title: "Word Master",
      description:
        "Составляй слова, развивай словарный запас и участвуй в турнирах с призами!",
      players: "960K игроков",
      image:
        "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=600&h=400&fit=crop",
      category: "Слова",
      gradient: "game-gradient-blue",
    },
    {
      title: "Card Battle Royale",
      description:
        "Собирай коллекционные карты, создавай колоды и сражайся в онлайн-турнирах!",
      players: "1.3M игроков",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      category: "Карты",
      gradient: "game-gradient",
    },
    {
      title: "Match-3 Kingdom",
      description:
        "Строй королевство, решая головоломки три-в-ряд. Тысячи уровней ждут тебя!",
      players: "3.2M игроков",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
      category: "Match-3",
      gradient: "game-gradient-orange",
    },
    {
      title: "Quiz Challenge",
      description:
        "Проверь свои знания в интеллектуальных викторинах и выиграй реальные призы!",
      players: "870K игроков",
      image:
        "https://images.unsplash.com/photo-1606177543011-950332297d4d?w=600&h=400&fit=crop",
      category: "Викторина",
      gradient: "game-gradient-blue",
    },
  ];

  return (
    <section id="games" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
            <span className="bg-gradient-to-r from-game-purple to-game-pink bg-clip-text text-transparent">
              Популярные игры
            </span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Выбери свою любимую игру из сотен доступных жанров. Каждый день
            новые вызовы и события!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game, index) => (
            <div
              key={game.title}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <GameCard {...game} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="border-2 border-game-purple text-game-purple px-8 py-4 rounded-full font-semibold text-lg hover:bg-game-purple hover:text-white transition-all">
            Показать все игры
          </button>
        </div>
      </div>
    </section>
  );
};

export default GamesSection;
