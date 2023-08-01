
const fontSizeControl = document.querySelector('#font-size-control');
const textChange = document.querySelector('#text');

fontSizeControl.addEventListener('input', inputFontSize);



function inputFontSize(evt) {
    textChange.style.fontSize = `${evt.currentTarget.value}px`;
}
