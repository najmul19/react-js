import PropTypes from 'prop-types'
import './Cart.css'

const Cart = ({cart, handleRemoveFromCart}) => {
    return (
        <div>
            <h3>
            Cart: {cart.length}
            </h3>
            <div className="cart-container">
                {cart.map(bot=>
                    
                    <div key={bot.id}>
                         <img  src={bot.img} alt="" /> 
                        <button onClick={()=>handleRemoveFromCart(bot.id)}>Remove</button>
                    </div>
                   
                    )}
            </div>
        </div>
    );
};

Cart.prototype={
    cart: PropTypes.array.isRequired,
    handleRemoveFromCart: PropTypes.func.isRequired,
}

export default Cart;