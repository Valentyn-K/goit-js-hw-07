const input = document.querySelector("#name-input");
const output = document.querySelector("h1 > #name-output");

input.addEventListener('input', handleInputChange);

function handleInputChange(event) {
    if (event.currentTarget.value.length === 0) {
        output.textContent = "незнакомец";
    } else {
        output.textContent = event.currentTarget.value;
    };
};