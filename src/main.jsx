import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// different types of Routers:

import { BrowserRouter } from "react-router-dom";

// import { HashRouter } from "react-router-dom";
// http://localhost:3000/#/routename

// import { unstable_HistoryRouter } from "react-router-dom";
// this allows you to take control of the browser history

// import { MemoryRouter } from "react-router-dom";
// it stores everything related to where you've been inside of memory, it does not use the path in the url bar
// this is useful when testing your code

// import Static from "react-router-dom";
// this is for working on the server, it doesnt allow you to change pages it specifies a single url
// if you render your components on a Server you need to make sure all your components render the correct page
// this allows you to tell React what page you are currently rendering
// <StaticRouter location="/books"/>

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
