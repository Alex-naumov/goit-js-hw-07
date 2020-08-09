const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

function fontSizeChange() {
  text.setAttribute("style", `font-size: ${input.value}px`);
}

input.addEventListener("input", fontSizeChange);
