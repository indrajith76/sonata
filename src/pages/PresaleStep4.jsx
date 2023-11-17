import { Link } from "react-router-dom";
import num1 from "../../public/images/icons/num1.png";
import num2 from "../../public/images/icons/num2.png";
import num3 from "../../public/images/icons/num3.png";
import num4 from "../../public/images/icons/num4.png";

const PresaleStep4 = () => {
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
            className={`${idx <= 2 && "grayscale"} w-32 flex items-start gap-2`}
          >
            <img className="mt-[1px]" src={step.imgNum} alt="" />
            <div>
              <p
                className={`${
                  idx <= 2 ? "text-gray-500" : "text-white"
                }  text-xs font-bold`}
              >
                {step.title}
              </p>
              <p className="text-[#AF71FF] text-[10px] mt-1">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mb-10 overflow-scroll no-scrollbar">
        <table className="relative">
          <tbody className="text-xs">
            <tr className="border border-[#24242485] border-l-0 border-r-0">
              <td className="pl-2 text-[#CAB8FF] py-4 w-[190px]">
                Sale Method
              </td>
              <td className="md:w-[504px] lg:w-[554px] py-4 pl-4 bg-[#12101C] text-white">
                Public
              </td>
            </tr>
            <tr className="border border-[#24242485] border-l-0 border-r-0">
              <td className="pl-2 text-[#CAB8FF] py-4 w-[190px]">Token Name</td>
              <td className="md:w-[504px] lg:w-[554px] py-4 pl-4 bg-[#12101C] text-white">
                TorrenToken
              </td>
            </tr>
            <tr className="border border-[#24242485] border-l-0 border-r-0">
              <td className="pl-2 text-[#CAB8FF] py-4 w-[190px]">
                Token Symbol
              </td>
              <td className="md:w-[504px] lg:w-[554px] py-4 pl-4 bg-[#12101C] text-white">
                TORREN
              </td>
            </tr>
            <tr className="border border-[#24242485] border-l-0 border-r-0">
              <td className="pl-2 text-[#CAB8FF] py-4 w-[190px]">
                Token Decimals
              </td>
              <td className="md:w-[504px] lg:w-[554px] py-4 pl-4 bg-[#12101C] text-white">9</td>
            </tr>
            <tr className="border border-[#24242485] border-l-0 border-r-0">
              <td className="pl-2 text-[#CAB8FF] py-4 w-[190px]">
                Token Address
              </td>
              <td className="md:w-[504px] lg:w-[554px] py-4 px-4 bg-[#12101C] text-white">
                0xe8082368Ef6428396A86b53bFaF4915b6d69Fe2f
              </td>
            </tr>
            <tr className="border border-[#24242485] border-l-0 border-r-0">
              <td className="pl-2 text-[#CAB8FF] py-4 w-[190px]">
                Token Supply
              </td>
              <td className="md:w-[504px] lg:w-[554px] py-4 pl-4 bg-[#12101C] text-white">
                100,000,000,000
              </td>
            </tr>
            <tr className="border border-[#24242485] border-l-0 border-r-0">
              <td className="pl-2 text-[#CAB8FF] py-4 w-[190px]">
                Tokens Whitelisted
              </td>
              <td className="md:w-[504px] lg:w-[554px] py-4 pl-4 bg-[#12101C] text-white">
                5,000,000,000 (5%)
              </td>
            </tr>
            <tr className="border border-[#24242485] border-l-0 border-r-0">
              <td className="pl-2 text-[#CAB8FF] py-4 w-[190px]">
                Raise Start Time
              </td>
              <td className="md:w-[504px] lg:w-[554px] py-4 pl-4 bg-[#12101C] text-white">
                00:1:0:0 UTC
              </td>
            </tr>
            <tr className="border border-[#24242485] border-l-0 border-r-0">
              <td className="pl-2 text-[#CAB8FF] py-4 w-[190px]">Soft Cap</td>
              <td className="md:w-[504px] lg:w-[554px] py-4 pl-4 bg-[#12101C] text-white">
                10 ETH
              </td>
            </tr>
            <tr className="border border-[#24242485] border-l-0 border-r-0">
              <td className="pl-2 text-[#CAB8FF] py-4 w-[190px]">Hard Cap</td>
              <td className="md:w-[504px] lg:w-[554px] py-4 pl-4 bg-[#12101C] text-white">
                20 ETH
              </td>
            </tr>
            <tr className="border border-[#24242485] border-l-0 border-r-0">
              <td className="pl-2 text-[#CAB8FF] py-4 w-[190px]">
                Minimum/Maximum Buy
              </td>
              <td className="md:w-[504px] lg:w-[554px] py-4 pl-4 bg-[#12101C] text-white">
                0.1 ETH min / 1 ETH max
              </td>
            </tr>
            <tr className="border border-[#24242485] border-l-0 border-r-0">
              <td className="pl-2 text-[#CAB8FF] py-4 w-[190px]">
                Minimum/Maximum Buy
              </td>
              <td className="md:w-[504px] lg:w-[554px] py-4 pl-4 bg-[#12101C] text-white">
                0.1 ETH min / 1 ETH max
              </td>
            </tr>
          </tbody>

          <div className="border border-[#292929] absolute top-0 bottom-0 right-0 rounded-lg md:w-[504px] lg:w-[554px]"></div>
        </table>
      </div>

      <Link
        to="/presale-all-done"
        className="bg-gradient-to-t from-[#B76FFF] to-[#6B37FF] to-50% text-white text-xs px-11 py-2 rounded-[4px] mx-auto mb-8 inline-block"
      >
        Submit
      </Link>
    </div>
  );
};

export default PresaleStep4;
