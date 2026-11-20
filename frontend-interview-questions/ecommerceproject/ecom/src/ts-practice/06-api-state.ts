type LoadingState = { status: "loading" };
type ErrorState = {status: "error", message:string}
type SuccessState = {status:"success", products: string[]}


type ProductState = LoadingState | ErrorState | SuccessState
function renderProducts(state: ProductState) {
  if (state.status === "loading") return "Loading...";
  if (state.status === "error") return "Error: " + state.message;
  return "Found " + state.products.length + " products";
}