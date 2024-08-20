/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import Header from "./Header";
import { products } from "./Data";
import Product from "./Product";
import "./css/Course.css";

function App() {
  return (
    <div>
      <Header />
      <div className="course-main">
        {products?.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default App;
