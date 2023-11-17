import { Link } from "react-router-dom";
import num1 from "../../public/images/icons/num1.png";
import num2 from "../../public/images/icons/num2.png";
import num3 from "../../public/images/icons/num3.png";
import num4 from "../../public/images/icons/num4.png";

const PresaleStep3 = () => {
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
            className={`${idx <= 1 && "grayscale"} w-32 flex items-start gap-2`}
          >
            <img className="mt-[1px]" src={step.imgNum} alt="" />
            <div>
              <p
                className={`${
                  idx <= 1 ? "text-gray-500" : "text-white"
                }  text-xs font-bold`}
              >
                {step.title}
              </p>
              <p className="text-[#AF71FF] text-[10px] mt-1">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="my-7 grid lg:grid-cols-2 gap-5 lg:w-[798px]">
        <div>
          <p className="mb-2 text-white text-xs font-bold leading-5">
            Logo URL
          </p>
          <input
            type="text"
            className="bg-[#1D1A23] text-white border border-[#616161] h-8 wful lg:w-[369px] rounded text-xs px-3"
            name=""
            placeholder="Link"
          />
          <p className="text-[#FFF500] text-xs mt-2">
            Softcap must be {">="} 25% of Hardcap!
          </p>
          <p className="text-white text-xs italic mt-1">https://imgbb.com</p>
        </div>

        <div>
          <p className="mb-2 text-white text-xs font-bold leading-5">Website</p>
          <input
            type="text"
            className="bg-[#1D1A23] text-white border border-[#616161] h-8 wful lg:w-[369px] rounded text-xs px-3"
            name=""
            placeholder="Link"
          />
        </div>
        <div>
          <p className="mb-2 text-white text-xs font-bold leading-5">
            Facebook
          </p>
          <input
            type="text"
            className="bg-[#1D1A23] text-white border border-[#616161] h-8 wful lg:w-[369px] rounded text-xs px-3"
            name=""
            placeholder="Link"
          />
        </div>
        <div>
          <p className="mb-2 text-white text-xs font-bold leading-5">Twitter</p>
          <input
            type="text"
            className="bg-[#1D1A23] text-white border border-[#616161] h-8 wful lg:w-[369px] rounded text-xs px-3"
            name=""
            placeholder="Link"
          />
        </div>
        <div>
          <p className="mb-2 text-white text-xs font-bold leading-5">Github</p>
          <input
            type="text"
            className="bg-[#1D1A23] text-white border border-[#616161] h-8 wful lg:w-[369px] rounded text-xs px-3"
            name=""
            placeholder="Link"
          />
        </div>
        <div>
          <p className="mb-2 text-white text-xs font-bold leading-5">
            Telegram
          </p>
          <input
            type="text"
            className="bg-[#1D1A23] text-white border border-[#616161] h-8 wful lg:w-[369px] rounded text-xs px-3"
            name=""
            placeholder="Link"
          />
        </div>
        <div>
          <p className="mb-2 text-white text-xs font-bold leading-5">
            Instagram
          </p>
          <input
            type="text"
            className="bg-[#1D1A23] text-white border border-[#616161] h-8 wful lg:w-[369px] rounded text-xs px-3"
            name=""
            placeholder="Link"
          />
        </div>
        <div>
          <p className="mb-2 text-white text-xs font-bold leading-5">Discord</p>
          <input
            type="text"
            className="bg-[#1D1A23] text-white border border-[#616161] h-8 wful lg:w-[369px] rounded text-xs px-3"
            name=""
            placeholder="Link"
          />
        </div>
        <div>
          <p className="mb-2 text-white text-xs font-bold leading-5">Reddit</p>
          <input
            type="text"
            className="bg-[#1D1A23] text-white border border-[#616161] h-8 wful lg:w-[369px] rounded text-xs px-3"
            name=""
            placeholder="Link"
          />
        </div>
        <div>
          <p className="mb-2 text-white text-xs font-bold leading-5">
            Youtube Video
          </p>
          <input
            type="text"
            className="bg-[#1D1A23] text-white border border-[#616161] h-8 wful lg:w-[369px] rounded text-xs px-3"
            name=""
            placeholder="Link"
          />
          <p className="text-[#AF71FF] text-xs mt-2">
            Enter YouTube video URL (not channel link)
          </p>
        </div>
        <div className="lg:col-span-2">
          <p className="mb-2 text-white text-xs font-bold leading-5">
            Project/Token Description
          </p>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            className="bg-[#1D1A23] border rounded w-full border-[#616161]"
          ></textarea>
        </div>
      </div>

      <Link
        to="/presale-step-4"
        className="bg-gradient-to-t from-[#B76FFF] to-[#6B37FF] to-50% text-white text-xs px-11 py-2 rounded-[4px] mx-auto mt-6 mb-8 inline-block"
      >
        Continue
      </Link>
    </div>
  );
};

export default PresaleStep3;
