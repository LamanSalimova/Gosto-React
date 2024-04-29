import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { ROUTES } from "./utils/routes";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import { Provider } from "react-redux";
import store from "./controller/store";
import "./style/main.scss";

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          {ROUTES.map((route, index) => (
            <Route key={index} path={route.path} element={<route.element />} />
          ))}
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
}
