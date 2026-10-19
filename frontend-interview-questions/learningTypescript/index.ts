type Pizza = {
  name: string,
  price: number
}

type Order = {
  id: number,
  pizza: string, 
  status: string
}
const menu = [
  {
    name: "Margherita",
    price: 8,
  },
  {
    name: "Pepperoni",
    price: 10,
  },
  {
    name: "Veggie",
    price: 9,
  },
];

let cashInRegister = 100;
const orderQueue : Order[] = [];
let nextOrderId = 0;
//add new pizza object
function addNewPizza(newPizza : Pizza ) {
  return [...menu, newPizza];
}

function placeOrder(pizzaName : string) {
  const selectedPizza = menu?.find((pizza) => pizza.name === pizzaName);
  if(!selectedPizza) return
  cashInRegister += selectedPizza?.price;
  const newOrder = {
  pizza : selectedPizza,
  status : "ordered",
  id : nextOrderId++ 
  };
  orderQueue.push(newOrder);
  return newOrder;
}

function completedOrder(orderId :number) {
  const currentOrder = orderQueue.find((order) => order.id === orderId);
  if(!currentOrder) return
  currentOrder.status = "completed";
  return currentOrder;
}

addNewPizza({ name: "Farmhouse", price: 12 });
addNewPizza({ name: "Cheese Burst", price: 15 });
addNewPizza({ name: "Chicken Supreme", price: 18 });

placeOrder("Farmhouse");
completedOrder(1);

console.log("Menu:", menu);
console.log("Cash in register:", cashInRegister);
console.log("Order queue:", orderQueue);
