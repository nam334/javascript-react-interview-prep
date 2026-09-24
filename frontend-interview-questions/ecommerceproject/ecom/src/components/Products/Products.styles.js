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

  background-color: #ffffff;
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

  color: #475569;
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

  color: #475569;
  font-size: 17px;
  font-weight: 600;
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  color: #4b5563;
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
