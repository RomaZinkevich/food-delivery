import React, { useState } from "react";
import Menu from "../Components/Menu";
import "../Styles/Home.css";
const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  return (
    <div>
      <div className="header">
        <div className="content">
          <h2>Lorem ipsum dolor sit amet consectetur.</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
            labore architecto nobis accusantium commodi cumque modi reiciendis
            amet atque facere, quidem, totam dicta dolorem eos sit similique
            molestias sed! Consequatur dicta eius sed quisquam.
          </p>
        </div>
      </div>
      <Menu
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
    </div>
  );
};

export default Home;
