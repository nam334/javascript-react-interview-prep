//union types, literal types, type aliases, type narrowing

type OrderStatus = "pending" | "shipped"| "delivered"
function getStatusMessage(status : OrderStatus): string {
  if (status === "pending") return "Your order is being processed";
  if (status === "shipped") return "Your order is on the way";
  if (status === "delivered") return "Your order has arrived";
  console.log(status);
  return "Unknown status";
}

console.log(getStatusMessage("shipped"));
