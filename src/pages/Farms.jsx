import logo1 from "/public/images/farms/logo1.png";
import logo2 from "/public/images/farms/logo2.png";
import logo3 from "/public/images/farms/logo3.png";
import logo4 from "/public/images/farms/logo4.png";
import logo5 from "/public/images/farms/logo5.png";
import logo6 from "/public/images/farms/logo6.png";
import img1 from "/public/images/farms/img1.png";
import img2 from "/public/images/farms/img2.png";
import img3 from "/public/images/farms/img3.png";
import img4 from "/public/images/farms/img4.png";
import img5 from "/public/images/farms/img5.png";
import img6 from "/public/images/farms/img6.png";


const Farms = () => {
  const datas = [
    {
      id: 1,
      img: img1,
      logo: logo1,
    },
    {
      id: 2,
      img: img2,
      logo: logo2,
    },
    {
      id: 3,
      img: img3,
      logo: logo3,
    },
    {
      id: 4,
      img: img4,
      logo: logo4,
    },
    {
      id: 5,
      img: img5,
      logo: logo5,
    },
    {
      id: 6,
      img: img6,
      logo: logo6,
    },
  ];
  return (
    <div className="bg-[#14121A] lg:ml-5 px-8 py-8 2xl:h-screen">
      <div className="md:flex justify-between items-end">
        <div>
          <h3 className="text-white text-2xl font-medium">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#DC76FF] to-[#FF6C3E]">
              Sona
            </span>
            Farms
          </h3>
          <p className="text-xs text-white mb-6">
            Earn SONA fees with{" "}
            <span className="text-[#BE34FF]">SONA staking</span>{" "}
          </p>
          <p className="text-xs text-gray-300">20 pools found on ETH</p>
        </div>
        <div>
          <h6 className="text-white text-sm mb-2 text-right font-medium">
            TVL $10.42M
          </h6>
          <button className="bg-gradient-to-t from-[#B76FFF] to-[#6B37FF] to-50% text-white text-xs px-3 py-1 rounded-[4px]">
            Create a New Pool
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 my-10">
        {datas.map((data) => (
          <div key={data.id} className="bg-[#131117] text-white rounded-xl overflow-hidden">
            <div className="bg-[#1D1A23]">
              <div>
                <img className="w-full" src={data.img} alt="" />
              </div>
              <div className="text-white px-3 py-2">
                <p className="text-xs text-right">NO REWARDS</p>
                <p className="text-base font-bold mb-1">ANON</p>
                <p className="text-xs font-semibold mb-3">
                  Stake ETH to earn ANON
                </p>
                <div className="text-xs flex justify-between">
                  <p>min: 0.01 ETH</p>
                  <p className="flex items-center">
                    <img className="w-4" src="/images/icons/lock.png" alt="" />{" "}
                    24hrs
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-between px-3 mt-3 mb-2">
              <div>
                <p className="text-xs">TVL</p>
                <p className="text-lg font-bold">$6.2M</p>
              </div>
              <div className="text-right">
                <p className="text-xs">APR</p>
                <p className="text-lg font-bold">12%</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Farms;
