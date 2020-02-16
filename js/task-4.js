const refs = {
  counter: document.querySelector("#counter"),
  decrementButton: document.querySelector("[data-action=decrement]"),
  incrementButton: document.querySelector("[data-action=increment]"),
  valueSpan: document.querySelector("#value")
};
let clickCount = 0;
const increment = event => {
  clickCount++;
  refs.valueSpan.textContent = clickCount;
};
const decrement = event => {
  clickCount--;
  refs.valueSpan.textContent = clickCount;
};
const handleCounterFn = event => {
  if (event.target === refs.incrementButton) {
    increment();
  } else if (event.target === refs.decrementButton) {
    decrement();
  };
};
refs.counter.addEventListener("click", handleCounterFn);