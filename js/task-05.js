const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

function handleInputChange(event) {
  const value = event.target.value;
  output.textContent = value || "незнакомец";
}

input.addEventListener("input", handleInputChange);
