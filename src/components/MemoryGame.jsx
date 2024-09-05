import PropTypes from "prop-types";
import "../assets/styles/font.css";

const Card = ({ emoji }) => {
  return (
    <div className="card bg-indigo-600 w-24 h-24 rounded-sm shadow-sm cursor-pointer border-slate-900 border-4 flex items-center justify-center">
      <span className="hidden">{emoji}</span>
    </div>
  );
};

const Header = () => {
  return (
    <div className="title rowdies-font text-black text-center text-3xl p-4">
      <h1 className="title rowdies-font text-black text-center text-3xl p-4">
        memory game
      </h1>
    </div>
  );
};

const Button = () => {
  return (
    <div className="flex justify-center mt-4 p-4">
      <button className="rounded-sm bg-indigo-600 p-4 text-slate-100 font-semibold border-slate-900 border-4">
        Start Game
      </button>
    </div>
  );
};

export function MemoryGame() {
  const emojis = [
    "\u{1F984}",
    "\u{1F355}",
    "\u{1F680}",
    "\u{1F308}",
    "\u{1F984}",
    "\u{1F355}",
    "\u{1F680}",
    "\u{1F308}",
  ];

  const shuffledEmojis = [...emojis, ...emojis].sort(() => 0.5 - Math.random());

  return (
    <div className="w-screen h-screen bg-indigo-800 flex items-center">
      <div className="bg-slate-100 max-w-max mx-auto  p-4 rounded-sm">
        <Header />
        <div className="memory-game max-w-max p-4 grid grid-cols-4 gap-4 justify-items-center">
          {shuffledEmojis.map((_, index) => (
            <Card key={index} emoji={shuffledEmojis[index]} />
          ))}
        </div>
        <Button />
      </div>
    </div>
  );
}

Card.propTypes = {
  emoji: PropTypes.string,
};

export default MemoryGame;
