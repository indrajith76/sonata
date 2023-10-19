import { Link } from "react-router-dom";
import Header from "../components/Header";
import { BiArrowBack, BiSolidShield } from "react-icons/bi";
import { RxTarget } from "react-icons/rx";
import TokenPageLogo from "/public/images/tokenPageLogo.png";

const TokenPages = () => {
  return (
    <div className=" text-white">
      <Header />
      <div>
        <div className="tokenPageTopBg h-[158px] pl-5 pt-4">
          <Link to="/" className="flex text-white items-center gap-2 text-sm">
            <BiArrowBack />
            Back
          </Link>
        </div>

        <div className="flex flex-col items-center lg:items-start lg:flex-row border border-[#3A3A3A] rounded-t-lg border-b-0 2xl:h-screen pb-20 lg:pb-0">
          <div className="lg:pl-9 pt-10 w-[90%] lg:w-[70%] relative">
            <img
              src={TokenPageLogo}
              className="w-[93px] h-[93px] absolute -top-16 left-9"
              alt=""
            />
            <div className="flex justify-between items-center">
              <h1 className="text-3xl md:text-[36px] font-medium">BitSynth</h1>
              <div className="flex gap-3">
                <button className="flex items-center gap-1 text-sm bg-[#1D1A27] px-4 py-1 rounded-md">
                  <BiSolidShield className="text-base" />
                  KYC
                </button>
                <button className="flex items-center gap-1 text-sm bg-[#1D1A27] px-4 py-1 rounded-md">
                  <RxTarget className="text-base" />
                  AUDIT
                </button>
              </div>
            </div>
            <p className="text-[14px] leading-[21px] mb-8 mt-4">
              Bitsynth is the first atomic liquid staking protocol briding
              Ethereum and Bitcoin together. The following sentences are purely
              for filler text because this is only a mockup. In an ido, a
              project or startup looking to raise funds for its cryptocurrency
              project offers its tokens for sale directly on a dex, typically
              through a liquidity pool. Investors can participate in the ido by
              providing liquidity to the pool in exchange for the projects
              tokens.
            </p>
            <div className="mb-20 overflow-scroll">
              <table className="relative">
                <tbody className="text-xs">
                  <tr className="border border-[#24242485] border-l-0 border-r-0">
                    <td className="pl-2 text-[#CAB8FF] py-4 w-[190px]">
                      Raise Address
                    </td>
                    <td className="w-[554px] py-4 pl-4 bg-[#12101C]">
                      0xe8082368Ef6428396A86b53bFaF4915b6d69Fe2f
                    </td>
                  </tr>
                  <tr className="border border-[#24242485] border-l-0 border-r-0">
                    <td className="pl-2 text-[#CAB8FF] py-4 w-[190px]">
                      Token Name
                    </td>
                    <td className="w-[554px] py-4 pl-4 bg-[#12101C]">
                      BitSynth
                    </td>
                  </tr>
                  <tr className="border border-[#24242485] border-l-0 border-r-0">
                    <td className="pl-2 text-[#CAB8FF] py-4 w-[190px]">
                      Token Symbol
                    </td>
                    <td className="w-[554px] py-4 pl-4 bg-[#12101C]">SYNTH</td>
                  </tr>
                  <tr className="border border-[#24242485] border-l-0 border-r-0">
                    <td className="pl-2 text-[#CAB8FF] py-4 w-[190px]">
                      Token Decimals
                    </td>
                    <td className="w-[554px] py-4 pl-4 bg-[#12101C]">9</td>
                  </tr>
                  <tr className="border border-[#24242485] border-l-0 border-r-0">
                    <td className="pl-2 text-[#CAB8FF] py-4 w-[190px]">
                      Token Address
                    </td>
                    <td className="w-[554px] py-4 pl-4 bg-[#12101C]">
                      0xe8082368Ef6428396A86b53bFaF4915b6d69Fe2f
                    </td>
                  </tr>
                  <tr className="border border-[#24242485] border-l-0 border-r-0">
                    <td className="pl-2 text-[#CAB8FF] py-4 w-[190px]">
                      Token Supply
                    </td>
                    <td className="w-[554px] py-4 pl-4 bg-[#12101C]">
                      100,000,000,000
                    </td>
                  </tr>
                  <tr className="border border-[#24242485] border-l-0 border-r-0">
                    <td className="pl-2 text-[#CAB8FF] py-4 w-[190px]">
                      Tokens Whitelisted
                    </td>
                    <td className="w-[554px] py-4 pl-4 bg-[#12101C]">
                      5,000,000,000 (5%)
                    </td>
                  </tr>
                  <tr className="border border-[#24242485] border-l-0 border-r-0">
                    <td className="pl-2 text-[#CAB8FF] py-4 w-[190px]">
                      Raise Start Time
                    </td>
                    <td className="w-[554px] py-4 pl-4 bg-[#12101C]">
                      00:1:0:0 UTC
                    </td>
                  </tr>
                </tbody>

                <div className="border border-[#292929] absolute top-0 bottom-0 right-0 rounded-lg w-[554px]"></div>
              </table>
            </div>
          </div>

          <div className="lg:w-[30%] relative">
            <div className="bg-[#12101C] text-white w-[328px] border border-[#292929] p-4 rounded-xl lg:absolute right-5 -top-16">
              <div className="flex items-center justify-between mb-9">
                <p className="text-sm">Sale ends in</p>
                <div className="flex gap-1 text-[10px]">
                  <p className="bg-[#24193C] rounded-sm px-1 py-[2px]">2d</p>
                  <p className="bg-[#24193C] rounded-sm px-1 py-[2px]">6h</p>
                  <p className="bg-[#24193C] rounded-sm px-1 py-[2px]">22m</p>
                </div>
              </div>
              <div className="flex justify-between mb-3">
                <p className="text-[13px] font-medium">
                  Amount <span className="text-[#616161]">(max: 3 ETH)</span>
                </p>
                <p className="text-[11px] text-[#616161]">7.51 ETH Available</p>
              </div>
              <div className="relative mb-3">
                <input
                  type="text"
                  name=""
                  id=""
                  className="bg-[#1D1A27] h-9 w-full px-3 rounded-lg text-xs"
                  value="0.5 ETH"
                  disabled
                />
                <p className="absolute top-0 bottom-0 my-auto flex items-center right-3 text-[#A67CFF] text-xs">
                  MAX
                </p>
              </div>
              <div className="bg-[#2D2D2D] h-1 rounded-lg overflow-hidden mb-3">
                <div className="bg-gradient-to-l from-[#E752FF] to-[#8D47FF] w-[70%] h-2"></div>
              </div>
              <div className="text-xs">
                <div className="flex justify-between items-center mb-5">
                  <p>27.5 ETH</p>
                  <p>30 ETH</p>
                </div>
                <div className="flex justify-between items-center mb-5">
                  <p>Starting Price for 0.1 ETH</p>
                  <p>10,000 SYNTH</p>
                </div>
                <div className="flex justify-between items-center mb-5">
                  <p>
                    Current Price{" "}
                    <span className="bg-[#24193C] text-[#A67CFF] text-[10px] rounded-sm px-1 py-[2px]">
                      +23.44%
                    </span>
                  </p>
                  <p>8,341 SYNTH</p>
                </div>
                <div className="flex justify-between items-center mb-5">
                  <p>Participants</p>
                  <p>239</p>
                </div>
              </div>
              <button className="bg-[#6D39FF] w-full rounded-md text-md py-1 mb-3">
                BUY $SYNTH
              </button>
              <button className="bg-[#332A4F] border border-[#4B4B4B] w-full rounded-md text-md py-1 mb-3">
                Show Chart
              </button>
              <p className="mt-10 text-center text-xs mb-4">
                You are NOT whitelisted for this token.
              </p>
              <button className="bg-[#6D39FF] w-[80%] flex  justify-center mx-auto rounded-md text-md py-1 mb-3">
                Purchase Whitelist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenPages;
