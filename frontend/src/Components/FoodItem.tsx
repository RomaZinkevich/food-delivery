import React, { useState } from "react";
import "../Styles/FoodItem.css";
import { GoPlus } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";

const FoodItem = ({ id, name, imageUrl, description, price }) => {
  const [quantity, setQuantity] = useState<number>(0);
  return (
    <div className="foodCard">
      <div className="foodImageContainer">
        <img className="foodImage" src={imageUrl} alt="" />
        {quantity === 0 ? (
          <GoPlus
            className="adding"
            onClick={() => setQuantity(quantity + 1)}
          />
        ) : (
          <div className="counter">
            <RxCross2
              style={{
                color: "orange",
                backgroundColor: "grey",
                borderRadius: "50%",
                margin: "10px 10px",
                fontSize: "20px",
              }}
              onClick={() => setQuantity(quantity - 1)}
            />
            <p className="quantity">{quantity}</p>
            <GoPlus
              style={{
                color: "green",
                backgroundColor: "grey",
                borderRadius: "50%",
                margin: "10px 10px",
                fontSize: "20px",
              }}
              onClick={() => setQuantity(quantity + 1)}
            />
          </div>
        )}
      </div>
      <div className="foodContent">
        <div className="foodName">
          <p>{name}</p>
        </div>
        <p className="foodDesc">{description}</p>
        <p className="foodprice">{price}</p>
      </div>
    </div>
  );
};

export default FoodItem;

{
  /* <RxCross2 /> */
}
{
  /* <CiCirclePlus /> */
}
