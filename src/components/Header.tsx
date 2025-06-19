import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 game-gradient rounded-xl flex items-center justify-center">
              <Icon name="Gamepad2" size={24} className="text-white" />
            </div>
            <span className="text-2xl font-montserrat font-bold bg-gradient-to-r from-game-purple to-game-pink bg-clip-text text-transparent">
              NEXPLAY
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#games"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Игры
            </a>
            <a
              href="#news"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Новости
            </a>
            <a href="#community" className="">
              Сообщество
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="game-gradient px-6 py-2 rounded-full text-white font-medium hover-glow transition-all">
              Войти через VK
            </button>
            <button className="md:hidden">
              <Icon name="Menu" size={24} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
