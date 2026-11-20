// primitive types, unknown, never, any
function logMessage(msg: string) : void{
  console.log("LOG:", msg);
}

function throwError(message: string) : never {
  throw new Error(message);
}

function parseProduct(json: string): unknown {
  return JSON.parse(json);
}

const product = parseProduct('{"name":"Shoes","price":2000}');
if (
  typeof product === "object" &&
  product !== null &&
  "name" in product &&
  typeof product.name === "string"
) {
  console.log(product.name.toUpperCase());
}

// tuples, arrays, object types