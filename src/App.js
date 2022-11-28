import "./App.css";
import React, { useState } from "react";
import Product from "./components/Product";
import ExtraDetails from "./components/ExtraDetails";

function App() {
  const [currProductIndex, setCurrProductIndex] = useState();

  const products = [
    {
      name: "חלב",
      price: 10,
      images: [
        "https://www.thecarycompany.com/media/catalog/product/3/0/30wds4_1.jpg",
        "https://www.tnuva.co.il/uploads/f_606ee43fa87cf_1617880127.jpg",
      ],
      store: "תנובה",
      description: "חלב מצויין",
    },
    {
      name: "מיץ",
      price: 15,
      images: [
        "https://images.heb.com/is/image/HEBGrocery/000543834?fit=constrain,1&wid=800&hei=800&fmt=jpg&qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0",
        "https://www.alphafoodie.com/wp-content/uploads/2020/11/Orange-Juice-1-of-1.jpeg",
      ],
      store: "פריגת",
      description: "מיץ מעולה",
    },
  ];

  const currProduct = products[currProductIndex];

  return (
    <div className="store">
      {currProductIndex !== undefined ? (
        <ExtraDetails
          name={currProduct.name}
          store={currProduct.store}
          description={currProduct.description}
          images={currProduct.images}
          setCurrProductIndex={setCurrProductIndex}
        />
      ) : (
        <>
          {products.map((product, index) => (
            <Product
              name={product.name}
              price={product.price}
              images={product.images}
              index={index}
              setCurrProductIndex={setCurrProductIndex}
            />
          ))}
        </>
      )}
    </div>
  );
}

export default App;
