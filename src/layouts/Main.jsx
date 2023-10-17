import { Outlet } from "react-router-dom";
import { BiSearch, BiSolidCircle } from "react-icons/bi";

const Main = () => {
  return (
    <section className="2xl:container mx-auto">
      <div className="flex justify-between text-white px-4 py-3 border-b border-slate-800">
        <div className="flex items-center gap-7">
          <div className="flex items-center">
            <img src="/images/icons/logo.png" alt="" />
            <p className="text-2xl font-medium">Sonata</p>
          </div>
          <div className="flex items-center gap-1 text-xs bg-slate-800 px-3 py-1 rounded-lg">
            <img className="w-3" src="/images/icons/ethereum.png" alt="" />
            <p>$1680.55</p>
          </div>
          <div className="flex items-center gap-1 border-r border-slate-700 pr-5">
            <img className="w-3" src="/images/icons/gas.png" alt="" />
            <p className="text-xs">9</p>
          </div>
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

        <div className="flex items-center gap-5">
          <div className="relative">
            <img
              className="w-3 absolute top-0 bottom-0 my-auto left-2"
              src="/images/icons/ethereum.png"
              alt=""
            />
            <select
              name=""
              id=""
              className="bg-slate-800 text-xs h-[30px] rounded-lg px-6"
            >
              <option value="" className="flex">
                <p>Ethereum</p>
              </option>
            </select>
          </div>
          <p className="flex items-center gap-1">
            <BiSolidCircle className="w-1" />
            <span className="text-xs">0x20F.....4DD9</span>
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between px-4 py-2 border-b border-slate-800">
        <p className="text-white font-medium text-xs">Live Projects</p>
        <ul className="flex  gap-1">
          <li className="bg-slate-800 flex items-center gap-5 py-1 px-3 rounded-[4px] text-white">
            <div className="flex items-center gap-1 text-xs">
              <img className="w-[15px]]" src="/images/icons/feel.png" alt="" />
              <p>FEELS</p>
            </div>
            <p className="text-[9px] border border-slate-700 px-3">+23%</p>
          </li>
          <li className="bg-slate-800 flex items-center gap-5 py-1 px-3 rounded-[4px] text-white">
            <div className="flex items-center gap-1 text-xs">
              <img
                className="w-[15px]]"
                src="/images/icons/fraction.png"
                alt=""
              />
              <p>fraction</p>
            </div>
            <p className="text-[9px] border border-slate-700 px-3">+23%</p>
          </li>
          <li className="bg-slate-800 flex items-center gap-5 py-1 px-3 rounded-[4px] text-white">
            <div className="flex items-center gap-1 text-xs">
              <img className="w-[15px]]" src="/images/icons/compy.png" alt="" />
              <p>COMPY</p>
            </div>
            <p className="text-[9px] border border-slate-700 px-3">+23%</p>
          </li>
          <li className="bg-slate-800 flex items-center gap-5 py-1 px-3 rounded-[4px] text-white">
            <div className="flex items-center gap-1 text-xs">
              <img
                className="w-[15px]]"
                src="/images/icons/radial.png"
                alt=""
              />
              <p>RADIAL</p>
            </div>
            <p className="text-[9px] border border-slate-700 px-3">+23%</p>
          </li>
          <li className="bg-slate-800 flex items-center gap-5 py-1 px-3 rounded-[4px] text-white">
            <div className="flex items-center gap-1 text-xs">
              <img className="w-[15px]]" src="/images/icons/pepe.png" alt="" />
              <p>pepe</p>
            </div>
            <p className="text-[9px] border border-slate-700 px-3">+23%</p>
          </li>
          <li className="bg-slate-800 flex items-center gap-5 py-1 px-3 rounded-[4px] text-white">
            <div className="flex items-center gap-1 text-xs">
              <img className="w-[15px]]" src="/images/icons/herm.png" alt="" />
              <p>HERM</p>
            </div>
            <p className="text-[9px] border border-slate-700 px-3">+23%</p>
          </li>
          <li className="bg-slate-800 flex items-center gap-5 py-1 px-3 rounded-[4px] text-white">
            <div className="flex items-center gap-1 text-xs">
              <img className="w-[15px]]" src="/images/icons/stemx.png" alt="" />
              <p>STEMX</p>
            </div>
            <p className="text-[9px] border border-slate-700 px-3">+23%</p>
          </li>
          <li className="bg-slate-800 flex items-center gap-5 py-1 px-3 rounded-[4px] text-white">
            <div className="flex items-center gap-1 text-xs">
              <img className="w-[15px]]" src="/images/icons/long.png" alt="" />
              <p>LONG</p>
            </div>
            <p className="text-[9px] border border-slate-700 px-3">+23%</p>
          </li>
        </ul>
      </div>

      <div>
        <div></div>
      <Outlet />
      </div>
    </section>
  );
};

export default Main;
