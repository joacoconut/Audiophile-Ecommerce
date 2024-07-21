import { useLocalStorage } from "../hooks/useLocalStorage";
import { ToastContainer, toast } from "react-toastify";
import { ReactElement, createContext } from "react";
import "react-toastify/dist/ReactToastify.css";

//tipado
interface Props {
  children: ReactElement | ReactElement[];
}

interface Cart {
  id: number;
  name: string;
  src: string;
  price: number;
  quantity: number;
}

//1- crear contexto
interface CartContextType {
  cart: Cart[];
  /* getItemQuantity: (id:number) => number; */
  increaseCartItem: (id: number) => void;
  decreaseCartItem: (id: number) => void;
  removeFromCart: (id: number) => void;
  addToCart: (product: Omit<Cart, "quantity">) => void;
  clearCart: () => void;
  cartQuantity: number;
}

export const CartContext = createContext<CartContextType | null>(null);

//2- crear provider
export const CartProvider = ({ children }: Props) => {
  //useState
  const [cart, setCart] = useLocalStorage<Cart[]>("shopping-cart", []);

  //funciones del carrito
  const cartQuantity = cart.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  const increaseCartItem = (id: number) => {
    setCart((prev) =>
      prev.map((item) => {
        if (item.id !== id) return item;

        return { ...item, quantity: item.quantity + 1 };
      })
    );
  };

  const decreaseCartItem = (id: number) => {
    setCart((prev) =>
      prev.map((item) => {
        if (item.id !== id || item.quantity === 1) return item;

        return { ...item, quantity: item.quantity - 1 };
      })
    );
  };

  const removeFromCart = (id: number) => {
    setCart((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  };

  const addToCart = (product: Omit<Cart, "quantity">) => {
    const alreadyExists = cart.find((item) => item.id === product.id);

    if (alreadyExists) {
      toast.warn("Already in the cart");
      return product;
    } else {
      setCart([
        ...cart,
        {
          ...product,
          quantity: 1,
        },
      ]);
      toast.success("Successfully added");
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        /* getItemQuantity, */
        increaseCartItem,
        decreaseCartItem,
        removeFromCart,
        cart,
        addToCart,
        clearCart,
        cartQuantity,
      }}
    >
      {children}
      <ToastContainer position="bottom-right"  autoClose={3000}  stacked  />
    </CartContext.Provider>
  );
};
