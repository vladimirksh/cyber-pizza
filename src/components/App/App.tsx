import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "../Header/Header";
import Main from "../../Pages/Main";

const Cart = React.lazy(
  () => import(/*webpackChunkName: "Cart" */ "../../Pages/Cart")
);
const NotFound = React.lazy(
  () => import(/*webpackChunkName: "NotFound" */ "../../Pages/NotFound")
);

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route
              path="/cart"
              element={
                <React.Suspense fallback={<div>Идет загрузка корзины...</div>}>
                  <Cart />
                </React.Suspense>
              }
            />
            <Route
              path="*"
              element={
                <React.Suspense fallback={<div>Идет загрузка...</div>}>
                  <NotFound />
                </React.Suspense>
              }
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
