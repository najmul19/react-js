import { useEffect, useState } from "react";
import Player from "../Player/Player";


const Players = () => {
    const [players, setPlayer] = useState([]);
    useEffect(()=>{
        fetch('players.json')
        .then((res=>res.json()))
        .then(data=>setPlayer(data))
    },[])
    const handlePlayers=(player)=>{
        // console.log(player)
        const newPlayer = [...players, player];
        setPlayer(newPlayer)
    }
    return (
        <div className="w-10/12 mx-auto pt-10">
            <div className="flex justify-between items-center">
                <h2 className="text-black text-2xl font-bold">Available Players</h2>
                <div className="flex flex-row gap-2 border-2 p-2 rounded-md">
                <button onClick={()=>handlePlayers(players)} className="border-2 p-1 rounded-md">Available</button><button>Selected</button>
                </div>
            </div>
            {/* <Player></Player> */}
            
            {
               
               players.map((play,indx)=> (
                    <Player
                    key={indx}
                        player={play}
                    >

                    </Player>
               ))
            }
        </div>
    );
};

export default Players;