import Link from 'next/link';

const Home = () => {
  return (
    <div className="max-w-2xl mx-auto py-28 sm:py-40 ">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Welcome to - Concentration Game!</h1>
        <p className="mt-6 text-lg leading-8 text-white">
          Stimulating and challenging game for young children and adults. Try it out and test your memory skills!
        </p>
        <div className="flex flex-col items-center justify-center mt-10 sm:flex-row gap-y-6 sm:gap-y-0 gap-x-6">
          <Link
            href="/game"
            className="rounded-full bg-indigo-600 w-2/5 sm:w-fit px-5 sm:px-10 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            PLAY
          </Link>
          <Link href="/instructions" className="text-sm font-semibold leading-6 text-white hover:underline">
            How to play <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
