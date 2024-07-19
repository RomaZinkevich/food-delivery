import React, { useState } from "react";
import "../Styles/FoodItem.css";
import { CiCirclePlus } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";

const FoodItem = ({ id, name, description, price }) => {
  const [quantity, setQuantity] = useState<number>(0);
  return (
    <div className="foodCard">
      <div className="foodImage">
        {quantity === 0 ? (
          <CiCirclePlus
            className="adding"
            onClick={() => setQuantity((prev) => prev + 1)}
          />
        ) : (
          <div className="foodCounter">
            <RxCross2 onClick={() => setQuantity((prev) => prev - 1)} />
            <p>{quantity}</p>
            <CiCirclePlus onClick={() => setQuantity((prev) => prev + 1)} />
          </div>
        )}
      </div>
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
