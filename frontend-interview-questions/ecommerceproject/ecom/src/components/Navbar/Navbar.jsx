import { NavbarContainer, BrandName, CartButton } from "./Navbar.styles";
import { FiShoppingCart } from "react-icons/fi";

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
