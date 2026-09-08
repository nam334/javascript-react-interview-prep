function sum(num) {
  let result = 0;
  for (let i = 1; i <= num; i++) result += i;
  return result;
}

console.log(sum(9));

sum(10); // 55
sum(5); // 15
sum(3); // 6
sum(9); // 45
