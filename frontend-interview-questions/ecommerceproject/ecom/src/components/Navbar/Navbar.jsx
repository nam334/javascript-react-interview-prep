import { useContext } from "react";
import {
  NavbarContainer,
  BrandName,
  CartButton,
  SideDiv,
  ThemeButton,
} from "./Navbar.styles";
import { FiShoppingCart } from "react-icons/fi";
import { IoSunny } from "react-icons/io5";
import { MdDarkMode } from "react-icons/md";
import { ThemeContext } from "../../context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <NavbarContainer $mode={theme}>
        <BrandName>ShopEase</BrandName>
        <SideDiv>
          <ThemeButton type="button" onClick={toggleTheme}>
            {theme === "light" ? <IoSunny /> : <MdDarkMode />}
          </ThemeButton>
          <CartButton type="button" aria-label="Open shopping cart">
            <FiShoppingCart />
            <span>0 items</span>
          </CartButton>
        </SideDiv>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
