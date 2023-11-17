import { Link } from "react-router-dom";

const Create = () => {
  return (
    <div className="bg-[#14121A] lg:ml-5 px-8 py-8 h-screen">
      <h3 className="text-white text-2xl font-bold mb-5">
        Launch on{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#8349FF] to-[#FF0000]">
          Sonata
        </span>
        🚀
      </h3>

      <div className="mt-5 text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <Link
          to="/presale-step-1"
          className="border bg-[#1D1A23] border-[#616161] p-3 rounded-lg h-[138px]"
        >
          <p className="text-xs font-bold mb-2">Create Presale</p>
          <p className="text-xs">
            Make a presale to sell your project’s tokens early.
          </p>
        </Link>
        <Link
          to=""
          className="border bg-[#1D1A23] border-[#616161] p-3 rounded-lg h-[138px]"
        >
          <p className="text-xs font-bold mb-2">Create Fair Launch</p>
          <p className="text-xs">Fair launch your new token with no code.</p>
        </Link>
        <Link
          to=""
          className="border bg-[#1D1A23] border-[#616161] p-3 rounded-lg h-[138px]"
        >
          <p className="text-xs font-bold mb-2">Borrow Liquidity</p>
          <p className="text-xs">
            Borrow up to 3 ETH to launch your new token with Opera Protocol.
          </p>
        </Link>
      </div>
      <p className="text-xs text-white mt-7">
        Looking to have your project <strong>incubated through Sonata?</strong>
      </p>
      <button className="bg-gradient-to-t from-[#B76FFF] to-[#6B37FF] to-50% text-white text-xs px-12 py-2 rounded-[4px] mx-auto mt-3 ">
        Apply Here
      </button>
    </div>
  );
};

export default Create;
