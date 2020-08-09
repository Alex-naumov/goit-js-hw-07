const decrementBtn = document.querySelector(
  '#counter button[data-action="decrement"]'
);
const incrementBtn = document.querySelector(
  '#counter button[data-action="increment"]'
);
const value = document.querySelector("#value");

let counterValue = 0;

function decrement() {
  value.textContent = counterValue -= 1;
}

function increment() {
  value.textContent = counterValue += 1;
}

decrementBtn.addEventListener("click", decrement);
incrementBtn.addEventListener("click", increment);
