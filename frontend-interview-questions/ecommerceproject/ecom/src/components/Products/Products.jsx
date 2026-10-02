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

  const fetchFilteredProducts = products?.filter((product) =>
    selectedCategories.includes(product.category),
  );

  const fetchRatedProducts = products?.filter(
    (product) => product.rating.rate > selectedRating,
  );

  const finalFilteredProducts = products.filter((product) => {
    let matchesCategory = selectedCategories.includes(product.category);
    let matchesRating = product.rating.rate > selectedRating;
    let matchesPrice = product.price <= selectedPrice;
    if (!selectedCategories?.length) matchesCategory = true;
    if (selectedRating === "") matchesRating = true;
    if (selectedPrice === 0) matchesPrice = true;
    if (matchesCategory && matchesRating && matchesPrice) return product;
  });
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
        />
        <ProductsGrid>
          {selectedCategories?.length ||
          selectedRating != "" ||
          selectedPrice > 0
            ? finalFilteredProducts?.map((product) => {
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
            : products?.map((product) => {
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
              })}
        </ProductsGrid>
      </Wrapper>
    </>
  );
};

export default Products;
