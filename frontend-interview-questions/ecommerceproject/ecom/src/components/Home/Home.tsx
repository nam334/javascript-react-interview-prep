import Navbar from "../Navbar/Navbar.js";
import Products from "../Products/Products.js";
import { useFetch } from "../../hooks/useFetch.js";

const Home = () => {
  const { loading, error, products } = useFetch();

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
