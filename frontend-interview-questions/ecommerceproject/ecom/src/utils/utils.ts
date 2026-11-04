import type { CartItem } from "../types/product.js";

//function for calculating  total quantity
export const getTotalCartItems = function (cart: CartItem[]) {
  const totalQuantity = cart?.reduce((acc, item) => acc + item.qty, 0);
  const totalPrice = Math.ceil(
    cart?.reduce((acc, item) => acc + item.qty * item.price, 0),
  );
  return { totalQuantity, totalPrice };
};
