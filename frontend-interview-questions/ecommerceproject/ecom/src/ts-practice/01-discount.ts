// type inference and type annotation, contextual typing

type Product = {
    id: number,
    name: string,
    price: number,
    inStock: boolean
}
function getDiscountedPrice(product : Product, discountPercent?: number):number {
  if (!discountPercent) return product.price;
  return product.price - (product.price * discountPercent) / 100;
}

const product = { id: 1, name: "Shoes", price: 2000, inStock: true };
console.log(getDiscountedPrice(product, 10));