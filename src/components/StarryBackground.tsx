const StarryBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-b from-black via-indigo-900 to-purple-900">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {[...Array(100)].map((_, i) => {
          const style = {
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 2 + 0.5}px`,
            height: `${Math.random() * 2 + 0.5}px`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 3}s`,
          };
          return (
            <span
              key={i}
              className="absolute rounded-full bg-white opacity-80 animate-twinkle"
              style={style}
            />
          );
        })}
      </div>
    </div>
  );
};

export default StarryBackground;