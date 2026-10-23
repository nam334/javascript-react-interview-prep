import { ProductsGrid, Wrapper } from "./Products.styles.js";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext.jsx";
import { useDispatch, useSelector } from "react-redux";
import { toggleWishlist } from "../../store/wishlistSlice.js";
import { addToCart, decreaseQuantity } from "../../store/cartSlice.js";
import { EnhancedProductItem } from "../../hoc/withTopRated.jsx";
import Sidebar from "../Sidebar/Sidebar.jsx";
import type { CartItem, Product } from "../../types/product.js"; 
import type { RootState } from "../../store/store.js";


const Products = ({products } : {products: Product[]}) => {
  const themeContext = useContext(ThemeContext);
  if (!themeContext) {
  throw new Error("Products must be used inside ThemeProvider");
}
  const {theme} = themeContext;
  const wishlistedProducts = useSelector((state : RootState) => state.wishlist);
  const cartProduct = useSelector((state : RootState) => state.cart);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]); 
  const [selectedRating, setSelectedRating] = useState("");
  const [minPrice, setMinPrice] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<string>("");
  const [selectedPrice, setSelectedPrice] = useState<number>(0);
  const [sortBy, setSortBy] = useState<string>("");

  const dispatch = useDispatch();

  useEffect(() => {
    setSelectedPrice(Number(maxPrice));
  }, [maxPrice]);

  const wishlistHandler = (id : number) => {
    dispatch(toggleWishlist(id));
  };

  const addToCartHandler = (product : Product) => {
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
    let matchesRating = product.rating.rate > Number(selectedRating);
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
