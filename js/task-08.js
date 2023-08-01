const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', handlerSubmit);

function handlerSubmit(evt) {
    evt.preventDefault();
    const { email, password } = evt.currentTarget.elements;
    
    if (email.value === '' || password.value === '') {
        alert('Please fill in all fields');
    }
    console.log({ Email: email.value, Password: password.value });
    evt.currentTarget.reset();
}
