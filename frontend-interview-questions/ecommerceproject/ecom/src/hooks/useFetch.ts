import { useEffect, useState } from "react";
import { API_ENDPOINT } from "../config.js";
import type { Product } from "../types/product.js";

export const useFetch = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        const response = await fetch(API_ENDPOINT);
        if (!response.ok) {
  throw new Error(`HTTP Error: ${response.status}`);
}
        const result : Product[] = await response.json();
        setProducts(result);
      } catch (err) {
        if(err instanceof Error){
          setError(err.message)
        }
        else setError("Something went wrong");
      } finally {
        setLoading(false); 
      }
    }

    fetchProducts();
  }, []);

  return { loading, error, products };
};
