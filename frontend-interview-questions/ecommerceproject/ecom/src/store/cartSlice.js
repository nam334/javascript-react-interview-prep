import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      //first chk if product is present
      console.log(action.payload);
      const newProduct = action.payload;
      const isProductPresent = state.filter(
        (product) => product.id === action.payload.id,
      );
      if (isProductPresent?.length > 0) {
        //product is present, update quantity
        return state.map((product) => {
          if (product.id === newProduct.id) {
            return { ...product, qty: product.qty + 1 };
          } else return product;
        });
      } else {
        //add the product
        let newProduct = action.payload;
        if (!newProduct.qty) newProduct.qty = 1;
        state.push(newProduct);
      }
    },
    decreaseQuantity(state, action) {
      // return state.map((product) => {
      //   if (product.id === action.payload) {
      //     if (product.qty - 1 == 0)
      //       return state.filter((product) => product.id !== action.payload);
      //     else return { ...product, qty: product.qty - 1 };
      //   } else return product;
      // });

      //find the product
      let product = state.filter(
        (productItem) => productItem.id === action.payload,
      );
      //chk the quantity
      if (product[0].qty - 1 === 0) {
        console.log(product);

        return state.filter((productItem) => productItem.id !== action.payload);
      } else {
        return state.map((product) => {
          if (product.id === action.payload)
            return { ...product, qty: product.qty - 1 };
          else return product;
        });
      }
    },
    deleteFromCart(state, action) {
      //it will take id as input
      return state.filter((product) => product.id !== action.payload);
    },
  },
});

export const { addToCart, deleteFromCart, decreaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
