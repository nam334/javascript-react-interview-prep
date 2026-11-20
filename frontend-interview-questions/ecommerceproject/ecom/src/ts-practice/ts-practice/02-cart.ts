type CartItem = {
    id:number,
    name:string, 
    price: number,
    qty: number
}
const cart : CartItem[]= [
  { id: 1, name: "Shoes", price: 2000, qty: 2 },
  { id: 2, name: "Bag", price: 1500, qty: 1 },
];

function getCartTotal(items : CartItem[]) {
  return items.reduce((sum, item) => sum + item.price * item.qty, 0);
}

function findItem(items: CartItem[], id:number) {
  return items.find((item) => item.id === id);
}

console.log(getCartTotal(cart));
console.log(findItem(cart, 2));