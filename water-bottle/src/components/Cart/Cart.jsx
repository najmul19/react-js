import PropTypes from 'prop-types'
import './Cart.css'

const Cart = ({cart}) => {
    return (
        <div>
            <h3>
            Cart: {cart.length}
            </h3>
            <div className="cart-container">
                {cart.map(bot=> <img key={bot.id} src={bot.img} alt="" /> )}
            </div>
        </div>
    );
};

Cart.prototype={
    cart: PropTypes.array.isRequired
}

export default Cart;