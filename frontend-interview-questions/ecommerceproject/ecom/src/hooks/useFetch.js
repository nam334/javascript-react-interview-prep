import { useEffect, useState } from "react";
import { API_ENDPOINT } from "../config";

export const useFetch = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        const response = await fetch(API_ENDPOINT);
        const result = await response.json();
        setProducts(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return { loading, error, products };
};
