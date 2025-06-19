import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-card/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 game-gradient rounded-xl flex items-center justify-center">
                <Icon name="Gamepad2" size={24} className="text-white" />
              </div>
              <span className="text-2xl font-montserrat font-bold bg-gradient-to-r from-game-purple to-game-pink bg-clip-text text-transparent">
                PlayHub
              </span>
            </div>
            <p className="text-foreground/70 text-sm mb-4">
              Лучшие казуальные игры для социальных сетей. Играй, соревнуйся,
              побеждай!
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-game-purple/10 rounded-full flex items-center justify-center hover:bg-game-purple hover:text-white transition-all"
              >
                <Icon name="MessageCircle" size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-game-purple/10 rounded-full flex items-center justify-center hover:bg-game-purple hover:text-white transition-all"
              >
                <Icon name="Users" size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-game-purple/10 rounded-full flex items-center justify-center hover:bg-game-purple hover:text-white transition-all"
              >
                <Icon name="Mail" size={18} />
              </a>
            </div>
          </div>

          {/* Games */}
          <div>
            <h3 className="font-montserrat font-bold mb-4">Игры</h3>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Bubble Pop Saga
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Farm Heroes
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Word Master
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Card Battle
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Все игры
                </a>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="font-montserrat font-bold mb-4">Сообщество</h3>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Турниры
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Рейтинги
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Форум
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Новости
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Блог
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-montserrat font-bold mb-4">Поддержка</h3>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Помощь
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Контакты
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Обратная связь
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Политика
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Условия
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/60 text-sm">
            © 2024 PlayHub. Все права защищены.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <span className="text-foreground/60 text-sm">
              Сделано с ❤️ для геймеров
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
