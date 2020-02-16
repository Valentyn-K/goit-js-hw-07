///=========hw task1=======

const categories = document.querySelector("#categories");
console.log("task 1:", `В списке ${categories.children.length} категории.`);

const item = document.querySelectorAll(".item");
item.forEach(el =>
    console.log("task 1:", `Категория: ${el.firstElementChild.textContent}.`,
        `Количество элементов: ${el.lastElementChild.children.length}.`));