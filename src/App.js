import "./App.css";
import { useState } from "react";

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
        <div className="productExtraDetails">
          <div style={{ fontWeight: "bold" }}>
            {"פרטים נוספים על " + currProduct.name}
          </div>
          <div>{"חנות מוכרת: " + currProduct.store}</div>
          <div>{"תיאור: " + currProduct.description}</div>
          <div>
            <img
              className="productImg"
              alt="Product Alternate"
              src={currProduct.images[1]}
            />
          </div>

          <button onClick={() => setCurrProductIndex(undefined)}>
            חזרה לחנות
          </button>
        </div>
      ) : (
        <>
          {products.map((product, index) => (
            <div
              className="product"
              onClick={() => {
                setCurrProductIndex(index);
              }}
            >
              <div>
                <img
                  className="productImg"
                  alt="Product"
                  src={product.images[0]}
                />
              </div>
              <div className="productDetails">
                <div>{product.name}</div>
                <div>{product.price + " ₪"}</div>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default App;
