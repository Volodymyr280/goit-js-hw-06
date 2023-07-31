let counterValue = 0;
const value = document.querySelector("#value");
const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');

btnDecrement.addEventListener('click', handleClickDecrement)
function handleClickDecrement (event) {
    counterValue -= 1;
    value.textContent = counterValue;
}

btnIncrement.addEventListener('click', handleClickIncrement)
function handleClickIncrement (event) {
    counterValue += 1;
    value.textContent = counterValue;
}