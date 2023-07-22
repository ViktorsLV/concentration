'use client';

import { useEffect, useState } from 'react';

import Image from 'next/image';

const gameCards = [
  { src: '/images/bunny.webp' },
  { src: '/images/coyote.webp' },
  { src: '/images/daffy.webp' },
  { src: '/images/lola.webp' },
  { src: '/images/runner.webp' },
  { src: '/images/taz.webp' },
  { src: '/images/tweety.webp' },
  { src: '/images/sylwester.webp' }
];

const GameBoard = () => {
  const [cards, setCards] = useState();

  useEffect(() => {
    randomizeCards();
  }, []);

  const randomizeCards = () => {
    const randomCards = [...gameCards, ...gameCards].sort(() => Math.random() - 0.5).map((card, index) => ({ ...card, id: index }));
    console.log(randomCards);
    setCards(randomCards);
    return randomCards;
  };

  return (
    <div className="grid w-full grid-flow-row grid-cols-4 grid-rows-4 gap-2 mx-auto sm:gap-6">
      {/* <button onClick={randomizeCards}>randomize</button> */}
      {cards?.map((card) => (
        <Card key={card.id} src={card.src} />
      ))}
    </div>
  );
};

export default GameBoard;

const Card = ({ src }) => {
  return (
    <div className="w-full h-[100px] relative bg-gray-300 rounded-xl hover:cursor-pointer hover:opacity-90 duration-300 transition-all ease-in-out">
      <Image src={src} alt="card" fill={true} objectFit="contain" />
    </div>
  );
};
