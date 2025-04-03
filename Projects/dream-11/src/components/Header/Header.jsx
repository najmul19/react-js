import logo from "../../assets/images/logo.png";
import banner from '../../assets/images/banner-main.png'
import { useState } from "react";
const Header = () => {

    const [coin, setCoin] = useState(0);
    const handleCoin = (upCoin) => {

        setCoin(upCoin+coin);
    }
  return (
    <div className="w-10/12 mx-auto pt-10">
      <div className="flex justify-between items-center  ">
        <div>
          <img className="w-[50px] h-[50px]" src={logo} alt="" />
        </div>
        <div className="flex justify-between items-center gap-5">
          <ul className="flex justify-between items-center gap-5">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Fictures</a>
            </li>
            <li>
              <a href="">Team</a>
            </li>
            <li>
              <a href="">Schedule</a>
            </li>
          </ul>
          <div>
            <p className="font-bold text-black border-2 p-2 rounded-sm">{coin} coin</p>
        
          </div>
        </div>
      </div>
      <section>
        <div className="w-full h-[500px] bg-purple-950 rounded-xl flex flex-col justify-center items-center space-y-2">
            <img className="" src={banner} alt="" />
            <h2 className="text-[#FFFFFF] ">Assemble Your Ultimate Dream 11 Cricket Team</h2>
            <p className="text-[#ffffff92] ">Beyond Boundaries Beyond Limits</p>
            <button onClick={()=> handleCoin(6000000)} className="bg-yellow-400 text-black rounded-md p-2 border-2">Claim Free Credit</button>
        </div>
      </section>
    </div>
  );
};

export default Header;
