import ProductItem from "../components/Products/ProductItem";
import styled from "styled-components";
export const TopRatedWrapper = styled.div`
  position: relative;
`;

export const TopRatedBadge = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 2;

  padding: 4px 8px;
  border-radius: 4px;

  font-size: 12px;
  font-weight: 600;

  background: #fff7e6;
  color: #9a6700;
  border: 1px solid #f2d7a0;
`;

function withTopRated(WrappedComponent) {
  return function EnhancedWrappedComponent(props) {
    const isTopRated = props.product.rating.rate >= 4;
    return (
      <>
        <TopRatedWrapper>
          {isTopRated ? (
            <TopRatedBadge>
              <span>top rated</span>
            </TopRatedBadge>
          ) : null}
          <WrappedComponent {...props} />
        </TopRatedWrapper>
      </>
    );
  };
}

export const EnhancedProductItem = withTopRated(ProductItem);
