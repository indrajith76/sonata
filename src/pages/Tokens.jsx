import { BiSearch, BiSolidDownArrow } from "react-icons/bi";

const Tokens = () => {
  const datas = [
    { id: 1, title: "fraction", img: "/public/images/icons/fraction.png" },
    { id: 2, title: "MOONEREUM", img: "/public/images/icons/pepe.png" },
    { id: 3, title: "HAQQ NETWORK", img: "/public/images/icons/stemx.png" },
    { id: 4, title: "GENERIC", img: "/public/images/icons/herm.png" },
    { id: 5, title: "MOONEREUM", img: "/public/images/icons/radial.png" },
    { id: 6, title: "HAQQ NETWORK", img: "/public/images/icons/long.png" },
    { id: 7, title: "fraction", img: "/public/images/icons/fraction.png" },
    { id: 8, title: "MOONEREUM", img: "/public/images/icons/pepe.png" },
    { id: 9, title: "HAQQ NETWORK", img: "/public/images/icons/stemx.png" },
    { id: 10, title: "GENERIC", img: "/public/images/icons/herm.png" },
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

      <div className="mx-4 bg-slate-900">
        <div className="border-t border-l border-r border-slate-700 rounded-t-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-[#000216d0] text-white">
              <tr>
                <td>
                  <span className="rounded-lg flex items-center justify-between px-4 py-2 text-xs">
                    Name
                    <BiSolidDownArrow />
                  </span>
                </td>
                <td>
                  <span className="flex items-center justify-between px-4 py-2 text-xs">
                    Chain
                    <BiSolidDownArrow />
                  </span>
                </td>
                <td>
                  <span className="flex items-center justify-between px-4 py-2 text-xs">
                    Gain
                    <BiSolidDownArrow />
                  </span>
                </td>
                <td>
                  <span className="flex items-center justify-between px-4 py-2 text-xs">
                    Project Tokens Locked
                    <BiSolidDownArrow />
                  </span>
                </td>
                <td>
                  <span className="flex items-center justify-between px-4 py-2 text-xs">
                    Total value Locked
                    <BiSolidDownArrow />
                  </span>
                </td>
              </tr>
            </thead>
            <tbody className="text-white">
              {datas.map((data) => (
                <tr key={data.id}>
                  <td className="border border-slate-700">
                    <p className="flex items-center gap-3 px-4 py-2 text-xs">
                      <img className="w-[23px]" src={data.img} alt="" />
                      {data.title}
                    </p>
                  </td>
                  <td className="border border-slate-700">
                    <p className="flex items-center gap-3 px-4 py-2 text-xs">
                      <img
                        className="w-[14px]"
                        src="/public/images/icons/ethereum.png"
                        alt=""
                      />
                      ETH
                    </p>
                  </td>
                  <td className="border border-slate-700">
                    <p className="flex items-center gap-3 px-4 py-2 text-xs">
                      <img
                        className="w-[13px]"
                        src="/public/images/icons/greenUpArrow.png"
                        alt=""
                      />
                      +5,767%
                    </p>
                  </td>
                  <td className="border border-slate-700">
                    <p className="flex items-center gap-3 px-4 py-2 text-xs">
                      <img
                        className="w-[33px]"
                        src="/public/images/icons/lock.png"
                        alt=""
                      />
                      45 $FRX
                    </p>
                  </td>
                  <td className="border border-slate-700 text-xs px-4">NEW</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col gap-2 justify-center items-center mt-8">
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

export default Tokens;
