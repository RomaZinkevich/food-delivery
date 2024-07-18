import React from "react";
import { useState } from "react";

const Cart = () => {
  const fruits: string[] = [
    "apple",
    "banana",
    "grapes",
    "strawberry",
    "orange",
    "blueberry",
  ];

  const [selectedFruit, setSelectedFruit] = useState<string[]>([]);
  const [cartUpdated, setCartUpdated] = useState(false);

  const addFruitToTheTable = (fruit: string) => {
    setCartUpdated(true);
    if (!selectedFruit.includes(fruit)) {
      setSelectedFruit([...selectedFruit, fruit]);
    }
  };

  const removeFruit = (fruit: string) => {
    setCartUpdated(true);
    setSelectedFruit(selectedFruit.filter((item) => item !== fruit));
  };

  return (
    <div>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {fruits.map((fruit, i) => (
          <li
            style={{ cursor: "pointer" }}
            onClick={() => addFruitToTheTable(fruit)}
            key={i}
          >
            {fruit}
          </li>
        ))}
      </ul>
      <table style={{ margin: "auto" }}>
        <thead>
          <tr>
            <td>name</td>
            <td style={{ paddingLeft: "20px" }}>remove</td>
          </tr>
        </thead>
        <tbody>
          {selectedFruit.map((selFruit, i) => (
            <tr key={i}>
              <td>{selFruit}</td>
              <td
                style={{ paddingLeft: "20px", cursor: "pointer" }}
                onClick={() => removeFruit(selFruit)}
              >
                X
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
