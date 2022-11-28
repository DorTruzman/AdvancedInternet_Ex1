import React from 'react';
import "../App.css";

function ExtraDetails({
  name,
  store,
  description,
  images,
  setCurrProductIndex,
}) {
  return (
    <div className="productExtraDetails">
      <div style={{ fontWeight: "bold" }}>{"פרטים נוספים על " + name}</div>
      <div>{"חנות מוכרת: " + store}</div>
      <div>{"תיאור: " + description}</div>
      <div>
        <img
          className="productImg"
          alt="Product Alternate"
          src={images.length > 1 ? images[1] : images[0]}
        />
      </div>

      <button onClick={() => setCurrProductIndex(undefined)}>חזרה לחנות</button>
    </div>
  );
}

export default ExtraDetails;
