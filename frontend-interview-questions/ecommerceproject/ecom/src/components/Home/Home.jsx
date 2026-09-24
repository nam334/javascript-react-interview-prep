import Navbar from "../Navbar/Navbar";
import Products from "../Products/Products";
import { useFetch } from "../../hooks/useFetch";

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
