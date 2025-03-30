import './Cart.css'

const Cart = ({cart}) => {
    return (
        <div>
            <h3>
            Cart: {cart.length}
            </h3>
            <div className="cart-container">
                {cart.map(bot=> <img src={bot.img} alt="" /> )}
            </div>
        </div>
    );
};

export default Cart;