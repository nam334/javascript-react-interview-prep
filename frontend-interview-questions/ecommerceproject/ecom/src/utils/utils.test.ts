import type { CartItem } from "../types/product.js";
import { getTotalCartItems } from "./utils.js";
import { describe, it, expect } from "vitest";

describe("getTotalCartItems", () => {
    it("return total price and quantity", () => {
        //prepare the input 
        const cart = [
            {      
      id: 1,
      title: "Product A",
      price: 1000,
      description: "Product A description",
      category: "", 
      image: "" ,
      rating :{
        rate: 4 ,
        count: 1
      },
      qty:2
    },
    {      
      id: 2,
      title: "Product B",
      price: 1000,
      description: "Product B description",
      category: "", 
      image: "" ,
      rating :{
        rate: 4 ,
        count: 1
      },
      qty:1
    }
    ]
        //call the function 
  const result = getTotalCartItems(cart)
        //chk the result

       expect(result.totalPrice).toBe(3000)
       expect(result.totalQuantity).toBe(3)
    })

 it("check for empty cart", () => {
    //prepare input 
    const cart : CartItem[] = []
    //call the function 
    const result = getTotalCartItems(cart)

    expect(result.totalPrice).toBe(0)
    expect(result.totalQuantity).toBe(0)
 })
})
