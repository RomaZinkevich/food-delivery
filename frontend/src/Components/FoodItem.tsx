import React, { useState } from "react";
import "../Styles/FoodItem.css";
import { GoPlus } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";
import { FiMinus } from "react-icons/fi";

const FoodItem = ({ id, name, imageUrl, description, price }) => {
  const [quantity, setQuantity] = useState<number>(0);
  const textTruncate = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      const truncatedText = text.slice(0, maxLength);
      return truncatedText.slice(0, truncatedText.lastIndexOf(" ")) + "...";
    }
    return text;
  };
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
            <FiMinus
              style={{
                color: "red",
                backgroundColor: "rgb(214, 207, 207)",
                borderRadius: "50%",
                margin: "0px 5px",
                fontSize: "30px",
              }}
              onClick={() => setQuantity(quantity - 1)}
            />
            <p className="quantity">{quantity}</p>
            <GoPlus
              style={{
                color: "#50C878",
                backgroundColor: "rgb(214, 207, 207)",
                borderRadius: "50%",
                margin: "0px 5px",
                fontSize: "30px",
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
        <p className="foodDesc">{textTruncate(description, 50)}</p>
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
