import { createSlice } from "@reduxjs/toolkit";
//import { toast } from "react-toastify";

//typeof window !== "undefined" && localStorage.getItem("cartItems")

/* const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  quantity: 0,
  total: 0,
}; */

const initialState = {
  cartItems: typeof window !== "undefined" && localStorage.getItem("cartItems")
    ? typeof window !== "undefined" && JSON.parse(localStorage.getItem("cartItems"))
    : [],
  quantity: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload._id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].quantity += 1;
       /*  toast.info(
          `${state.cartItems[itemIndex].title} Adeti Başarıyla Arttırıldı.`,
          {
            autoClose: 1500,
            position: "bottom-right",
          }
        ); */
      } else {
        const tempProduct = { ...action.payload, quantity: 1 };
        state.cartItems.push(tempProduct);
        /* toast.success(`${action.payload.title} Başarıyla Sepete Eklendi.`, {
          autoClose: 1500,
          position: "bottom-right",
        }); */
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart: (state, action) => {
      const nextCartItems = state.cartItems.filter(
        (cartItem) => cartItem._id !== action.payload._id
      );
      state.cartItems = nextCartItems;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      /* toast.info(`${action.payload.title} Başarıyla Sepetten Silindi.`, {
        autoClose: 1500,
        position: "bottom-right",
      }); */
    },
    decreaseCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload._id
      );
      if (state.cartItems[itemIndex].quantity > 1) {
        state.cartItems[itemIndex].quantity -= 1;
        /* toast.info(`Decreased ${action.payload.title} cart quantity.`, {
          autoClose: 1500,
          position: "bottom-right",
        }); */
      } else if (state.cartItems[itemIndex].quantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (cartItem) => cartItem._id !== action.payload._id
        );
        state.cartItems = nextCartItems;
        /* toast.error(`Decreased ${action.payload.title} removed from cart.`, {
          autoClose: 1500,
          position: "bottom-right",
        }); */
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    clearCart: (state, action) => {
      state.cartItems = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      /* toast.info(`Sepetiniz Başarıyla Temizlendi.`, {
        autoClose: 1500,
        position: "bottom-right",
      }); */
    },
    getTotals: (state, action) => {
      let {toplam, miktar } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, quantity } = cartItem;
          const fiyat = Number(parseFloat(price))
          const itemTotal = fiyat * quantity;

          cartTotal.toplam += itemTotal;
          cartTotal.miktar += quantity;
          return cartTotal;
        },
        {
          toplam: 0,
          miktar: 0,
        }
      );
      state.quantity = miktar;
      state.total = toplam;
    },
  },
  extraReducers: {},
});

export const { addToCart, removeFromCart, decreaseCart, clearCart, getTotals } = cartSlice.actions;
export const selectCartItems = (state) => state.cart.cartItems;
export default cartSlice.reducer;

/*
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  quantity: 0,
  total: 0,
  selectedItems: localStorage.getItem("isItemSelected")
  ? JSON.parse(localStorage.getItem("isItemSelected"))
  : false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload._id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].quantity += 1;
        toast.info(
          `${state.cartItems[itemIndex].title} Adeti Başarıyla Arttırıldı.`,
          {
            autoClose: 1500,
            position: "bottom-right",
          }
        );
      } else {
        const tempProduct = { ...action.payload, quantity: 1 };
        state.cartItems.push(tempProduct);
        toast.success(`${action.payload.title} Başarıyla Sepete Eklendi.`, {
          autoClose: 1500,
          position: "bottom-right",
        });
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart: (state, action) => {
      const nextCartItems = state.cartItems.filter(
        (cartItem) => cartItem._id !== action.payload._id
      );
      state.cartItems = nextCartItems;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      toast.info(`${action.payload.title} Başarıyla Sepetten Silindi.`, {
        autoClose: 1500,
        position: "bottom-right",
      });
    },
    decreaseCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload._id
      );
      if (state.cartItems[itemIndex].quantity > 1) {
        state.cartItems[itemIndex].quantity -= 1;
        toast.info(`Decreased ${action.payload.title} cart quantity.`, {
          autoClose: 1500,
          position: "bottom-right",
        });
      } else if (state.cartItems[itemIndex].quantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (cartItem) => cartItem._id !== action.payload._id
        );
        state.cartItems = nextCartItems;
        toast.error(`Decreased ${action.payload.title} removed from cart.`, {
          autoClose: 1500,
          position: "bottom-right",
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    clearCart: (state, action) => {
      state.cartItems = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      toast.info(`Sepetiniz Başarıyla Temizlendi.`, {
        autoClose: 1500,
        position: "bottom-right",
      });
    },
    getTotals: (state, action) => {
      let {toplam, miktar } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, quantity } = cartItem;
          const fiyat = Number(parseFloat(price))
          const itemTotal = fiyat * quantity;

          cartTotal.toplam += itemTotal;
          cartTotal.miktar += quantity;
          return cartTotal;
        },
        {
          toplam: 0,
          miktar: 0,
        }
      );
      state.quantity = miktar;
      state.total = toplam;
    },
    selectedItem: (state, action) => {
      <input type="checkbox" ref={seciliUrunRef} defaultChecked={selectItems} onChange={() => handleCheckbox(item)} />
      
      state.selectedItems = action.payload[1];
      if(!action.payload[2] === true){
        localStorage.setItem("isItemSelected", JSON.stringify(false))
      }else {
        localStorage.setItem("isItemSelected", JSON.stringify(action.payload[1]))
      }
    }
  },
  extraReducers: {},
});

export const { addToCart, removeFromCart, decreaseCart, clearCart, getTotals, selectedItem } =
  cartSlice.actions;
export const selectCartItems = (state) => state.cart.cartItems;
export const seciliUrun = (state) => state.cart.selectedItems;
export default cartSlice.reducer;

*/
