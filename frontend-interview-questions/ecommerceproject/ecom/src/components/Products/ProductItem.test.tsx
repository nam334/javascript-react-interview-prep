    import { describe, it, expect, vi } from "vitest";
    import { render, screen } from "@testing-library/react";   
    import ProductItem from "./ProductItem.js";
    import { Provider } from "react-redux";
    import { store } from "../../store/store.js";
    import { decreaseQuantity } from "../../store/cartSlice.js";
    import type { CartItem, Product } from "../../types/product.js";


    describe("ProductItem", () => {
        it("shows the title and Add to cart button when the product is not in the cart", ()=>{
            //create the input
            const product : Product =  {      
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
            //render the component
            render(
            <Provider store={store}>
            <ProductItem  
            product={product}
            cartProduct={[]}
            theme = "light"
            wishlistedProducts={[]}
            wishlistHandler={vi.fn()}
            addToCartHandler={vi.fn()}
            decreaseQuantity={decreaseQuantity}
                    />
            </Provider>
            )
            //chk the result
            expect(screen.getByText("Product A")).toBeInTheDocument();
            expect(
            screen.getByRole("button", { name: "Add Product A to cart" })
            ).toBeInTheDocument();
        })

        it("Show the correct quantity when product is in the cart",() => {
            //create the input 
              const product : Product =  {      
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
            const cartProduct : CartItem[] = [
                {...product, qty:2}
            ]
             //render the component
            render(
            <Provider store={store}>
            <ProductItem  
            product={product}
            cartProduct={cartProduct}
            theme = "light"
            wishlistedProducts={[]}
            wishlistHandler={vi.fn()}
            addToCartHandler={vi.fn()} 
            decreaseQuantity={decreaseQuantity}
                    />
            </Provider>
            )

            //check the result
           
            expect(screen.getByText("Product A")).toBeInTheDocument();
             expect(screen.getByText("2")).toBeInTheDocument();
        })
    })