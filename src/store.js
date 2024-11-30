import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';

// Configure the Redux store
const store = configureStore({
    reducer: {
        cart: cartReducer, // Assign cartReducer to manage the 'cart' slice of the state
    },
});

// Export the store
export default store;
