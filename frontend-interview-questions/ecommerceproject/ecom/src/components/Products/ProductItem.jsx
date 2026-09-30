import { FiHeart, FiStar } from "react-icons/fi";
import {
  ProductCard,
  ImageContainer,
  ProductImage,
  ProductTitle,
  ProductDetails,
  ProductPrice,
  Rating,
  CardActions,
  IconButton,
  QuantityControl,
  QuantityButton,
  QuantityValue,
} from "./ProductItem.styles";
import { AiFillHeart } from "react-icons/ai";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { useDispatch } from "react-redux";

const ProductItem = ({
  product,
  cartProduct,
  theme,

  wishlistedProducts,
  wishlistHandler,
  addToCartHandler,
  decreaseQuantity,
}) => {
  const cartItem = cartProduct.find((item) => item.id === product.id);
  const dispatch = useDispatch();

  return (
    <ProductCard key={product.id} $mode={theme}>
      <ImageContainer>
        <ProductImage src={product.image} alt={product.title} loading="lazy" />
      </ImageContainer>

      <ProductTitle title={product.title} $mode={theme}>
        {product.title}
      </ProductTitle>

      <ProductDetails>
        <ProductPrice $mode={theme}>${product.price.toFixed(2)}</ProductPrice>

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
        {cartItem ? (
          <QuantityControl aria-label={`Quantity of ${product.title}`}>
            <QuantityButton
              disabled={cartItem.qty === 0}
              type="button"
              aria-label={`Remove one ${product.title}`}
              onClick={() => dispatch(decreaseQuantity(product.id))}
            >
              <CiCircleMinus aria-hidden="true" />
            </QuantityButton>

            <QuantityValue aria-live="polite">{cartItem.qty}</QuantityValue>

            <QuantityButton
              type="button"
              aria-label={`Add one ${product.title}`}
              onClick={() => addToCartHandler(product)}
            >
              <CiCirclePlus aria-hidden="true" />
            </QuantityButton>
          </QuantityControl>
        ) : (
          <IconButton
            type="button"
            $variant="primary"
            aria-label={`Add ${product.title} to cart`}
            title="Add to cart"
            onClick={() => addToCartHandler(product)}
          >
            <CiCirclePlus />
          </IconButton>
        )}
      </CardActions>
    </ProductCard>
  );
};

export default ProductItem;
