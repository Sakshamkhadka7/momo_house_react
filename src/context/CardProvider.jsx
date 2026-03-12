import { createContext, useEffect, useReducer } from "react";
import { toast, Bounce } from "react-toastify";

export const CartContext = createContext();

const getProduct = () => {
  let res = localStorage.getItem("cart");
  return res ? JSON.parse(res) : [];
};

const initialState = {
  cartItems: getProduct(),
};

const cardReducer = (state, action) => {
  // console.log(action.type);

  switch (action.type) {
    case "addToCart": {
      console.log(state);

      const isExists = state.cartItems.find((item) => {
        return item.id == action.payload.id;
      });

      if (isExists) {
        toast.info("Product is already exists", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        console.log("Product is already exists");
        return state;
      }

      const newObj = { ...action.payload, qty: 1 };
      console.log(newObj);

      const newCartItems = [...state.cartItems, newObj];
      console.log(newCartItems);
      toast.success("Product is added Succesfully", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });

      return {
        cartItems: newCartItems,
      };
    }

    case "increment": {
      const newObject = state.cartItems.map((items) => {
        return items.id == action.payload.id
          ? { ...items, qty: items.qty + 1 }
          : items;
      });

      return {
        cartItems: newObject,
      };
    }

    case "decrement": {
      const newObject = state.cartItems.map((items) => {
        return items.id == action.payload.id && items.qty > 1
          ? { ...items, qty: items.qty - 1 }
          : items;
      });

      return {
        cartItems: newObject,
      };
    }

    case "delete": {
      const newObject = state.cartItems.filter((items) => {
        return items.id !== action.payload.id;
      });

      toast.warning("Product is deleted Succesfully", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return {
        cartItems: newObject,
      };
    }

    case "default": {
      return state;
    }
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cardReducer, initialState);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cartItems));
  });

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
