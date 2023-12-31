'use client';

import { useEffect, useState } from 'react';

import Alert from './Alert';
import Button from './Button';
import Card from './Card';
import CardSkeleton from './CardSkeleton';

const gameCards = [
  { src: '/images/bunny.webp', matched: false },
  { src: '/images/coyote.webp', matched: false },
  { src: '/images/daffy.webp', matched: false },
  { src: '/images/lola.webp', matched: false },
  { src: '/images/runner.webp', matched: false },
  { src: '/images/taz.webp', matched: false },
  { src: '/images/tweety.webp', matched: false },
  { src: '/images/sylwester.webp', matched: false }
];

const GameBoard = () => {
  const [cards, setCards] = useState();
  const [turnCount, setTurnCount] = useState(0);

  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);
  const [clickDisabled, setClickDisabled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    resetGame();
  }, []);

  useEffect(() => {
    if (firstCard && secondCard) {
      setClickDisabled(true);
      if (firstCard.src === secondCard.src) {
        setCards((prev) => prev.map((card) => (card.id === firstCard.id || card.id === secondCard.id ? { ...card, matched: true } : card)));
        resetValues();
        setTimeout(() => {
          setClickDisabled(false);
        }, 300);
      } else {
        setTimeout(() => {
          resetValues();
          setClickDisabled(false);
        }, 1200);
      }
    }
  }, [firstCard, secondCard]);

  useEffect(() => {
    if (cards?.every((card) => card.matched)) {
      toggleAlert();
    }
  }, [cards]);

  const handleCardClick = (card) => {
    console.log(card);
    firstCard ? setSecondCard(card) : setFirstCard(card);
  };

  const resetValues = () => {
    setTurnCount((prev) => prev + 1);
    setFirstCard();
    setSecondCard();
  };

  const randomizeCards = () => {
    const randomCards = [...gameCards, ...gameCards].sort(() => Math.random() - 0.5).map((card, index) => ({ ...card, id: index }));
    console.log(randomCards);
    setCards(randomCards);
    return randomCards;
  };

  const resetGame = () => {
    setFirstCard();
    setSecondCard();
    randomizeCards();
    setTurnCount(0);
  };

  const toggleAlert = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="grid w-full grid-flow-row grid-cols-4 grid-rows-4 gap-2 mx-auto sm:gap-6">
        {cards?.length > 0
          ? cards?.map((card) => (
              <Card
                key={card.id}
                card={card}
                handleClick={clickDisabled ? null : () => handleCardClick(card)}
                turnedAround={firstCard === card || secondCard === card || card.matched}
              />
            ))
          : Array(16)
              .fill()
              .map((_, index) => <CardSkeleton key={index} />)}
      </div>
      <div className="flex justify-center w-full mt-8">
        <p className="text-2xl font-medium text-white">Turns: {turnCount}</p>
      </div>
      <div className="flex items-center w-3/5 mx-auto mt-8 sm:w-2/5 ">
        <Button text="Restart Game" onClick={resetGame} disabled={turnCount === 0 && !firstCard} />
      </div>
      {isOpen && <Alert toggleAlert={toggleAlert} open={isOpen} turnCount={turnCount} resetGame={resetGame} />}
    </>
  );
};

export default GameBoard;
