const input = document.querySelector('#validation-input');
input.addEventListener('blur', handlerInput);
function handlerInput(ev) {
    if (ev.currentTarget.value.length ===
    Number(ev.currentTarget.getAttribute('data-length'))) {
        input.classList.add('valid');
        input.classList.remove('invalid');
        
    }
    else {
         input.classList.add('invalid');
         input.classList.remove('valid');
    }
   
}