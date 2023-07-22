const Button = ({ text, onClick }) => {
  return (
    <>
      <button
        type="button"
        className="rounded-full bg-indigo-600 w-full px-5 sm:px-10 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={onClick}>
        {' '}
        {text}
      </button>
    </>
  );
};

export default Button;
