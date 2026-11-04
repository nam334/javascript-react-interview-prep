        import { describe, it, expect } from "vitest";
        import cartSlice,{ addToCart, decreaseQuantity } from "./cartSlice.js";
        import type { CartItem, Product } from "../types/product.js";

        describe("addToCart", () => {
            it("chk for addition of single product to cart", () => {
                //prepare the input 
            const cart : CartItem[] = []
            const product :Product =  
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
            
            }
                //call the function 
            const action = addToCart(product)
            const result = cartSlice(cart, action)
                //chk for result

            expect(result.length).toBe(1)
            expect(result[0]?.qty).toBe(1)
            })

            it("chk for addition of existing product to the cart", () => {
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
                    qty:1
                    }]

                    const product : Product = {        
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
                }

                //call the function 
                const action = addToCart(product)
                const result = cartSlice(cart, action)

                //chk for result
                expect(result.length).toBe(1)
                expect(result[0]?.qty).toBe(2)
            })
        })

        describe("removeFromCart", () => {
            it("chk for decreasing quantity if only 1 product is there (qty = 1)", ()=>{
            //prepare inputs 
            const cart : CartItem[] = [
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
            qty:1
            }]

            //call the function 
            const action = decreaseQuantity(1)
            const result = cartSlice(cart, action)
            //chk for results

            expect(result.length).toBe(0)
            })
        
            it("chk for decreasing quantity a product is there with qty > 1", ()=>{
            //prepare inputs 
            const cart : CartItem[] = [
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
            qty:3
            }]

             
            //call the function 
            const action = decreaseQuantity(1)
            const result = cartSlice(cart, action)
            //chk for results

            expect(result.length).toBe(1)
            expect(result[0]?.qty).toBe(2)
            })
        })