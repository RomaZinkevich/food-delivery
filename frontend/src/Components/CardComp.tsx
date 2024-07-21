import React from "react";
import "../Styles/CardComp.css";
import FoodContext, { useFood } from "../Context/context";
import FoodItem from "../Components/FoodItem";
const CardComp = () => {
  const { menuItems } = useFood();
  return (
    <div className="foodItem">
      <h2>Lorem ipsum dolor sit amet</h2>
      <div className="foodList">
        {menuItems.map((item, i) => (
          <FoodItem
            key={i}
            imageUrl={item.imageUrl}
            id={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default CardComp;
