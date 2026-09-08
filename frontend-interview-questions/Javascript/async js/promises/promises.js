// const cart = ["shoes", "dress", "pen"];

//earlier, we used to pass the callbck function as parameter

// createOrder(cart, function(orderId){
//    proceedToPayment(orderId)
// })

// const promise = createOrder(cart);
// promise.then(function (orderId) {
//   proceedToPayment(orderId);
// });

// fetch - api given by browsers to make external calls
//fetch - returns us a promise

//promises - immutable, resolved only once
// const GITHUB_API = "https://api.github.com/users/nam334";

// const api = fetch(GITHUB_API);
// console.log(api);

//implementing a promise

//createOrder - return orderId
//proceedToPayment
//showOrderSummary
//updateWallet
const cart = ["shoes", "dress", "pen"];

function createOrder(cart) {
  return new Promise(function (resolve, reject) {
    if (!validateCart(cart)) {
      const error = new Error("Invalid cart");
      reject(error);
    } else {
      const orderId = "12345";
      if (orderId)
        setTimeout(() => {
          resolve(orderId);
        }, 3000);
    }
  });
}

function proceedToPayment(orderId) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve({
        message: `2. Payment successful for order id - ${orderId}`,
        orderId: orderId,
      });
    }, 2000);
  });
}

function showOrderSummary(orderId) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve({
        message: `3. Order summary is generated for orderId ${orderId}`,
        orderId: orderId,
      });
    }, 4000);
  });
}

function updateWalletBalance(orderId) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve({
        message: `4. Wallet balance is updated for order id - ${orderId}`,
        orderId: orderId,
      });
    }, 6000);
  });
}
function validateCart(cart) {
  return true;
}

const promise = createOrder(cart);

promise
  .then(function (orderId) {
    console.log(`1. Order generated for ${orderId}`);
    return orderId;
  })
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (data) {
    console.log(data.message);
    return data.orderId;
  })
  .then(function (orderId) {
    return showOrderSummary(orderId);
  })
  .then(function (data) {
    console.log(data.message);
    return data.orderId;
  })
  .then(function (orderId) {
    return updateWalletBalance(orderId);
  })
  .then(function (data) {
    console.log(data.message);
  })
  .catch(function (err) {
    console.log(err);
  });
