import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserHistory } from "history";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

export const customHistory = createBrowserHistory();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
