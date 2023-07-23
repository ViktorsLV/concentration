import Image from 'next/image';

const Card = ({ card, handleClick, turnedAround }) => {
  return (
    <div className="w-full h-[100px] relative bg-gray-300 rounded-xl">
      {turnedAround ? (
        <Image src={card.src} alt="front card" fill={true} objectFit="contain" className="rounded-xl" />
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

export default Card;
