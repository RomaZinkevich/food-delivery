import React from "react";
import "../Styles/Menu.css";
import { menuItems } from "../assets/menuitems";
import { categories } from "../assets/categories";

interface MenuProps {
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}

const Menu: React.FC<MenuProps> = ({
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <div className="menu">
      <h1>Go crazy</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste possimus,
        modi dolorum veritatis odio inventore exercitationem ad quis omnis
        voluptas suscipit tenetur officiis facilis dolorem temporibus odit
        soluta eum obcaecati, ut iusto rerum corporis nostrum voluptate a!
        Tempora, voluptas tempore.
      </p>
      <div className="category-list">
        {categories.map((item: string, i: number) => (
          <div
            onClick={() =>
              setSelectedCategory((prev) => (prev === item ? "All" : item))
            }
            className="category-item"
            key={i}
          >
            <p className={selectedCategory === item ? "active" : "notactive"}>
              {item}
            </p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default Menu;
