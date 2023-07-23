import '../styles/card.css';

const Card = ({ card, handleClick, turnedAround }) => {
  return (
    <div className="card">
      <div className={turnedAround ? 'flipped' : ''}>
        <img src={card.src} alt="front card" className="front" />
        <img onClick={handleClick} src="/images/looneyTunes.avif" alt="back card" className="back hover:cursor-pointer" />
      </div>
    </div>
  );
};

export default Card;
