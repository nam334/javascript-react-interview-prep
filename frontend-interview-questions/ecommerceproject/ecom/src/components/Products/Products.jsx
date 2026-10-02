import { ProductsGrid, Wrapper } from "./Products.styles";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { useDispatch, useSelector } from "react-redux";
import { toggleWishlist } from "../../store/wishlistSlice";
import { addToCart, decreaseQuantity } from "../../store/cartSlice";
import { EnhancedProductItem } from "../../hoc/withTopRated";
import Sidebar from "../Sidebar/Sidebar";

const Products = ({ products }) => {
  const { theme } = useContext(ThemeContext);
  const wishlistedProducts = useSelector((state) => state.wishlist);
  const cartProduct = useSelector((state) => state.cart);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedRating, setSelectedRating] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [selectedPrice, setSelectedPrice] = useState(0);
  const [sortBy, setSortBy] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    setSelectedPrice(maxPrice);
  }, [maxPrice]);

  const wishlistHandler = (id) => {
    dispatch(toggleWishlist(id));
  };

  const addToCartHandler = (product) => {
    dispatch(addToCart(product));
  };

  // const fetchFilteredProducts = products?.filter((product) =>
  //   selectedCategories.includes(product.category),
  // );

  // const fetchRatedProducts = products?.filter(
  //   (product) => product.rating.rate > selectedRating,
  // );
  const finalFilteredProducts = products.filter((product) => {
    let matchesCategory = selectedCategories.includes(product.category);
    let matchesRating = product.rating.rate > selectedRating;
    let matchesPrice = product.price <= selectedPrice;
    if (!selectedCategories?.length) matchesCategory = true;
    if (selectedRating === "") matchesRating = true;
    if (selectedPrice === 0) matchesPrice = true;
    if (matchesCategory && matchesRating && matchesPrice) return product;
  });
  let sortedProducts = [...finalFilteredProducts];
  if (sortBy === "price-low-high")
    sortedProducts.sort((a, b) => a.price - b.price);
  else if (sortBy === "price-high-low")
    sortedProducts.sort((a, b) => b.price - a.price);
  else if (sortBy === "rating-high-low")
    sortedProducts.sort((a, b) => b.rating.rate - a.rating.rate);

  return (
    <>
      <Wrapper>
        <Sidebar
          products={products}
          setSelectedCategories={setSelectedCategories}
          setSelectedRating={setSelectedRating}
          setMinPrice={setMinPrice}
          setMaxPrice={setMaxPrice}
          minPrice={minPrice}
          maxPrice={maxPrice}
          selectedPrice={selectedPrice}
          setSelectedPrice={setSelectedPrice}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
        <ProductsGrid>
          {sortedProducts?.length > 0 ? (
            sortedProducts?.map((product) => {
              return (
                <EnhancedProductItem
                  product={product}
                  cartProduct={cartProduct}
                  theme={theme}
                  wishlistedProducts={wishlistedProducts}
                  wishlistHandler={wishlistHandler}
                  addToCartHandler={addToCartHandler}
                  decreaseQuantity={decreaseQuantity}
                />
              );
            })
          ) : (
            <p>No products found</p>
          )}
        </ProductsGrid>
      </Wrapper>
    </>
  );
};

export default Products;
