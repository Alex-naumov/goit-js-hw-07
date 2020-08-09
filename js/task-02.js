const list = document.querySelector("#ingredients");

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
listArray = [];
ingredients.forEach((item) => {
  const listItem = document.createElement("li");
  listItem.textContent = item;
  listArray.push(listItem);
});

list.prepend(...listArray);
