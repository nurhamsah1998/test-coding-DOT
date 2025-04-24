/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, ReactElement, useContext, useState } from "react";
import Cookies from "universal-cookie";
import { PropTodo } from "../view/authenticated/todo";

const CartContext = createContext<{
  cart?: PropTodo[] | undefined;
  setCart?: React.Dispatch<React.SetStateAction<PropTodo[]>> | any;
}>({
  cart: [],
});

export const CartProvider = ({ children }: { children: ReactElement }) => {
  const cookie = new Cookies();
  /// CART
  const cartCookies = cookie.get("cart");
  const [cart, setCart] = useState<PropTodo[]>(cartCookies ?? []);
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export function useCart() {
  const context = useContext(CartContext);
  return context;
}
