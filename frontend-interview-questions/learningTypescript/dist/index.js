"use strict";
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
const orderQueue = [];
let nextOrderId = 0;
//add new pizza object
function addNewPizza(newPizza) {
    return [...menu, newPizza];
}
function placeOrder(pizzaName) {
    const selectedPizza = menu?.find((pizza) => pizza.name === pizzaName);
    if (!selectedPizza)
        return;
    cashInRegister += selectedPizza?.price;
    const newOrder = {};
    newOrder.pizza = selectedPizza;
    newOrder.status = "ordered";
    newOrder.id = nextOrderId++;
    orderQueue.push(newOrder);
    return newOrder;
}
function completedOrder(orderId) {
    const currentOrder = orderQueue.find((order) => order.id === orderId);
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
//# sourceMappingURL=index.js.map