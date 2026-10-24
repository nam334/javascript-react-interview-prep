import { useContext } from "react";
import {
  NavbarContainer,
  BrandName,
  CartButton,
  SideDiv,
  ThemeButton,
} from "./Navbar.styles.js";
import { FiShoppingCart } from "react-icons/fi";
import { IoSunny } from "react-icons/io5";
import { MdDarkMode } from "react-icons/md";
import { ThemeContext } from "../../context/ThemeContext.js";
import { useSelector } from "react-redux";
import { getTotalCartItems } from "../../utils/utils.js";
import type { RootState } from "../../store/store.js";

const Navbar = () => { 
  const themeContext = useContext(ThemeContext)
  if(!themeContext)
    throw new Error("Navbar must be used inside ThemeProvider");
  const { theme, toggleTheme } = themeContext;
  const cartProduct = useSelector((state: RootState) => state.cart);
  let { totalQuantity = 0, totalPrice = 0 } = getTotalCartItems(cartProduct);
  return (
    <>
      <NavbarContainer $mode={theme}>
        <BrandName>ShopEase</BrandName>
        <SideDiv>
          <ThemeButton type="button" onClick={toggleTheme}>
            {theme === "light" ? <IoSunny /> : <MdDarkMode />}
          </ThemeButton>
          <CartButton type="button" aria-label="Open shopping cart">
            <FiShoppingCart aria-hidden="true" />
            <span className="cart-summary">
              <span>{totalQuantity} items</span>
              <span>$ {totalPrice}</span>
            </span>
          </CartButton>
        </SideDiv>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
