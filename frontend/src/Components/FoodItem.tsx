import React from "react";
import "../Styles/FoodItem.css";

const FoodItem = ({ id, name, description, price }) => {
  return (
    <div className="foodCard">
      <div className="foodItemInfo">
        <div className="foodName">
          <p>{name}</p>
        </div>
        <p className="foodDescription">{description}</p>
        <p className="foodPrice">{price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
