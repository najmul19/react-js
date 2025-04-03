import flag from "../../assets/images/red-flag.png"
import person from "../../assets/images/user.png"

const Player = ({ player }) => {
  const { img, name, country, batting_style, price,category } = player;
  console.log(player);
  return (
    <div className="grid grid-cols-3 w-full">
      <div className="shadow-xl w-[400px] h-[550px] bg-gray-200 rounded-md ">
        <div className="flex flex-col  p-2 items-center justify-center">
          <div className="py-5">
            <img className="h-[350px] w-[350px] rounded-md" src={img} alt="" />
          </div>
          <div className="w-[350px] flex flex-col ">
            <div className="flex gap-2 items-center">
              <img className="h-[30px] w-[30px] " src={person} alt="" />
              <h2 className="font-bold text-black">{name}</h2>
            </div>
            <div className="flex justify-between items-center pt-2">
              <div className="flex gap-2">
              <img className="h-[30px] w-[30px]" src={flag} alt="" />
              <h2 className=" text-gray-500">{country}</h2>
              </div>
              <p className="px-2 py-1 rounded-md bg-gray-300">{category}</p>
            </div>
            
            <hr className=" my-2 border-t-2 border-gray-400" />

            <div className="flex justify-between items-center pb-1">
              <h2 className="font-bold text-black">{batting_style}</h2>
              <p className=" text-gray-500">{batting_style}</p>
            </div>
            <div className="flex justify-between items-center">
              <h2 className="font-bold text-black " >Price: {price}</h2>
              <button className="px-2 rounded-md border-2 border-gray-300  ">Choose Player</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
