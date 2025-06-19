import Icon from "@/components/ui/icon";

const VKIntegration = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 game-gradient opacity-10" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-20 h-20 game-gradient rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
              <Icon name="Users" size={40} className="text-white" />
            </div>

            <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
              Играй с друзьями из{" "}
              <span className="bg-gradient-to-r from-game-blue to-game-purple bg-clip-text text-transparent">
                VKontakte
              </span>
            </h2>

            <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
              Подключи VK и играй с друзьями, делись достижениями, участвуй в
              турнирах и получай эксклюзивные награды!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border hover-glow">
              <div className="w-12 h-12 game-gradient-blue rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon name="UserPlus" size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-montserrat font-bold mb-2">
                Добавляй друзей
              </h3>
              <p className="text-foreground/70 text-sm">
                Находи друзей из VK и приглашай их играть вместе
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border hover-glow">
              <div className="w-12 h-12 game-gradient-orange rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Trophy" size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-montserrat font-bold mb-2">
                Соревнуйся
              </h3>
              <p className="text-foreground/70 text-sm">
                Участвуй в турнирах и поднимайся в рейтинге
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border hover-glow">
              <div className="w-12 h-12 game-gradient rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Share" size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-montserrat font-bold mb-2">Делись</h3>
              <p className="text-foreground/70 text-sm">
                Публикуй достижения и приглашай новых игроков
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://vk.com/nexplay_games?from=groups"
              target="_blank"
              rel="noopener noreferrer"
              className="game-gradient px-8 py-4 rounded-full text-white font-semibold text-lg hover-glow flex items-center space-x-2 transition-all"
            >
              <Icon name="Users" size={24} />
              <span>Присоединиться к сообществу VK</span>
            </a>

            <button className="text-foreground/70 hover:text-foreground transition-colors flex items-center space-x-2">
              <Icon name="HelpCircle" size={20} />
              <span>Как это работает?</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VKIntegration;
