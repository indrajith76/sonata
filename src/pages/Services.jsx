import Roket from "/public/images/roket.png";
import Earth from "/public/images/earth.png";
import Tools from "/public/images/tools.png";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="bg-[#14121A] lg:ml-5 px-8 py-8 2xl:h-screen">
      <h3 className="text-white text-2xl font-bold mb-5">
        Services on{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#8349FF] to-[#FF0000]">
          Sonata
        </span>
        🤝
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-x-12">
        {/* card */}
        <div>
          <div className="bg-[#1D1A23] border border-[#616161] rounded-xl px-3 py-4 h-[415px]">
            <p className="text-center text-white text-xs">Marketing</p>
            <img className="mx-auto my-14" src={Roket} alt="" />
            <p className="text-xs text-center text-white">
              Need help getting influencers, callers, and promos for your token?
            </p>
            <p className="text-xs text-center text-white my-5">
              Sonata can connect you with the best of the best!
            </p>
            <Link
              className="flex justify-center underline text-white text-xs"
              to="/"
            >
              MUST CONTACT FOR PRICING.
            </Link>
          </div>
          <button className="bg-gradient-to-t from-[#B76FFF] to-[#6B37FF] to-50% text-white text-xs px-3 py-1 rounded-[4px] flex justify-center mx-auto mt-5">
            Apply for Marketing
          </button>
        </div>
        <div>
          <div className="bg-[#1D1A23] border border-[#616161] rounded-xl px-3 py-4 h-[415px]">
            <p className="text-center text-white text-xs">Listings</p>
            <img className="mx-auto my-14" src={Earth} alt="" />
            <p className="text-xs text-center text-white">
              Need help getting listed on CMC, CG, Crypto.com, or Trending?
            </p>
            <p className="text-xs text-center text-white my-5">
              Contact us via email, we can help you!
            </p>
            <Link className="flex justify-center text-white text-xs" to="/">
              marketing@sonata.network
            </Link>
          </div>
          <button className="bg-gradient-to-t from-[#B76FFF] to-[#6B37FF] to-50% text-white text-xs px-3 py-1 rounded-[4px] flex justify-center mx-auto mt-5">
            Talk on Telegram
          </button>
        </div>
        <div>
          <div className="bg-[#1D1A23] border border-[#616161] rounded-xl px-3 py-4 h-[415px]">
            <p className="text-center text-white text-xs">
              Utility Development
            </p>
            <img className="mx-auto my-14" src={Tools} alt="" />
            <p className="text-xs text-center text-white">
              Need developers that specialize in anything from smart contracts
              to VR game development?
            </p>
            <p className="text-xs text-center text-white my-5">
              Sonata can connect you to experienced devs!
            </p>
            <Link
              className="flex justify-center underline text-white text-xs"
              to="/"
            >
              MUST CONTACT FOR PRICING.
            </Link>
          </div>
          <button className="bg-gradient-to-t from-[#B76FFF] to-[#6B37FF] to-50% text-white text-xs px-3 py-1 rounded-[4px] flex justify-center mx-auto mt-5">
            COMING SOON
          </button>
        </div>
      </div>

      <div className="mt-20 text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="border bg-[#1D1A23] border-[#616161] p-3 rounded-lg h-32">
          <p className="text-xs font-bold mb-2">Token Locker</p>
          <p className="text-xs">Lock your liquidity on Sonata.</p>
        </div>
        <div className="border bg-[#1D1A23] border-[#616161] p-3 rounded-lg h-32">
          <p className="text-xs font-bold mb-2">Farms</p>
          <p className="text-xs">Create a new Farm on Sonata.</p>
        </div>
        <div className="border bg-[#1D1A23] border-[#616161] p-3 rounded-lg h-32">
          <p className="text-xs font-bold mb-2">Opera</p>
          <p className="text-xs">
            Want to launch a quick memecoin?
            <br />
            <br />
            Borrow up to 3 ETH to fund your new liquidity pool, no strings
            attached.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
