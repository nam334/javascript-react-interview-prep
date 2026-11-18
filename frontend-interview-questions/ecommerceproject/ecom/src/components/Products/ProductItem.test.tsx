    import { describe, it, expect, vi } from "vitest";
    import { render, screen } from "@testing-library/react";   
    import ProductItem from "./ProductItem.js";
    import { Provider } from "react-redux";
    import { store } from "../../store/store.js";
    import { decreaseQuantity } from "../../store/cartSlice.js";
    import type { CartItem, Product } from "../../types/product.js";
    import {userEvent} from "@testing-library/user-event";

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
            decreaseQuantityHandler={vi.fn()}
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
            decreaseQuantityHandler={vi.fn()}
                    />
            </Provider>
            )

            //check the result
           
            expect(screen.getByText("Product A")).toBeInTheDocument();
             expect(screen.getByText("2")).toBeInTheDocument();

             expect(screen.queryByRole("button", {name:"Add Product A to cart"})).not.toBeInTheDocument()
        })

        it("calls wishlistHandler with the product id ", async() => {
            //create the input 
            const wishlistHandler = vi.fn()
            
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
            wishlistHandler={wishlistHandler}
            addToCartHandler={vi.fn()}
            decreaseQuantityHandler={vi.fn()}
                    />
            </Provider>
            )

            //check the result
            await userEvent.click(screen.getByRole("button",{name:"Add Product A to wishlist"}))
            expect(wishlistHandler).toHaveBeenCalledWith(1);
        })

        it("Call add To Cart Handler with the product when add to cart button is clicked", async()=>{
            //create the input 
            const addToCartHandler = vi.fn()
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
            addToCartHandler={addToCartHandler}
            decreaseQuantityHandler={vi.fn()}
                    />
            </Provider>
            )
            //chk the result
            await userEvent.click(screen.getByRole("button",{name:"Add Product A to cart"}))
            expect(addToCartHandler).toHaveBeenCalledWith(product);
        })

         it("Calling the +1 button when product is already added to cart", async()=>{
           
            //create the input 
            const addToCartHandler = vi.fn()
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
                {...product, qty: 2}
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
            addToCartHandler={addToCartHandler}
            decreaseQuantityHandler={vi.fn()}
                    />
            </Provider>
            )
            //chk the result
            await userEvent.click(screen.getByRole("button",{name:"Add one Product A"}))
            expect(addToCartHandler).toHaveBeenCalledWith(product);
        })

          it("Calling the -1 button when product is already added to cart", async()=>{
           
            //create the input 
            const decreaseQuantityHandler = vi.fn()
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
                {...product, qty: 2}
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
            decreaseQuantityHandler={decreaseQuantityHandler}
                    />
            </Provider>
            )
            //chk the result
            await userEvent.click(screen.getByRole("button",{name:"Remove one Product A"}))
            expect(decreaseQuantityHandler).toHaveBeenCalledWith(1);
        })
    })