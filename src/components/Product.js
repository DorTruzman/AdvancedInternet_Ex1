import React from 'react';
import "../App.css";

function Product({ index, name, price, images, setCurrProductIndex }) {
  return (
    <div
      className="product"
      onClick={() => {
        setCurrProductIndex(index);
      }}
    >
      <div>
        <img className="productImg" alt="Product" src={images[0]} />
      </div>
      <div className="productDetails">
        <div>{name}</div>
        <div>{price + " ₪"}</div>
      </div>
    </div>
  );
}

export default Product;
