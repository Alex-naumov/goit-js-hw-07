const arrayElem = document.querySelectorAll(".item");

console.log(`В списке ${arrayElem.length} категории.`);

arrayElem.forEach((elem) =>
  console.log(
    `Категория: ${elem.querySelector("h2").textContent}
     Количество елементов: ${elem.querySelectorAll("li").length}`
  )
);
