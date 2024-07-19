import { createContext, useContext } from "react";
import { menuItems } from "../assets/menuitems";

export const FoodContext = createContext(null);

const FoodContextProvider = (props) => {
  const contextValue = {
    menuItems,
  };

  return (
    <FoodContext.Provider value={contextValue}>
      {props.children}
    </FoodContext.Provider>
  );
};

export const useFood = () => {
  return useContext(FoodContext);
};

export default FoodContextProvider;
