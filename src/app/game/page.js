import GameBoard from '../components/GameBoard';

const Game = () => {
  return (
    <div className="mx-auto sm:px-6 max-w-7xl">
      <div className="w-full mx-auto sm:max-w-7xl">
        <h2 className="mb-2 text-4xl font-bold tracking-tight text-center text-white sm:text-6xl">Concentration Game</h2>
        <p className="mt-2 mb-4 text-sm font-bold text-center text-white">(Looney Tunes Edition)</p>
        <div className="mx-auto ">
          <GameBoard />
        </div>
      </div>
    </div>
  );
};

export default Game;
