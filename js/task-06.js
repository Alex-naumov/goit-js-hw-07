const input = document.querySelector("#validation-input");
const inputLength = input.dataset.length;

function borderColor(event) {
  return event.target.value.length == inputLength
    ? input.setAttribute("class", "valid")
    : input.setAttribute("class", "invalid");
}

input.addEventListener("blur", borderColor);
