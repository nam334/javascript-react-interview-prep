import { FiHeart, FiPlus, FiStar } from "react-icons/fi";
import {
  ProductsGrid,
  ProductCard,
  ImageContainer,
  ProductImage,
  ProductTitle,
  ProductDetails,
  ProductPrice,
  Rating,
  CardActions,
  IconButton,
} from "./Products.styles";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { useDispatch, useSelector } from "react-redux";
import { toggleWishlist } from "../../store/wishlistSlice";
import { AiFillHeart } from "react-icons/ai";

const Products = ({ products }) => {
  const { theme } = useContext(ThemeContext);
  const wishlistedProducts = useSelector((state) => state.wishlist);

  const dispatch = useDispatch();
  const wishlistHandler = (id) => {
    dispatch(toggleWishlist(id));
  };

  return (
    <>
      <ProductsGrid>
        {products.map((product) => (
          <ProductCard key={product.id} $mode={theme}>
            <ImageContainer>
              <ProductImage
                src={product.image}
                alt={product.title}
                loading="lazy"
              />
            </ImageContainer>

            <ProductTitle title={product.title} $mode={theme}>
              {product.title}
            </ProductTitle>

            <ProductDetails>
              <ProductPrice $mode={theme}>
                ${product.price.toFixed(2)}
              </ProductPrice>

              <Rating
                aria-label={`Rating: ${product.rating.rate} out of 5`}
                $mode={theme}
              >
                <FiStar />
                <span>{product.rating.rate}</span>
              </Rating>
            </ProductDetails>

            <CardActions>
              <IconButton
                type="button"
                aria-label={`Add ${product.title} to wishlist`}
                title="Add to wishlist"
                onClick={() => wishlistHandler(product.id)}
              >
                {wishlistedProducts.includes(product.id) ? (
                  <AiFillHeart />
                ) : (
                  <FiHeart />
                )}
              </IconButton>

              <IconButton
                type="button"
                $variant="primary"
                aria-label={`Add ${product.title} to cart`}
                title="Add to cart"
              >
                <FiPlus />
              </IconButton>
            </CardActions>
          </ProductCard>
        ))}
      </ProductsGrid>
    </>
  );
};

export default Products;
