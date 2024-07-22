import { createContext, useContext, useState, ReactNode } from "react";
import { menuItems } from "../assets/menuitems";

interface FoodContextType {
  menuItems: typeof menuItems;
  cartItems: { [key: number]: number };
  addToCart: (itemID: number) => void;
}

export const FoodContext = createContext<FoodContextType | undefined>(
  undefined
);

interface FoodContextProviderProps {
  children: ReactNode;
}

const FoodContextProvider = ({ children }: FoodContextProviderProps) => {
  const [cartItems, setCartItems] = useState<{ [key: number]: number }>({});
  const addToCart = (itemID: number) => {
    if (!cartItems[itemID]) {
      setCartItems({ ...cartItems, [itemID]: 1 });
    } else {
      setCartItems({ ...cartItems, [itemID]: cartItems[itemID] + 1 });
    }
  };
  const removeFromCart = (itemID: number) => {
    setCartItems({ ...cartItems, [itemID]: cartItems[itemID] - 1 });
  };
  const contextValue = {
    menuItems,
  };

  return (
    <FoodContext.Provider value={contextValue}>{children}</FoodContext.Provider>
  );
};

export const useFood = () => {
  return useContext(FoodContext);
};

export default FoodContextProvider;
