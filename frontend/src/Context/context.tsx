import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { useNavigate } from "react-router-dom";
import { menuItems } from "../assets/menuitems";

interface FoodContextType {
  menuItems: typeof menuItems;
  cartItems: CartItem[];
  addToCart: (itemID: number) => void;
}

interface CartItem {
  id: number;
  quantity: number;
  name: string;
}

export const FoodContext = createContext<FoodContextType | undefined>(
  undefined
);

interface FoodContextProviderProps {
  children: ReactNode;
}

const FoodContextProvider = ({ children }: FoodContextProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const addToCart = (itemID: number) => {
    const item = menuItems.find((menuItem) => menuItem.id === itemID);
    if (item) {
      setCartItems((prevItems) => {
        const existingItemIndex = prevItems.findIndex(
          (cartItem) => cartItem.id === itemID
        );
        if (existingItemIndex >= 0) {
          return prevItems.map((cartItem, index) =>
            index === existingItemIndex
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          );
        } else {
          return [...prevItems, { id: itemID, name: item.name, quantity: 1 }];
        }
      });
    }
  };

  const removeFromCart = (itemID: number) => {
    setCartItems((prevItems) => {
      return prevItems.reduce((newItems, cartItem) => {
        if (cartItem.id === itemID) {
          if (cartItem.quantity > 1) {
            newItems.push({ ...cartItem, quantity: cartItem.quantity - 1 });
          }
        } else {
          newItems.push(cartItem);
        }
        return newItems;
      }, [] as CartItem[]);
    });
  };

  const deleteFromCart = (itemID: number) => {
    setCartItems(cartItems.filter((thing) => thing.id !== itemID));
  };

  const contextValue = {
    menuItems,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    deleteFromCart,
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  return (
    <FoodContext.Provider value={contextValue}>{children}</FoodContext.Provider>
  );
};

export const useFood = () => {
  return useContext(FoodContext);
};

export default FoodContextProvider;
