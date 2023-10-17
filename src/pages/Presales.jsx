import { BiSearch, BiRightArrowAlt } from "react-icons/bi";
import Generic from "../../public/images/icons/generic.png";
import Moonereum from "../../public/images/icons/moonereum.png";
import Haqqnetwork from "../../public/images/icons/haqqnetwork.png";
import { Link } from "react-router-dom";

const Presales = () => {
  const datas = [
    { id: 1, title: "GENERIC", img: Generic },
    { id: 2, title: "MOONEREUM", img: Moonereum },
    { id: 3, title: "HAQQ NETWORK", img: Haqqnetwork },
    { id: 4, title: "GENERIC", img: Generic },
    { id: 5, title: "MOONEREUM", img: Moonereum },
    { id: 6, title: "HAQQ NETWORK", img: Haqqnetwork },
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

      <div className="pl-4 py-4">
        <div className="relative">
          <BiSearch className="absolute top-0 bottom-0 my-auto left-2 text-slate-500" />
          <input
            className="w-[550px] rounded-lg bg-slate-800 text-xs h-9 pl-8"
            type="text"
            name=""
            id=""
            placeholder="Search token name or symbol"
          />
        </div>
      </div>

      <div className="mx-4 bg-slate-900 p-4 rounded-lg">
        <div className="grid grid-cols-3 gap-5 h-[550px] overflow-hidden relative">
          <div className="innerShadow w-full absolute h-full"></div>
          {/* Cards */}
          {datas.map((data) => (
            <div
              key={data.id}
              className="bg-slate-800 text-white p-4 rounded-lg"
            >
              <img className="w-8 mx-auto" src={data.img} alt="" />
              <p className="text-center text-xl my-2">{data.title}</p>
              <p className="text-sm text-center text-slate-500">GENC</p>
              <h6 className="text-2xl text-center my-4">
                13<span className="text-slate-600 font-semibold"> ETH</span>
              </h6>
              <div className="bg-slate-700 h-[5px] overflow-hidden rounded-lg">
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
                <button className="bg-gradient-to-tl from-[#C781FF] to-[#B14848] p-[2px] rounded-lg w-48 mx-auto">
                  <div className="flex items-center justify-center bg-black rounded-lg py-1">
                    <span className="text-sm">View</span>
                    <BiRightArrowAlt />
                  </div>
                </button>
              </div>
              <h4 className="text-center text-2xl font-semibold mb-1">
                00:20:10:14
              </h4>
              <p className="text-sm text-slate-500 text-center">
                2-10 09:58 (UTC)
              </p>
            </div>
          ))}
          <Link
            to="/"
            className="absolute bottom-5 left-0 right-0 mx-auto text-center underline text-white text-sm font-medium"
          >
            Show more tokens
          </Link>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center">
          <p className="text-[10px] text-slate-600">Want to create your own token?</p>
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
