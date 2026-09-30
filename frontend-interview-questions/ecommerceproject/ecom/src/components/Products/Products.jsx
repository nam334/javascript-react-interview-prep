import { ProductsGrid } from "./Products.styles";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { useDispatch, useSelector } from "react-redux";
import { toggleWishlist } from "../../store/wishlistSlice";
import { addToCart, decreaseQuantity } from "../../store/cartSlice";
import { EnhancedProductItem } from "../../hoc/withTopRated";

const Products = ({ products }) => {
  const { theme } = useContext(ThemeContext);
  const wishlistedProducts = useSelector((state) => state.wishlist);
  const cartProduct = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const wishlistHandler = (id) => {
    dispatch(toggleWishlist(id));
  };

  const addToCartHandler = (product) => {
    dispatch(addToCart(product));
  };
  return (
    <>
      <ProductsGrid>
        {products.map((product) => {
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
    </>
  );
};

export default Products;
