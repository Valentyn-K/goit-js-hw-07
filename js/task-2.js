//========task 2==========

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const liGenerator = (ingredients, parentElement) => {
    parentElement = document.querySelector(`${parentElement}`);
    return ingredients.forEach(ingredient => {
        const li = document.createElement("li");
        li.textContent = ingredient;
        console.log("task 2-1:", parentElement);
        return console.log("task 2-1:", parentElement.appendChild(li));
    });
};
liGenerator(ingredients, "#ingredients");


const mappedIngredients = ingredients.map(ingredient => {
    const parentElement = document.querySelector("#ingredients");
    const li = document.createElement("li");
    li.textContent = ingredient;
    parentElement.appendChild(li);
});
console.log("task 2-2:", mappedIngredients);