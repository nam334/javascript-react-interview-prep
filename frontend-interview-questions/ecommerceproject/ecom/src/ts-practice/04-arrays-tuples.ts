type Order = {
    readonly id: number,
    items: string[],
    shippingAddress: {
        city: string, 
        pincode: string 
    }
    couponCode?: string
}
const order : Order = {
  id: 101,
  items: ["Shoes", "Bag"],
  shippingAddress: { city: "Pune", pincode: "411001" },
  couponCode: "SAVE10", // some orders don't have a coupon
};

//part 2

function useCounter(initial : number) : [number, () => void]{
  let count = initial;
  const increment = () => {
    count++;
  };
  return [count, increment];
}

const [count, increment] = useCounter(0);


//union types, literal types, type aliases, type narrowing
