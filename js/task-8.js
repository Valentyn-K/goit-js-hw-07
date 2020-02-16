const controls = document.querySelector("#controls");
const input = document.querySelector("input[type=number]");
const renderBtn = document.querySelector("button[data-action=render]");
const destroyBtn = document.querySelector("button[data-action=destroy]");
const boxes = document.querySelector("#boxes");

const dataRender = renderBtn.dataSet;
console.log(dataRender);

const dataDestroy = destroyBtn.dataSet;
console.log(dataDestroy);

function handleInput(event) {
    let boxesArray = [];
    let arrLength = boxesArray.length;
    let numberOfItems = Number(event.currentTarget.value);
    arrLength = numberOfItems;
    boxesArray.push(numberOfItems);
    console.log(numberOfItems);
    console.log(boxesArray);

    // function render(arr) {
    //     for (let i = 0; i < arr.length; i += 1) {
    //         console.log(``);
    //     }
    // };
};

input.addEventListener("input", handleInput);