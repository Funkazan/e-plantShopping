import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, updateQuantity, removeItem } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const calculateTotalAmount = () => {
    return cart.reduce((total, item) => total + item.cost * item.quantity, 0).toFixed(2);
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  const handleContinueShopping = () => {
    if (onContinueShopping) {
      onContinueShopping();
    }
  };

  return (
    <div className="cart-container">
      <h2>Total Cart Amount: ${calculateTotalAmount()}</h2>
      {cart.map((item) => (
        <div key={item.name} className="cart-item">
          <img src={item.image} alt={item.name} className="cart-item-image" />
          <div className="cart-item-details">
            <div>{item.name}</div>
            <div>Price: ${item.cost}</div>
            <div>
              Quantity:
              <button onClick={() => handleDecrement(item)}>-</button>
              {item.quantity}
              <button onClick={() => handleIncrement(item)}>+</button>
            </div>
            <div>Subtotal: ${(item.cost * item.quantity).toFixed(2)}</div>
            <button onClick={() => handleRemove(item)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="cart-actions">
        <button onClick={handleContinueShopping}>Continue Shopping</button>
        <button onClick={() => alert('Checkout functionality to be added later')}>Checkout</button>
      </div>
    </div>
  );
};

export default CartItem;
