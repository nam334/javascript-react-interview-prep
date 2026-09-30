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

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 24px;
`;
