import React from "react";
import "../Styles/CardComp.css";
import FoodContext, { useFood } from "../Context/context";
import FoodItem from "../Components/FoodItems";

interface CardProps {
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}

const CardComp: React.FC<CardProps> = ({ selectedCategory }) => {
  const { menuItems } = useFood();
  return (
    <div className="foodItem">
      <h2>Lorem ipsum dolor sit amet</h2>
      <div className="foodList">
        {menuItems.map((item, i) => {
          if (
            selectedCategory === "All" ||
            selectedCategory === item.category
          ) {
            return (
              <FoodItem
                key={i}
                imageUrl={item.imageUrl}
                id={item.id}
                name={item.name}
                description={item.description}
                price={item.price}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default CardComp;
