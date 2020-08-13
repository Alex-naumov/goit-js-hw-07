const list = document.querySelector("#ingredients");

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const listArray = ingredients.map((item) => {
  const listItem = document.createElement("li");
  listItem.textContent = item;
  return listItem;
});
list.prepend(...listArray);
