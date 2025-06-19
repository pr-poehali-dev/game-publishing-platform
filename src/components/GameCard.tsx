import Icon from "@/components/ui/icon";

interface GameCardProps {
  title: string;
  description: string;
  players: string;
  image: string;
  category: string;
  gradient: string;
}

const GameCard = ({
  title,
  description,
  players,
  image,
  category,
  gradient,
}: GameCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-card border border-border hover-glow cursor-pointer">
      <div className="aspect-video relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent`}
        />

        <div className="absolute top-4 left-4">
          <span
            className={`${gradient} px-3 py-1 rounded-full text-white text-sm font-medium`}
          >
            {category}
          </span>
        </div>

        <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full p-2">
          <Icon
            name="Heart"
            size={20}
            className="text-white hover:text-game-pink transition-colors"
          />
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-montserrat font-bold mb-2 group-hover:text-game-purple transition-colors">
          {title}
        </h3>
        <p className="text-foreground/70 mb-4 line-clamp-2">{description}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-foreground/60">
            <Icon name="Users" size={16} />
            <span className="text-sm">{players}</span>
          </div>

          <button className="bg-game-purple/10 text-game-purple px-4 py-2 rounded-full text-sm font-medium hover:bg-game-purple hover:text-white transition-all">
            Играть
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
