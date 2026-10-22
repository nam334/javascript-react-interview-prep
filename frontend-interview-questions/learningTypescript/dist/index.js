"use strict";
let cashInRegister = 100;
const orderQueue = [];
let nextOrderId = 0;
let nextPizzaId = 0;
const menu = [
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
console.log(menu);
function placeOrder(pizzaName) {
    const selectedPizza = menu?.find((pizza) => pizza.name === pizzaName);
    if (!selectedPizza)
        return;
    cashInRegister += selectedPizza?.price;
    const newOrder = {
        id: nextOrderId++,
        pizza: selectedPizza,
        status: "ordered"
    };
    orderQueue.push(newOrder);
    return newOrder;
}
function completedOrder(orderId) {
    const currentOrder = orderQueue.find((order) => order.id === orderId);
    if (!currentOrder)
        return;
    currentOrder.status = "completed";
    return currentOrder;
}
function getPizzaDetail(identifier) {
    //chk if identifier is a string or number 
    return menu.find(selectedPizza => {
        if (typeof identifier === "string")
            return selectedPizza.name.toLowerCase() === identifier.toLowerCase();
        else
            selectedPizza.id === identifier;
    });
}
function addToArray(array, item) {
    array.push(item);
    return array;
}
//add new pizza object
function addNewPizza(newPizza) {
    const newPizzaObj = {
        id: nextPizzaId++,
        ...newPizza
    };
    menu.push(newPizzaObj);
    return newPizzaObj;
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
//# sourceMappingURL=index.js.map