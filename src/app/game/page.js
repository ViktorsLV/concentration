import GameBoard from '../components/GameBoard';

const Game = () => {
  return (
    <div className="mx-auto sm:px-6 max-w-7xl">
      <div className="w-full mx-auto sm:max-w-7xl">
        <h2 className="mb-6 text-4xl font-bold tracking-tight text-center text-white sm:text-6xl">Concentration Game</h2>
        <div className="mx-auto ">
          <GameBoard />
        </div>
      </div>
    </div>
  );
};

export default Game;
