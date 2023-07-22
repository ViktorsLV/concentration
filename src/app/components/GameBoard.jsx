'use client';

import { useEffect, useState } from 'react';

import Image from 'next/image';

import Alert from './Alert';

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

const GameBoard = ({ toggleModal }) => {
  const [cards, setCards] = useState();
  const [turnCount, setTurnCount] = useState(0);

  const [firstCard, setFirstCard] = useState();
  const [secondCard, setSecondCard] = useState();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    resetGame();
  }, []);

  useEffect(() => {
    if (firstCard && secondCard) {
      if (firstCard.src === secondCard.src) {
        console.log('match');
        setCards((prev) => prev.map((card) => (card.id === firstCard.id || card.id === secondCard.id ? { ...card, matched: true } : card)));
        resetValues();
      } else {
        console.log('no match');
        setTimeout(() => {
          resetValues();
        }, 1000);
      }
    }
  }, [firstCard, secondCard]);

  useEffect(() => {
    if (cards?.every((card) => card.matched)) {
      toggleAlert();
    }
  }, [cards]);

  const randomizeCards = () => {
    const randomCards = [...gameCards, ...gameCards].sort(() => Math.random() - 0.5).map((card, index) => ({ ...card, id: index }));
    console.log(randomCards);
    setCards(randomCards);
    return randomCards;
  };

  const handleCardClick = (card) => {
    console.log(card);
    firstCard ? setSecondCard(card) : setFirstCard(card);
  };

  const resetValues = () => {
    setTurnCount((prev) => prev + 1);
    setFirstCard();
    setSecondCard();
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
        {cards?.map((card) => (
          <Card
            key={card.id}
            card={card}
            firstCard={firstCard}
            secondCard={secondCard}
            setTurnCount={setTurnCount}
            turnCount={turnCount}
            handleClick={() => handleCardClick(card)}
            turnedAround={firstCard === card || secondCard === card || card.matched}
          />
        ))}
      </div>
      <div className="flex justify-center w-full mt-8">
        <p className="text-2xl font-medium text-white">Turns: {turnCount}</p>
      </div>
      {isOpen && <Alert toggleAlert={toggleAlert} open={isOpen} turnCount={turnCount} />}
    </>
  );
};

export default GameBoard;

const Card = ({ card, handleClick, turnedAround }) => {
  return (
    <div className="w-full h-[100px] relative bg-gray-300 rounded-xl">
      {turnedAround ? (
        <Image src={card.src} alt="front card" fill={true} objectFit="contain" />
      ) : (
        <Image
          onClick={handleClick}
          src="/images/looneyTunes.avif"
          alt="back card"
          fill={true}
          objectFit="cover"
          className="transition-all duration-300 ease-in-out rounded-xl opacity-85 hover:cursor-pointer hover:opacity-90"
        />
      )}
    </div>
  );
};
