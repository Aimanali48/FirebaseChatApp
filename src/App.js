import React from 'react';
import './App.css';
import BrowserRouter from './routes/routes';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter />
    </Provider>
  );
}

export default App;
