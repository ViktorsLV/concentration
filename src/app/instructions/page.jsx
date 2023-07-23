const Instructions = () => {
  return (
    <div className="px-6 mx-auto max-w-7xl lg:px-8">
      <div className="max-w-2xl mx-auto lg:mx-0">
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Instructions</h2>
        <p className="mt-6 text-lg leading-8 text-gray-300">
          Below are the instructions for the game that will help you understand the core principles of Concentration Game.
        </p>

        <h3 className="mt-8 text-2xl font-bold tracking-tight text-white">Game Setup</h3>
        <p className="mt-2 text-gray-300">At the start of the game 16 cards are shuffled (face-down) thoroughly and laid down in a 4x4 grid type of field.</p>

        <h3 className="mt-8 text-2xl font-bold tracking-tight text-white">Game Mechanics</h3>
        <p className="mt-2 text-gray-300">Player turns around the card of his choice. To flip a card, simply click on it.</p>

        <h3 className="mt-8 text-2xl font-bold tracking-tight text-white">The Goal</h3>
        <p className="mt-2 text-gray-300">The goal is to find all the matching pairs in as little moves as possible.</p>

        <h3 className="mt-8 text-2xl font-bold tracking-tight text-white">Matching Pair</h3>
        <p className="mt-2 text-gray-300">If the two flipped cards match, they stay face-up, and the player earns a point.</p>

        <h3 className="mt-8 text-2xl font-bold tracking-tight text-white">Non-Matching Pair</h3>
        <p className="mt-2 text-gray-300">If the two flipped cards do not match, they are turned face-down again.</p>
        <p className="mt-2 text-gray-300">Remember the card positions to improve your memory and make better matches in subsequent turns.</p>

        <h3 className="mt-8 text-2xl font-bold tracking-tight text-white">Memory Strategy</h3>
        <p className="mt-2 text-gray-300">
          Concentration is a game of memory. Try to remember the positions of cards you&apos;ve previously flipped to make better matches.
        </p>

        <h3 className="mt-8 text-2xl font-bold tracking-tight text-white">Restarting the Game</h3>
        <p className="mt-2 text-gray-300">If you want to play again, you can either refresh the page or click on a &quot;Restart&quot; button!</p>

        <h3 className="mt-8 text-2xl font-bold tracking-tight text-white">Good luck and have fun!</h3>
      </div>
    </div>
  );
};

export default Instructions;
