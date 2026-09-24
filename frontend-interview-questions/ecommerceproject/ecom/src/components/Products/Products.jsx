import { FiPlus, FiShoppingCart, FiStar } from "react-icons/fi";
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

const Products = ({ products }) => {
  return (
    <>
      <ProductsGrid>
        {products.map((product) => (
          <ProductCard key={product.id}>
            <ImageContainer>
              <ProductImage
                src={product.image}
                alt={product.title}
                loading="lazy"
              />
            </ImageContainer>

            <ProductTitle title={product.title}>{product.title}</ProductTitle>

            <ProductDetails>
              <ProductPrice>${product.price.toFixed(2)}</ProductPrice>

              <Rating aria-label={`Rating: ${product.rating.rate} out of 5`}>
                <FiStar />
                <span>{product.rating.rate}</span>
              </Rating>
            </ProductDetails>

            <CardActions>
              <IconButton
                type="button"
                aria-label={`View ${product.title} in cart`}
                title="Cart"
              >
                <FiShoppingCart />
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
