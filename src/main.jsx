import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./Scss/index.scss";
import { BrowserRouter } from "react-router-dom";
import { register } from "swiper/element/bundle";

register();

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
