const logIn = document.querySelector('.log_in');
const signIn = document.querySelector('.sign_in');
const errors = document.querySelector('.errors');


signIn.addEventListener('click',()=> window.location.href = 'http://localhost:3000/sign');

logIn.addEventListener('click',()=>{
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');
    if(!email.value.trim()) {
        showError('Error: email field is empty.'); 
        email.classList.add('error_input');
        return  
    }
    email.classList.remove('error_input');
    if(!validateEmail(email.value)) { 
        showError('Error: incorect email.'); 
        email.classList.add('error_input');
        return
    }
    email.classList.remove('error_input');

    if(!password.value.trim()) {
        showError('Error: password field is empty'); 
        password.classList.add('error_input');
        return 
    }
    password.classList.remove('error_input');
    if(!validatePassword(password.value)) { 
        showError('Error: must have minimum 8 letter password, with at least a symbol, upper and lower case letters and a number'); 
        password.classList.add('error_input');
        return
    }
    password.classList.remove('error_input');
    showError('');
});



function showError(msg){
    errors.innerText = msg;
}

function validateEmail(email){
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
};
function validatePassword(password){
    return /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);
}
