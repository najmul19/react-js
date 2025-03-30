import { useEffect } from "react";
import Bottle from "../Bottle/bottle";
import { useState } from "react";
import "./Bottles.css";
import { addToLS, getStoredCart } from "../../Utilities/localstorage";
import Cart from "../Cart/Cart";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  //  load cart from LS

  useEffect(() => {
    console.log("called the useEffect", bottles.length);
    if (bottles.length) {
      const getStoredCartId = getStoredCart();
    //   console.log(getStoredCartId, bottles);

    const saveCart=[];
      for( const id of getStoredCartId){
        console.log(id)
        const bot = bottles.find(bottle=>bottle.id===id)
        if(bot){
            saveCart.push(bot);
        }
      }
      console.log('saved: ',saveCart)
      setCart(saveCart)
    }
  }, [bottles]);

  const handleAddToCart = (bottle) => {
    // console.log(bottle)
    const newCart = [...cart, bottle];
    setCart(newCart);
    addToLS(bottle.id);
  };
  return (
    <div>
      <h2>Bottles Available:{bottles.length} </h2>
      {/* <h4>Cart: {cart.length} </h4> */}
        <Cart
            cart={cart}
        >
        </Cart>
      <div className="bottle-container">
        {bottles.map((bot) => (
          <Bottle
            key={bot.id}
            bottle={bot}
            handleAddToCart={handleAddToCart}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
