type Pizza = {
  id: number,
  name: string,
  price: number
}

type Order = {
  id: number,
  pizza: Pizza,
  status: "ordered" | "completed"
}

let cashInRegister = 100;
const orderQueue : Order[] = [];
let nextOrderId = 0;
let nextPizzaId = 0;

const menu : Pizza[] = [
  {
    id: nextPizzaId++,
    name: "Margherita",
    price: 8,
  },
  {
    id: nextPizzaId++,
    name: "Pepperoni",
    price: 10,
  },
  {
    id: nextPizzaId++,
    name: "Veggie",
    price: 9,
  },
];

console.log(menu)
function placeOrder(pizzaName : string): Order | undefined  {
  const selectedPizza = menu?.find((pizza) => pizza.name === pizzaName);
  if(!selectedPizza) return
  cashInRegister += selectedPizza?.price;
  const newOrder : Order = {
  id : nextOrderId++ ,
  pizza : selectedPizza,
  status : "ordered"
  };
  orderQueue.push(newOrder);
  return newOrder;
}

function completedOrder(orderId :number): Order | undefined {
  const currentOrder = orderQueue.find((order) => order.id === orderId);
  if(!currentOrder) return
  currentOrder.status = "completed";
  return currentOrder;
}

function getPizzaDetail(identifier : string | number): Pizza | undefined{
//chk if identifier is a string or number 

return menu.find(selectedPizza => {
  if(typeof identifier === "string")
    return selectedPizza.name.toLowerCase() === identifier.toLowerCase()
  else selectedPizza.id === identifier
})
}


function addToArray<T>(array : T[], item: T){
  array.push(item) 
  return array
}

//add new pizza object
function addNewPizza(newPizza : Omit<Pizza ,'id'> ): Pizza{
  const newPizzaObj = {
    id: nextPizzaId++,
    ...newPizza
  }

  menu.push(newPizzaObj)
  return newPizzaObj
  //return [...menu, newPizza];
}

addNewPizza({ name: "Farmhouse", price: 12 });
addNewPizza({ name: "Cheese Burst", price: 15 });
addNewPizza({ name: "Chicken Supreme", price: 18 });

placeOrder("Farmhouse");
completedOrder(1);

console.log("Menu:", menu);
console.log("Cash in register:", cashInRegister);
console.log("Order queue:", orderQueue);
