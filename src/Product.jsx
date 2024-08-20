/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

function Product({ product }) {
  const { id, title, description, price, link, image } = product;
  return (
    <div className="product">
      <img src={image} width={240} height={250} alt={title} />
      <h4 className="product-title">{title}</h4>
      <p className="product-desc">{description}</p>
      <h3 className="product-price">{price} ₺</h3>
      <div className="product-link">
        <a href={link}>Buy</a>
      </div>
    </div>
  );
}

export default Product;
