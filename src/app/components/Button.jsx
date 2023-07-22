const Button = ({ text, onClick, disabled }) => {
  return (
    <>
      <button
        type="button"
        disabled={disabled}
        className={`${
          disabled
            ? 'bg-gray-400 text-slate-200'
            : 'text-white bg-indigo-600 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
        } rounded-full  w-full px-5 sm:px-10 py-2.5 text-sm font-semibold shadow-sm `}
        onClick={onClick}>
        {' '}
        {text}
      </button>
    </>
  );
};

export default Button;
