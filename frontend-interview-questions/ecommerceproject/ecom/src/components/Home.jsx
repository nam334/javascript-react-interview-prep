import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { API_ENDPOINT } from "../config";
import Products from "./Products";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        const data = await fetch(API_ENDPOINT);
        const result = await data.json();
        setProducts(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  useEffect(() => {
    console.log(products);
  }, [products]);
  if (loading) return <>Loading..</>;
  if (error) return <>No products found..</>;
  return (
    <>
      <Navbar />
      <Products products={products} />
    </>
  );
};

export default Home;
