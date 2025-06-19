import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-game-purple/20 via-background to-game-pink/20" />

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 game-gradient rounded-full animate-float opacity-30" />
      <div
        className="absolute bottom-20 right-10 w-32 h-32 game-gradient-orange rounded-full animate-float opacity-20"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-40 right-20 w-16 h-16 game-gradient-blue rounded-full animate-float opacity-25"
        style={{ animationDelay: "2s" }}
      />

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-montserrat font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-game-purple via-game-pink to-game-orange bg-clip-text text-transparent">
              Играй
            </span>
            <br />
            <span className="text-foreground">в онлайн</span>
          </h1>

          <p className="text-xl md:text-2xl text-foreground/80 mb-8 font-rubik"></p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="game-gradient px-8 py-4 rounded-full text-white font-semibold text-lg hover-glow flex items-center space-x-2 transition-all animate-pulse-glow">
              <Icon name="Play" size={24} />
              <span>Начать играть</span>
            </button>

            <button className="border-2 border-game-purple text-game-purple px-8 py-4 rounded-full font-semibold text-lg hover:bg-game-purple hover:text-white transition-all flex items-center space-x-2">
              <Icon name="Users" size={24} />
              <span>Присоединиться к сообществу</span>
            </button>
          </div>

          <div className="flex justify-center items-center space-x-8 text-foreground/60">
            <div className="flex items-center space-x-2">
              <Icon name="Users" size={20} />
              <span>5M+ игроков</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Trophy" size={20} />
              <span>100+ игр</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Star" size={20} />
              <span>4.8 рейтинг</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
