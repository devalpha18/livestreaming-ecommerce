import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import routes, { renderRoutes } from "./routes";
import Header from "./views/header";
import Footer from "./views/footer";
const history = createBrowserHistory();

function App() {
  return (
    <>
      <Router>{renderRoutes(routes)}</Router>
    </>
  );
}

export default App;
