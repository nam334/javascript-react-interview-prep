const username = document.querySelector("#username");

function handleInput(event) {
  console.log("Username is", event.target.value);
}

function debounce(fn, delay) {
  let timerId;
  return function (...args) {
    let context = this;
    if (timerId) clearTimeout(timerId);
    timerId = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
}
const debouncedFunction = debounce(handleInput, 500);
username.addEventListener("input", debouncedFunction);
