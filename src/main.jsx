import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // Import Provider from react-redux
import store from './store'; // Import the configured Redux store
import App from './App'; // Assuming the main component is App


ReactDOM.render(
  <Provider store={store}>  {/* Pass the Redux store as a prop to the Provider */}
    <App/>
  </Provider>,
  document.getElementById('root')  // Ensure you're rendering to the correct element
);

