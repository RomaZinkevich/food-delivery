import React, { useState } from "react";
import "../Styles/FoodItems.css";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { useFood } from "../Context/context";

const FoodItem = ({ id, name, imageUrl, description, price }) => {
  const { addToCart, removeFromCart, cartItems } = useFood();
  const textTruncate = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      const truncatedText = text.slice(0, maxLength);
      return truncatedText.slice(0, truncatedText.lastIndexOf(" ")) + "...";
    }
    return text;
  };

  const cartItem = cartItems.find((item) => item.id === id);
  const quantity = cartItem ? cartItem.quantity : 0;

  return (
    <div className="foodCard">
      <div className="foodImageContainer">
        <img className="foodImage" src={imageUrl} alt="" />
        {quantity === 0 ? (
          <GoPlus className="adding" onClick={() => addToCart(id)} />
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
              onClick={() => removeFromCart(id)}
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
              onClick={() => addToCart(id)}
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
