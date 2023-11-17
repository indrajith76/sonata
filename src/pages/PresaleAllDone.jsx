import { Link } from "react-router-dom";

const PresaleAllDone = () => {
  return (
    <div className="bg-presale lg:ml-5 px-8 py-8 h-full 2xl:h-screen flex justify-center items-center text-center">
      <div>
        <p className="text-[#FFF500] font-semibold leading-6 text-xl">
          Congratulations! 🥳
        </p>
        <p className="text-white my-2 text-2xl font-bold leading-10">$TORREN</p>
        <p className="text-white text-lg">
          <span className="text-[#62FF68]">Successfully</span> created presale.
        </p>
        <p className="text-white text-xs leading-5">
          You can view the listing on the presale page. Good luck!
        </p>
        <Link
          to="/"
          className="bg-gradient-to-t from-[#B76FFF] to-[#6B37FF] to-50% text-white text-xs px-8 py-[6px] rounded-[4px] mx-auto mt-6 inline-block"
        >
          Go to Presales
        </Link>
      </div>
    </div>
  );
};

export default PresaleAllDone;
