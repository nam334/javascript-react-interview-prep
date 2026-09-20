import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";

const NavbarContainer = styled.nav`
  width: 100%;
  min-height: 64px;
  padding: 0 32px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #ffffff;
  border-bottom: 1px solid #e5e7eb;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
`;

const BrandName = styled.h2`
  margin: 0;
  color: rgb(100, 116, 139);
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -0.5px;
`;

const CartButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 14px;
  color: #ffffff;
  background-color: rgb(100, 116, 139);
  border: none;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;

  transition:
    background-color 0.2s ease,
    transform 0.2s ease;

  svg {
    font-size: 22px;
  }

  &:hover {
    background-color: #f28482;
    transform: translateY(-1px);
  }
`;
const Navbar = () => {
  return (
    <>
      <NavbarContainer>
        <BrandName>ShopEase</BrandName>
        <CartButton type="button" aria-label="Open shopping cart">
          <FiShoppingCart />
          <span>0 items</span>
        </CartButton>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
