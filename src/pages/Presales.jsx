import { Link } from "react-router-dom";
import { BiSearch, BiRightArrowAlt } from "react-icons/bi";
import Generic from "../../public/images/icons/generic.png";
import Moonereum from "../../public/images/icons/moonereum.png";
import Haqqnetwork from "../../public/images/icons/haqqnetwork.png";
import { useState } from "react";

const Presales = () => {
  const [showTokenStatus, setShowTokenStatus] = useState(false);

  const datas = [
    { id: 1, title: "GENERIC", img: Generic, href: "/TokenPages" },
    { id: 2, title: "MOONEREUM", img: Moonereum, href: "/TokenPages" },
    { id: 3, title: "HAQQ NETWORK", img: Haqqnetwork, href: "/TokenPages" },
    { id: 4, title: "GENERIC", img: Generic, href: "/TokenPages" },
    { id: 5, title: "MOONEREUM", img: Moonereum, href: "/TokenPages" },
    { id: 6, title: "HAQQ NETWORK", img: Haqqnetwork, href: "/TokenPages" },
  ];

  return (
    <div>
      <div className="flex items-center justify-between border-b border-slate-800 px-4">
        <ul className="flex text-white text-sm">
          <li className="py-2 px-3 cursor-pointer border-b border-transparent hover:border-white">
            Ongoing
          </li>
          <li className="py-2 px-3 cursor-pointer border-b border-transparent hover:border-white">
            NFT Sales
          </li>
          <li className="py-2 px-3 cursor-pointer border-b border-transparent hover:border-white">
            Completed
          </li>
        </ul>
        <button className="bg-gradient-to-t from-[#B76FFF] to-[#6B37FF] to-50% text-white text-xs px-3 py-1 rounded-[4px]">
          Create a New Token
        </button>
      </div>

      <div className="px-4 py-4">
        <div className="relative">
          <BiSearch className="absolute top-0 bottom-0 my-auto left-2 text-slate-500" />
          <input
            className="w-full lg:w-[550px] rounded-lg bg-[#1D1A27] border border-[#414141] text-xs h-9 pl-8"
            type="text"
            name=""
            id=""
            placeholder="Search token name or symbol"
          />
        </div>
      </div>

      <div className="mx-4 bg-[#14121A] p-4 rounded-lg 2xl:h-screen">
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 ${
            showTokenStatus ? "h-full" : "h-[550px]"
          } overflow-hidden relative`}
        >
          {!showTokenStatus && (
            <div className="innerShadow w-full absolute bottom-0 h-[150px]"></div>
          )}
          {/* Cards */}
          {datas.map((data) => (
            <div
              key={data.id}
              className="bg-[#18151E] border border-[#242424] text-white p-4 rounded-lg"
            >
              <img className="w-8 mx-auto" src={data.img} alt="" />
              <p className="text-center text-xl my-2">{data.title}</p>
              <p className="text-sm text-center text-slate-500">GENC</p>
              <h6 className="text-2xl text-center my-4">
                13<span className="text-slate-600 font-semibold"> ETH</span>
              </h6>
              <div className="bg-[#242424] h-[5px] overflow-hidden rounded-lg">
                <div className="bg-[#C781FF] h-2 w-[25%]"></div>
              </div>
              <div className="text-[13px] flex justify-between items-center mt-1">
                <div>
                  <p>SOFT</p>
                  <p className="text-[#C781FF]">10</p>
                </div>
                <div>
                  <p>HARD</p>
                  <p className="text-[#62FF68] text-right">20</p>
                </div>
              </div>
              <div className="text-lg flex justify-between items-center mt-1">
                <p>Sale type</p>
                <p>Liquidity</p>
              </div>
              <div className="flex my-4">
                <Link
                  to={data.href}
                  className="bg-gradient-to-tl from-[#C781FF] to-[#B14848] p-[2px] rounded-lg w-48 mx-auto"
                >
                  <div className="flex items-center justify-center bg-black rounded-lg py-1">
                    <span className="text-sm">View</span>
                    <BiRightArrowAlt />
                  </div>
                </Link>
              </div>
              <h4 className="text-center text-2xl font-semibold mb-1">
                00:20:10:14
              </h4>
              <p className="text-sm text-slate-500 text-center">
                2-10 09:58 (UTC)
              </p>
            </div>
          ))}
          <div
            className={`flex justify-center ${
              setShowTokenStatus ? "mt-10" : "mt-0"
            }`}
          >
            <button
              onClick={() => setShowTokenStatus(!showTokenStatus)}
              className="absolute bottom-5 left-0 right-0 mx-auto text-center underline text-white text-sm font-medium"
            >
              {!showTokenStatus ? "Show more tokens" : "Show less tokens"}
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center">
          <p className="text-[10px] text-slate-600">
            Want to create your own token?
          </p>
          <button className="bg-gradient-to-t from-[#B76FFF] to-[#6B37FF] to-50% text-white text-xs px-3 py-1 rounded-[4px]">
            Launch on Sonata
          </button>
          <p className="text-[8px] text-slate-600">Load more tokens</p>
        </div>
      </div>
    </div>
  );
};

export default Presales;
