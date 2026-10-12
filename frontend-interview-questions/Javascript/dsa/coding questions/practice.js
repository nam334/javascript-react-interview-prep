// Requirements
// 1. Create a function fetchWithRetry(url, retries = 3, delayMs = 500).
// 2. Fetch data from the given URL using async/await.
// 3. If the request fails, retry it, up to 3 retries after the initial attempt.
// 4. Wait 500 milliseconds between retries.
// 5. If all attempts fail, throw an error.
// 6. Use your retry function to fetch products.

async function sleep(ms) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, ms);
  });
}
async function fetchWithRetry(
  url = "https://dummyjson.com/products?limit=100",
  retries = 3,
  delayMs = 500,
) {
  let attempts = 0;
  while (attempts <= retries) {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Error");
      else return response;
    } catch (err) {
      if (attempts === retries) throw new Error("Fetch failed");
      await sleep(delayMs);
      attempts++;
    }
  }
}

// Requirements:
// - Fetch products from https://dummyjson.com/products?limit=100.
// - Display each product's title, description, and price.
// - Use async/await for fetching data.
// - Render the products dynamically in the DOM.

const mainContainer = document.getElementById("mainContainer");
//fetchProducts
async function fetchProducts(
  url = "https://dummyjson.com/products?limit=100",
  retries = 3,
  delayMs = 500,
) {
  try {
    const result = await fetchWithRetry(url, retries, delayMs);
    const data = await result.json();
    return data.products;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

function renderProducts(products) {
  return products?.length > 0
    ? products
        ?.map(
          (product) =>
            `
    <div>
      <h4>${product.title}</h4>
      <h4>${product.description}</h4>
       <h4>${product.price}</h4>
    </div>
   `,
        )
        .join("")
    : "No products available";
}

function filterProducts(products, { category, minPrice, maxPrice, minRating }) {
  // Your implementation
  let newProducts;

  newProducts = products.filter(
    (product) =>
      (category === undefined || product.category === category) &&
      (minPrice === undefined || product.price >= minPrice) &&
      (maxPrice === undefined || product.price <= maxPrice) &&
      (minRating === undefined || product.rating >= minRating),
  );

  return newProducts;
}

function sortProducts(products, key, direction = "asc") {
  // Your implementation
  let sortedProducts = [...products];
  sortedProducts.sort((a, b) => {
    if (typeof a[key] === "string") {
      if (direction === "asc") return a[key].localeCompare(b[key]);
      else return b[key].localeCompare(a[key]);
    } else {
      //number
      if (direction === "asc") return a[key] - b[key];
      else if (direction === "desc") return b[key] - a[key];
    }
  });
  return sortedProducts;
}

function paginate(products, page = 1, pageSize = 10) {
  // Your implementation

  let start, end;
  start = (page - 1) * pageSize;
  end = start + pageSize;
  return products.slice(start, end);
}

async function main() {
  mainContainer.innerHTML = "Loading..";
  try {
    const products = await fetchProducts();
    const filteredProducts = filterProducts(products, {
      category: "beauty",
      minPrice: 10,
    });
    const sortedProducts = sortProducts(filteredProducts, "price", "asc");
    const paginatedProducts = paginate(sortedProducts, 1, 5);

    mainContainer.innerHTML = renderProducts(paginatedProducts);
  } catch (err) {
    mainContainer.innerHTML = "Failed to load products.";
  }
}

main();
