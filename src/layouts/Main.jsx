import { Outlet, Link } from "react-router-dom";
import {
  BiSolidCircle,
  BiLogoTwitter,
  BiLogoTelegram,
  BiLogoDiscordAlt,
} from "react-icons/bi";
import Header from "../components/Header";

const Main = () => {
  return (
    <section className="2xl:container mx-auto">
      <Header />

      {/* sidebar */}
      <div className="flex" id="sidebar">
        <div className="w-[280px] bg-[#14121A] flex flex-col justify-between">
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
              <li className="bg-[#1D1A27] w-8 h-8 flex justify-center items-center rounded-md">
                <Link to="" className="text-sm text-white">
                  <BiLogoTwitter />
                </Link>
              </li>
              <li className="bg-[#1D1A27] w-8 h-8 flex justify-center items-center rounded-md">
                <Link to="" className="text-sm text-white">
                  <BiLogoDiscordAlt />
                </Link>
              </li>
              <li className="bg-[#1D1A27] w-8 h-8 flex justify-center items-center rounded-md">
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
