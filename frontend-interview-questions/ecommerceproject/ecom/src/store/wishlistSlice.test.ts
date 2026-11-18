 import { describe, it, expect } from "vitest";
import wishlist,{ toggleWishlist } from "./wishlistSlice.js";

 describe("toggleWishlist", () => {
    it("adds the product id when it is not in the wishlist", () => {
         //prepare the input 
        const wishlistedData : number[] = [];
         //call the function 
         const action = toggleWishlist(1)
        const result = wishlist(wishlistedData, action)
         //chk the result
           expect(result).toEqual([1])
    })

     it("removes the product id when it is already in the wishlist", () => {
         //prepare the input 
        const wishlistedData : number[] = [1];
         //call the function 
         const action = toggleWishlist(1)
        const result = wishlist(wishlistedData, action)
         //chk the result
           expect(result).toEqual([])
    })
 })