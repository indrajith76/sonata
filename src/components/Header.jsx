import { Link } from "react-router-dom";
import { BiSearch, BiSolidCircle, BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const Header = ( props ) => {
  const { sidebarStatus, setSidebarStatus } = props;
  return (
    <>
      <div className="lg:flex justify-between text-white px-4 py-3 border-b border-slate-800">
        <div className="flex justify-between lg:justify-normal items-center gap-7">
          <div className="flex gap-3 items-center">
            <button
            id="menuBtn"
              className="border p-1 rounded block lg:hidden"
              onClick={() => setSidebarStatus(!sidebarStatus)}
            >
              {sidebarStatus ? <AiOutlineClose /> : <BiMenu />}
            </button>
            <Link to="/" className="flex items-center">
              <img src="/images/icons/logo.png" alt="" />
              <p className="text-2xl font-medium">Sonata</p>
            </Link>
          </div>
          <div className="flex gap-4">
            <div className="flex items-center gap-1 text-xs bg-[#1D1A27] px-3 py-1 rounded-lg">
              <img className="w-3" src="/images/icons/ethereum.png" alt="" />
              <p>$1680.55</p>
            </div>
            <div className="flex items-center gap-1 lg:border-r border-slate-700 lg:pr-5">
              <img className="w-3" src="/images/icons/gas.png" alt="" />
              <p className="text-xs">9</p>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <p className="border absolute top-0 bottom-0 my-auto right-2 text-xs h-fit border-slate-600 rounded-md py-1 px-2 text-slate-500">
              /
            </p>
            <BiSearch className="absolute top-0 bottom-0 my-auto left-2 text-slate-500" />
            <input
              className="w-[550px] rounded-lg bg-[#1D1A27] border border-[#414141] text-xs h-9 pl-8 pr-9"
              type="text"
              name=""
              id=""
              placeholder="Search token name or symbol"
            />
          </div>
        </div>

        <div className="relative mt-4 block lg:hidden">
          <p className="border absolute top-0 bottom-0 my-auto right-2 text-xs h-fit border-slate-600 rounded-md py-1 px-2 text-slate-500">
            /
          </p>
          <BiSearch className="absolute top-0 bottom-0 my-auto left-2 text-slate-500" />
          <input
            className="w-full rounded-lg bg-[#1D1A27] border border-[#414141] text-xs h-9 pl-8 pr-9"
            type="text"
            name=""
            id=""
            placeholder="Search token name or symbol"
          />
        </div>

        <div className="flex justify-between lg:justify-normal items-center gap-5 mt-5 lg:mt-0">
          <div className="relative">
            <img
              className="w-3 absolute top-0 bottom-0 my-auto left-2"
              src="/images/icons/ethereum.png"
              alt=""
            />
            <select
              name=""
              id=""
              className="bg-[#1D1A27] text-xs h-[30px] rounded-lg px-6"
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

      <div className="flex items-center gap-3 lg:gap-0 justify-between px-4 py-2 border-b border-slate-800 ">
        <p className="text-white font-medium text-xs">Live Projects</p>
        <ul className="flex gap-1 overflow-auto md:mr-4 lg:mr-0">
          <li className="bg-[#1D1A27] flex items-center gap-5 py-1 px-3 rounded-[4px] text-white">
            <div className="flex items-center gap-1 text-xs">
              <img className="w-[15px]]" src="/images/icons/feel.png" alt="" />
              <p>FEELS</p>
            </div>
            <p className="text-[9px] border border-[#343434] px-3">+23%</p>
          </li>
          <li className="bg-[#1D1A27] flex items-center gap-5 py-1 px-3 rounded-[4px] text-white">
            <div className="flex items-center gap-1 text-xs">
              <img
                className="w-[15px]]"
                src="/images/icons/fraction.png"
                alt=""
              />
              <p>fraction</p>
            </div>
            <p className="text-[9px] border border-[#343434] px-3">+23%</p>
          </li>
          <li className="bg-[#1D1A27] flex items-center gap-5 py-1 px-3 rounded-[4px] text-white">
            <div className="flex items-center gap-1 text-xs">
              <img className="w-[15px]]" src="/images/icons/compy.png" alt="" />
              <p>COMPY</p>
            </div>
            <p className="text-[9px] border border-[#343434] px-3">+23%</p>
          </li>
          <li className="bg-[#1D1A27] flex items-center gap-5 py-1 px-3 rounded-[4px] text-white">
            <div className="flex items-center gap-1 text-xs">
              <img
                className="w-[15px]]"
                src="/images/icons/radial.png"
                alt=""
              />
              <p>RADIAL</p>
            </div>
            <p className="text-[9px] border border-[#343434] px-3">+23%</p>
          </li>
          <li className="bg-[#1D1A27] flex items-center gap-5 py-1 px-3 rounded-[4px] text-white">
            <div className="flex items-center gap-1 text-xs">
              <img className="w-[15px]]" src="/images/icons/pepe.png" alt="" />
              <p>pepe</p>
            </div>
            <p className="text-[9px] border border-[#343434] px-3">+23%</p>
          </li>
          <li className="bg-[#1D1A27] flex items-center gap-5 py-1 px-3 rounded-[4px] text-white">
            <div className="flex items-center gap-1 text-xs">
              <img className="w-[15px]]" src="/images/icons/herm.png" alt="" />
              <p>HERM</p>
            </div>
            <p className="text-[9px] border border-[#343434] px-3">+23%</p>
          </li>
          <li className="bg-[#1D1A27] flex items-center gap-5 py-1 px-3 rounded-[4px] text-white">
            <div className="flex items-center gap-1 text-xs">
              <img className="w-[15px]]" src="/images/icons/stemx.png" alt="" />
              <p>STEMX</p>
            </div>
            <p className="text-[9px] border border-[#343434] px-3">+23%</p>
          </li>
          <li className="bg-[#1D1A27] flex items-center gap-5 py-1 px-3 rounded-[4px] text-white">
            <div className="flex items-center gap-1 text-xs">
              <img className="w-[15px]]" src="/images/icons/long.png" alt="" />
              <p>LONG</p>
            </div>
            <p className="text-[9px] border border-[#343434] px-3">+23%</p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
