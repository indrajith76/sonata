import { Outlet, Link } from "react-router-dom";
import {
  BiSearch,
  BiSolidCircle,
  BiLogoTwitter,
  BiLogoTelegram,
  BiLogoDiscordAlt,
} from "react-icons/bi";

const Main = () => {
  return (
    <section className="2xl:container mx-auto">
      <div className="flex justify-between text-white px-4 py-3 border-b border-slate-800">
        <div className="flex items-center gap-7">
          <Link to="/" className="flex items-center">
            <img src="/images/icons/logo.png" alt="" />
            <p className="text-2xl font-medium">Sonata</p>
          </Link>
          <div className="flex items-center gap-1 text-xs bg-slate-800 px-3 py-1 rounded-lg">
            <img className="w-3" src="/images/icons/ethereum.png" alt="" />
            <p>$1680.55</p>
          </div>
          <div className="flex items-center gap-1 border-r border-slate-700 pr-5">
            <img className="w-3" src="/images/icons/gas.png" alt="" />
            <p className="text-xs">9</p>
          </div>
          <div className="relative">
            <p className="border absolute top-0 bottom-0 my-auto right-2 text-xs h-fit border-slate-600 rounded-md py-1 px-2 text-slate-500">
              /
            </p>
            <BiSearch className="absolute top-0 bottom-0 my-auto left-2 text-slate-500" />
            <input
              className="w-[550px] rounded-lg bg-slate-800 text-xs h-9 pl-8 pr-9"
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

      {/* sidebar */}
      <div className="flex">
        <div className="w-[280px] bg-slate-900 flex flex-col justify-between">
          <div>
            <ul className="my-8 pl-4 flex flex-col gap-8">
              <li>
                <Link className="text-white text-sm" to="/Services">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/tokens" className="text-white text-sm">
                  Tokens
                </Link>
              </li>
              <li>
                <Link className="text-white text-sm" to="/">
                  Wallet
                </Link>
              </li>
              <li>
                <Link className="text-white text-sm" to="/">
                  Presales
                </Link>
              </li>
              <li>
                <Link className="text-white text-sm" to="/">
                  Staking & Farms
                </Link>
              </li>
            </ul>
            <p className="text-slate-500 text-xs pl-4">Tools for Creators</p>
            <ul className="my-8 pl-4 flex flex-col gap-8">
              <li>
                <Link className="text-white text-sm" to="/">
                  Create a Token
                </Link>
              </li>
              <li>
                <Link className="text-white text-sm" to="/">
                  Start a Presale
                </Link>
              </li>
            </ul>
          </div>
          <div className="ml-4 mb-8">
            <p className="text-white text-xs flex items-center gap-1 mb-4">
              <BiSolidCircle className="text-[4px]" />
              CONNECTED
            </p>
            <ul className="flex gap-5">
              <li className="bg-slate-800 w-8 h-8 flex justify-center items-center rounded-md">
                <Link to="" className="text-sm text-white">
                  <BiLogoTwitter />
                </Link>
              </li>
              <li className="bg-slate-800 w-8 h-8 flex justify-center items-center rounded-md">
                <Link to="" className="text-sm text-white">
                  <BiLogoDiscordAlt />
                </Link>
              </li>
              <li className="bg-slate-800 w-8 h-8 flex justify-center items-center rounded-md">
                <Link to="" className="text-sm text-white">
                  <BiLogoTelegram />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Main;
