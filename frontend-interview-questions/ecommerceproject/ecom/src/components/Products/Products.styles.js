import styled from "styled-components";

export const ProductsGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 24px;

  width: 100%;
  max-width: 1200px;
  margin: 32px auto;
  padding: 0 24px;
`;

export const ProductCard = styled.article`
  display: flex;
  flex-direction: column;
  min-height: 390px;
  padding: 18px;
  background-color: ${({ $mode }) =>
    $mode === "light" ? "#ffffff" : "#131d2c"};
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 24px rgba(15, 23, 42, 0.08);
  }
`;

export const ImageContainer = styled.div`
  height: 190px;
  padding: 16px;
  margin-bottom: 16px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #f8fafc;
  border-radius: 8px;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const ProductTitle = styled.h3`
  margin: 0 0 12px;
  color: ${({ $mode }) => ($mode === "light" ? "#475569" : "#ffffff")};
  font-size: 16px;
  font-weight: 600;
  line-height: 1.4;

  /* Keep cards aligned when a title is long */
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

export const ProductDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: auto;
`;

export const ProductPrice = styled.p`
  margin: 0;
  color: ${({ $mode }) => ($mode === "light" ? "#475569" : "#ffffff")};

  font-size: 17px;
  font-weight: 600;
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  color: ${({ $mode }) => ($mode === "light" ? "#475569" : "#ffffff")};
  font-size: 14px;

  svg {
    color: #f59e0b;
    fill: #f59e0b;
  }
`;

export const CardActions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  margin-top: 16px;
`;

export const IconButton = styled.button`
  width: 40px;
  height: 40px;
  padding: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #ffffff;
  background-color: ${({ $variant }) =>
    $variant === "primary" ? "#f47f7f" : "#64748b"};

  border: none;
  border-radius: 50%;
  cursor: pointer;

  transition:
    transform 0.2s ease,
    background-color 0.2s ease;

  svg {
    font-size: 18px;
  }

  &:hover {
    transform: translateY(-2px);
    background-color: ${({ $variant }) =>
      $variant === "primary" ? "#eb6c6c" : "#526176"};
  }

  &:focus-visible {
    outline: 2px solid #7c3aed;
    outline-offset: 2px;
  }
`;
export const QuantityControl = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  height: 38px;
  padding: 3px;
  border: 1px solid #d9e2ec;
  border-radius: 10px;
  background: #f8fafc;
`;

export const QuantityButton = styled.button`
  display: grid;
  place-items: center;
  width: 30px;
  height: 30px;
  border: 0;
  border-radius: 7px;
  background: transparent;
  font-weight: 600;
  color: #334155;
  cursor: pointer;
  font-size: 22px;

  &:hover {
    background: #e2e8f0;
  }

  &:focus-visible {
    outline: 2px solid #2563eb;
    outline-offset: 2px;
  }
`;

export const QuantityValue = styled.span`
  min-width: 22px;
  text-align: center;
  color: #0f172a;
  font-size: 14px;
  font-weight: 600;
`;
