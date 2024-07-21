import { CartContext } from "../provider/CartProvider";
import { useContext } from "react";

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context)
    throw new Error(
      "Hay un componente que no esta dentro de CardContext y esta queriendo consumir su contexto"
    );

  return context;
};
