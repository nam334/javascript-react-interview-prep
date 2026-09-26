import styled from "styled-components";

export const NavbarContainer = styled.nav`
  width: 100%;
  min-height: 64px;
  padding: 0 32px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${({ $mode }) =>
    $mode === "light" ? "#ffffff" : "#111827"};
  border-bottom: 1px solid #e5e7eb;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
`;

export const BrandName = styled.h2`
  margin: 0;
  color: rgb(100, 116, 139);
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -0.5px;
`;

export const SideDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const ThemeButton = styled.button`
  width: 38px;
  height: 38px;
  padding: 0;
  border: 1px solid #d9dce3;
  border-radius: 50%;
  background: #fff;
  color: #303846;
  cursor: pointer;
`;
export const CartButton = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 18px;
  border: 0;
  border-radius: 10px;
  background: #f47e83;
  color: white;
  cursor: pointer;
  &:hover {
    background: #526176;
  }
  svg {
    width: 26px;
    height: 26px;
  }

  .cart-summary {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2px;
    font-weight: 600;
    line-height: 1.2;
  }
`;
