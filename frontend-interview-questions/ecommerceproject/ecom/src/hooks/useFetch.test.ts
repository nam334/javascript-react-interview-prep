import { describe, it, expect, vi } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import { useFetch } from "./useFetch.js";
import type { Product } from "../types/product.js";

describe("useFetch", ()=>{
    it("returns products when the API call succeeds", async() => {
        //create the input 
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
        const fakeProducts: Product[] = [product]

        
        vi.stubGlobal("fetch", vi.fn().mockResolvedValue({
        ok: true,
        json: async () => fakeProducts,
        }));
        //call the function
        const { result } = renderHook(() => useFetch());
        //chk the result
        await waitFor(() => expect(result.current.loading).toBe(false));
        expect(result.current.products).toEqual(fakeProducts)
        expect(result.current.error).toBe(null)
    })
    it("returns an error message when the server responds with an error", async() => {
         vi.stubGlobal("fetch", vi.fn().mockResolvedValue({
        ok: false,
        status: 500,
        }));

        //call the function
         const { result } = renderHook(() => useFetch());
        
         //chk the result
          await waitFor(() => expect(result.current.loading).toBe(false));
        expect(result.current.products).toEqual([])
        expect(result.current.error).toBe(`HTTP Error: 500`)
    })
})