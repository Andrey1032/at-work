import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import "./assets/styles/style.scss";

import { Provider } from "react-redux";
import store from "./assets/store/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);