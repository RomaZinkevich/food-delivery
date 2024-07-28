import React from "react";
import { useState } from "react";
import { useFood } from "../Context/context";

const Cart = () => {
  const { cartItems, deleteFromCart } = useFood();

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
      ></ul>
      <table
        style={{ margin: "auto", borderCollapse: "collapse", width: "80%" }}
      >
        <thead>
          <tr style={{ backgroundColor: "#f2f2f2" }}>
            <th
              style={{
                border: "1px solid #dddddd",
                textAlign: "left",
                padding: "8px",
              }}
            >
              No.
            </th>
            <th
              style={{
                border: "1px solid #dddddd",
                textAlign: "left",
                padding: "8px",
              }}
            >
              Name
            </th>
            <th
              style={{
                border: "1px solid #dddddd",
                textAlign: "left",
                padding: "8px",
              }}
            >
              Quantity
            </th>
            <th
              style={{
                border: "1px solid #dddddd",
                textAlign: "left",
                padding: "8px",
              }}
            >
              Remove
            </th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item, i) => (
            <tr
              key={item.id}
              style={{
                backgroundColor: i % 2 === 0 ? "#f9f9f9" : "#ffffff",
              }}
            >
              <td
                style={{
                  border: "1px solid #dddddd",
                  textAlign: "left",
                  padding: "8px",
                }}
              >
                {item.id}
              </td>
              <td
                style={{
                  border: "1px solid #dddddd",
                  textAlign: "left",
                  padding: "8px",
                }}
              >
                {item.name}
              </td>
              <td
                style={{
                  border: "1px solid #dddddd",
                  textAlign: "left",
                  padding: "8px",
                }}
              >
                {item.quantity}
              </td>
              <td
                style={{
                  border: "1px solid #dddddd",
                  textAlign: "left",
                  padding: "8px",
                }}
              >
                <button onClick={() => deleteFromCart(item.id)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
