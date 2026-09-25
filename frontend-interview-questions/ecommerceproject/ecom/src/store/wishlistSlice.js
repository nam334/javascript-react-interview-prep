import { createSlice } from "@reduxjs/toolkit";

//below array will hold a list of ids of all products added to the wishlist
const initialState = [];
console.log("initial state from slice", initialState);
const wishlist = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    toggleWishlist(state, action) {
      //chk if the product is not added in the state
      let productId = action.payload;
      let isProductPresent = state.includes(productId);
      if (isProductPresent) {
        //remove if product is present
        const result = state.filter((productid) => productid !== productId);
        return result;
      } else {
        //add if product is not present
        state.push(productId);
      }
    },
  },
});

export const { toggleWishlist } = wishlist.actions;
export default wishlist.reducer;
