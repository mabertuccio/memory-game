import "../assets/styles/font.css";
import { useState, useEffect } from "react";
import Header from "./Header";
import Button from "./Button";
import Card from "./Card";

export function MemoryGame() {
  const [cards, setCards] = useState([]);
  const [clickedIndices, setClickedIndices] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [gameWon, setGameWon] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);

  const initializeGame = () => {
    const emojis = [
      "\u{1F34E}",
      "\u{1F349}",
      "\u{1F34F}",
      "\u{1F350}",
      "\u{1F351}",
      "\u{1F352}",
      "\u{1F353}",
      "\u{1F34A}",
    ];
    const shuffledEmojis = [...emojis, ...emojis].sort(
      () => 0.5 - Math.random()
    );
    setCards(shuffledEmojis.map((emoji) => ({ emoji, isClicked: false })));
    setMatchedCards([]);
    setGameWon(false);
    setIsFlipping(false);
    setClickedIndices([]);
  };

  useEffect(() => {
    initializeGame();
  }, []);

  useEffect(() => {
    if (clickedIndices.length === 2) {
      const [firstIndex, secondIndex] = clickedIndices;
      const firstCard = cards[firstIndex];
      const secondCard = cards[secondIndex];

      setIsFlipping(true);

      if (firstCard.emoji === secondCard.emoji) {
        setMatchedCards((prev) => [...prev, firstIndex, secondIndex]);
        setIsFlipping(false);
      } else {
        setTimeout(() => {
          setCards((prevCards) =>
            prevCards.map((card, index) => ({
              ...card,
              isClicked: matchedCards.includes(index),
            }))
          );
          setIsFlipping(false);
        }, 1000);
      }
      setClickedIndices([]);
    }
  }, [clickedIndices, cards, matchedCards]);

  useEffect(() => {
    if (cards.length > 0 && matchedCards.length === cards.length) {
      setGameWon(true);
      console.log("All pairs matched!");
    }
  }, [matchedCards, cards]);

  const handleCardClick = (index) => {
    if (
      clickedIndices.length < 2 &&
      !clickedIndices.includes(index) &&
      !matchedCards.includes(index) &&
      !isFlipping
    ) {
      setCards((prevCards) =>
        prevCards.map((card, i) =>
          i === index ? { ...card, isClicked: true } : card
        )
      );
      setClickedIndices((prev) => [...prev, index]);
    }
  };

  return (
    <div className="w-screen h-screen bg-indigo-800 flex items-center">
      <div className="bg-slate-100 max-w-max mx-auto p-4 rounded-sm">
        <Header
          gameStatus={
            gameWon && (
              <div className="text-center text-2xl font-bold text-green-600 mt-4">
                ¡Felicidades! Has ganado el juego.
              </div>
            )
          }
        />
        <div className="memory-game max-w-max p-4 grid grid-cols-4 gap-4 justify-items-center">
          {cards.map((card, index) => (
            <Card
              key={index}
              emoji={card.emoji}
              onClick={() => handleCardClick(index)}
              isClicked={card.isClicked || matchedCards.includes(index)}
              disabled={isFlipping}
            />
          ))}
        </div>
        <Button onClick={initializeGame} />
      </div>
    </div>
  );
}

export default MemoryGame;
