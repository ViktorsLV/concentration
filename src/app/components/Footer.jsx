const Footer = () => {
  return (
    <div className="w-full p-3 text-white bg-gray-800">
      <h1 className="hidden text-center sm:block">&#169; {new Date().getFullYear()} Concentration.Game. All Rights Reserved.</h1>
      <h1 className="flex flex-col text-[12px] text-center sm:hidden">
        <span>&#169; {new Date().getFullYear()} Lastlap.delivery. All Rights Reserved.</span>
      </h1>
    </div>
  );
};

export default Footer;
