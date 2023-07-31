const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');
input.addEventListener("input", onInput);

function onInput(ev) {
    output.textContent = ev.currentTarget.value.trim();
    if (ev.currentTarget.value.trim() === "") {
        output.textContent = "Anonymous";
    }
}