import { Link } from "react-router-dom";
import num1 from "../../public/images/icons/num1.png";
import num2 from "../../public/images/icons/num2.png";
import num3 from "../../public/images/icons/num3.png";
import num4 from "../../public/images/icons/num4.png";

const PresaleStep1 = () => {
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
    <div className="bg-[#14121A] lg:ml-5 px-3 lg:px-8 py-8 h-full">
      <h3 className="text-white text-2xl font-bold mb-5">Create a Presale</h3>

      <div className="flex flex-wrap gap-6 mb-16">
        {steps.map((step, idx) => (
          <div key={idx} className="w-32 flex items-start gap-2">
            <img className="mt-[1px]" src={step.imgNum} alt="" />
            <div>
              <p className="text-white text-xs font-bold">{step.title}</p>
              <p className="text-[#AF71FF] text-[10px] mt-1">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="mb-2 text-white text-xs font-bold leading-5">
        Token Address
      </p>
      <input
        type="text"
        className="bg-[#1D1A23] border border-[#616161] h-8 w-full md:w-[369px] rounded text-xs px-3"
        name=""
        placeholder="Example: 0x26fH2..."
      />
      <p className="text-[#AF71FF] text-xs mt-2">Pool creation fee: 0.1 ETH</p>

      <div className="mt-8">
        <p className="text-xs text-white font-bold leading-5 mb-2">Currency</p>
        <ul className="text-white">
          <li className="flex items-center mb-3">
            <input
              type="radio"
              name="currency"
              className="accent-white w-[10px] mb-[1px]"
              id="eth"
            />
            <label htmlFor="eth" className="text-xs ml-1">
              ETH
            </label>
          </li>
          <li className="flex items-center mb-3">
            <input
              type="radio"
              name="currency"
              className="accent-white w-[10px] mb-[1px]"
              id="USDC"
            />
            <label htmlFor="USDC" className="text-xs ml-1">
              USDC
            </label>
          </li>
          <li className="flex items-center mb-3">
            <input
              type="radio"
              name="currency"
              className="accent-white w-[10px] mb-[1px]"
              id="USDT"
            />
            <label htmlFor="USDT" className="text-xs ml-1">
              USDT
            </label>
          </li>
        </ul>
        <p className="text-[#AF71FF] text-xs mt-2">
          Users will pay for your coin in ETH
        </p>
      </div>
      <div className="mt-8">
        <p className="text-xs text-white font-bold leading-5 mb-2">
          Fee Options
        </p>
        <ul className="text-white">
          <li className="flex items-center mb-3">
            <input
              type="radio"
              name="freeOptions"
              className="accent-white w-[10px] mb-[1px]"
              id="recommended"
            />
            <label htmlFor="recommended" className="text-xs ml-1">
              5% of raised funds{" "}
              <span className="text-blue-500">(Recommended)</span>
            </label>
          </li>
          <li className="flex items-center mb-3">
            <input
              type="radio"
              name="freeOptions"
              className="accent-white  w-[10px] mb-[1px]"
              id="other"
            />
            <label htmlFor="other" className="text-xs ml-1">
              Other
            </label>
          </li>
        </ul>
      </div>
      <div className="mt-8">
        <p className="text-xs text-white font-bold leading-5 mb-2">
          Listing Options
        </p>
        <ul className="text-white">
          <li className="flex items-center mb-3">
            <input
              type="radio"
              name="listingOpt"
              className="accent-white w-[10px] mb-[1px]"
              id="autoListing"
            />
            <label htmlFor="autoListing" className="text-xs ml-1">
              Auto Listing
            </label>
          </li>
          <li className="flex items-center mb-3">
            <input
              type="radio"
              name="listingOpt"
              className="accent-white  w-[10px] mb-[1px]"
              id="manualListing"
            />
            <label htmlFor="manualListing" className="text-xs ml-1">
              Manual Listing
            </label>
          </li>
        </ul>
      </div>

      <p className="text-xs text-[#FFF500] mt-8">
        <strong>Note:</strong> When auto listing, when you finalize your token’s
        parameters it will be listed on DEX.
      </p>

      <Link
        to="/presale-step-2"
        className="bg-gradient-to-t from-[#B76FFF] to-[#6B37FF] to-50% text-white text-xs px-11 py-2 rounded-[4px] mx-auto mt-6 mb-8 inline-block"
      >
        Continue
      </Link>
    </div>
  );
};

export default PresaleStep1;
