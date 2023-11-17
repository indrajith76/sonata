import { Link } from "react-router-dom";
import num1 from "../../public/images/icons/num1.png";
import num2 from "../../public/images/icons/num2.png";
import num3 from "../../public/images/icons/num3.png";
import num4 from "../../public/images/icons/num4.png";

const PresaleStep2 = () => {
  const steps = [
    {
      title: "Verify",
      imgNum: num1,
      desc: "Enter the token address and verify",
    },
    {
      title: "Provide Info",
      imgNum: num2,
      desc: "Enter all details and parameters about your presale",
    },
    {
      title: "Add More Info",
      imgNum: num3,
      desc: "Add additional info and let people know who you are",
    },
    {
      title: "All Done!",
      imgNum: num4,
      desc: "Review and launch your presale",
    },
  ];
  return (
    <div className="bg-[#14121A] lg:ml-5 px-8 py-8 h-full">
      <h3 className="text-white text-2xl font-bold mb-5">Create a Presale</h3>

      <div className="flex flex-wrap gap-6 mb-16">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className={`${
              idx === 0 && "grayscale"
            } w-32 flex items-start gap-2`}
          >
            <img className="mt-[1px]" src={step.imgNum} alt="" />
            <div>
              <p
                className={`${
                  idx === 0 ? "text-gray-500" : "text-white"
                }  text-xs font-bold`}
              >
                {step.title}
              </p>
              <p className="text-[#AF71FF] text-[10px] mt-1">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="mb-2 text-white text-xs font-bold leading-5">
        Presale Rate
      </p>
      <input
        type="text"
        className="bg-[#1D1A23] text-white border border-[#616161] h-8 w-full lg:w-[369px] rounded text-xs px-3"
        name=""
        placeholder="0"
      />
      <p className="text-[#AF71FF] text-xs mt-2">
        If I spend 1 USDC how many tokens will I receive?
      </p>

      <div className="mt-8">
        <p className="text-xs text-white font-bold leading-5 mb-2">Whitelist</p>
        <ul className="text-white flex gap-3">
          <li className="flex items-center">
            <input
              type="radio"
              name="whitelist"
              className="accent-white w-[10px] mb-[1px]"
              id="Disable"
            />
            <label htmlFor="Disable" className="text-xs ml-1">
              Disable
            </label>
          </li>
          <li className="flex items-center">
            <input
              type="radio"
              name="whitelist"
              className="accent-white w-[10px] mb-[1px]"
              id="Enable"
            />
            <label htmlFor="Enable" className="text-xs ml-1">
              Enable
            </label>
          </li>
        </ul>
        <p className="text-[#AF71FF] text-xs mt-1">
          You can enable/disable whitelist anytime.
        </p>
      </div>

      <div className="my-7 grid lg:grid-cols-2 gap-5">
        <div>
          <p className="mb-2 text-white text-xs font-bold leading-5">
            Softcap (USDC)
          </p>
          <input
            type="text"
            className="bg-[#1D1A23] text-white border border-[#616161] h-8 w-full lg:w-[369px] rounded text-xs px-3"
            name=""
            placeholder="0"
          />
          <p className="text-[#AF71FF] text-xs mt-2">
            Softcap must be {">="} 25% of Hardcap!
          </p>
        </div>

        <div>
          <p className="mb-2 text-white text-xs font-bold leading-5">
            Hardcap (USDC)
          </p>
          <input
            type="text"
            className="bg-[#1D1A23] text-white border border-[#616161] h-8 w-full lg:w-[369px] rounded text-xs px-3"
            name=""
            placeholder="0"
          />
        </div>

        <div>
          <p className="mb-2 text-white text-xs font-bold leading-5">
            Minimum buy (USDC)
          </p>
          <input
            type="text"
            className="bg-[#1D1A23] text-white border border-[#616161] h-8 w-full lg:w-[369px] rounded text-xs px-3"
            name=""
            placeholder="0"
          />
          <p className="text-[#AF71FF] text-xs mt-2">
            Min buy must be less than max buy
          </p>
        </div>
        <div>
          <p className="mb-2 text-white text-xs font-bold leading-5">
            Maximum buy (USDC)
          </p>
          <input
            type="text"
            className="bg-[#1D1A23] text-white border border-[#616161] h-8 w-full lg:w-[369px] rounded text-xs px-3"
            name=""
            placeholder="0"
          />
        </div>
        <div>
          <p className="mb-2 text-white text-xs font-bold leading-5">
            Refund type
          </p>
          <select
            name=""
            id=""
            className="bg-[#1D1A23] text-white border border-[#616161] h-8 w-[150px] rounded text-xs px-3"
          >
            <option value="">Burn</option>
            <option value="">Burn</option>
          </select>
        </div>
        <div>
          <p className="mb-2 text-white text-xs font-bold leading-5">Router</p>
          <select
            name=""
            id=""
            className="bg-[#1D1A23] text-white border border-[#616161] h-8 rounded text-xs px-3"
          >
            <option value="">--Select Router Exchange--</option>
            <option value="">--Select Router Exchange--</option>
          </select>
        </div>

        <div>
          <p className="mb-2 text-white text-xs font-bold leading-5">
            Liquidity (%)
          </p>
          <input
            type="text"
            className="bg-[#1D1A23] text-white border border-[#616161] h-8 w-full lg:w-[369px] rounded text-xs px-3"
            name=""
            placeholder="0"
          />
          <p className="text-[#AF71FF] text-xs mt-2">
            Liquidity must be greater than 50%
          </p>
        </div>

        <div>
          <p className="mb-2 text-white text-xs font-bold leading-5">
            Listing Rate
          </p>
          <input
            type="text"
            className="bg-[#1D1A23] text-white border border-[#616161] h-8 w-full lg:w-[369px] rounded text-xs px-3"
            name=""
            placeholder="0"
          />
          <p className="text-[#AF71FF] text-xs mt-2">1 USDC = 0 TOKENS</p>
        </div>
      </div>

      <div className="pl-5 mb-10">
        <ul className="list-disc">
          <li className="text-xs font-medium text-[#FFF500]">
            Enter the percentage of raised funds that should be allocated to
            Liquidity on (Min 51%, Max 100%)
          </li>
          <li className="text-xs font-medium text-[#FFF500] mt-1">
            If I spend 1 USDC on how many tokens will I receive? Usually this
            amount is lower than presale rate to allow for a higher listing
            price on
          </li>
        </ul>
      </div>

      <p className="mb-2 text-white text-xs font-bold leading-5">
        Select Start Time and End Time
      </p>

      <div className="grid lg:grid-cols-2 gap-x-5 gap-y-10">
        <div>
          <p className="mb-2 text-white text-xs font-bold leading-5">
            Start time (UTC)
          </p>

          <select
            name=""
            id=""
            className="bg-[#1D1A23] text-white border border-[#616161] h-8 rounded text-xs px-3 w-full lg:w-[232px]"
          >
            <option value="">Select Date</option>
            <option value="">Select Date</option>
          </select>
        </div>
        <div>
          <p className="mb-2 text-white text-xs font-bold leading-5">
            End time (UTC)
          </p>

          <select
            name=""
            id=""
            className="bg-[#1D1A23] text-white border border-[#616161] h-8 rounded text-xs px-3 w-full lg:w-[232px]"
          >
            <option value="">Select Date</option>
            <option value="">Select Date</option>
          </select>
        </div>
        <div>
          <p className="mb-2 text-white text-xs font-bold leading-5">
            Liquidity Lockup Time (Days)
          </p>
          <input
            type="text"
            className="bg-[#1D1A23] text-white border border-[#616161] h-8 w-full lg:w-[369px] rounded text-xs px-3"
            name=""
            placeholder="0"
          />
        </div>
      </div>

      <Link
        to="/presale-step-3"
        className="bg-gradient-to-t from-[#B76FFF] to-[#6B37FF] to-50% text-white text-xs px-11 py-2 rounded-[4px] mx-auto mt-6 mb-8 inline-block"
      >
        Continue
      </Link>
    </div>
  );
};

export default PresaleStep2;
