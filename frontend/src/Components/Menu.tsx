import React from "react";
import "../Styles/Menu.css";
import { menuItems } from "../assets/menuitems";
import { categories } from "../assets/categories";

const Menu = () => {
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
      <div className="menu-list">
        {categories.map((item: string, i: number) => (
          <div className="menu-item" key={i}>
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
