import { useEffect } from "react";
import Bottle from "../Bottle/bottle";
import { useState } from "react";
import './Bottles.css'

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([])

  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);
  const handleAddToCart = bottle => {
    // console.log(bottle)
    const newCart = [...cart, bottle]
    setCart(newCart)
  }
  return (
    <div>
      <h2>Bottles Available:{bottles.length} </h2>
      <h4>Cart: {cart.length} </h4>
      <div className="bottle-container">
        {bottles.map((bot) => (
          <Bottle 
          
          key={bot.id} bottle={bot}
          handleAddToCart={handleAddToCart}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
