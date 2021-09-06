const signup_btn = document.querySelector('[data-signup-btn]');

const checkLength = (input) => {
    let length = input.length;
    return length < 250 ? true : false;
};

const containsNumbers = input => {
    let matches = input.match(/\d+/g);
    return matches != null ? true : false;
};

const checkEmail = input => {
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(input);
};

const checkPassword = input => {
    let passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
    return passwordPattern.test(input);
};

const checkPasswordRetry = (password, password_retype) => {
    return password === password_retype;
};

const validatedEntry = () => {

    // flag variable
    let verified = true;

    // entry values
    let first_name = document.getElementById('first-name').value;
    let last_name = document.getElementById('last-name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let retype_password = document.getElementById('retype-password').value;

    // error elements
    const first_name_error = document.querySelector('[data-first-name-error]');
    const last_name_error = document.querySelector('[data-last-name-error]');
    const email_error = document.querySelector('[data-email-error]');
    const password_error = document.querySelector('[data-password-error]');
    const retry_error = document.querySelector('[data-retry-error]');

    if(first_name){
        if(!checkLength(first_name) || containsNumbers(first_name)){
            first_name_error.style.display = 'inline';
            verified = false;
        }
        else{
            first_name_error.style.display = 'none';
        }
    }
    else{
        first_name_error.style.display = 'inline';
        verified = false;
    }

    if(last_name){
        if(!checkLength(last_name) || containsNumbers(last_name)){
            last_name_error.style.display = 'inline';
            verified = false;
        }
        else{
            last_name_error.style.display = 'none';
        }
    }
    else{
        last_name_error.style.display = 'inline';
        verified = false;
    }

    if(email){
        if(checkEmail(email)){
            email_error.style.display = 'none';
        }
        else{
            email_error.style.display = 'inline';
            verified = false;
        }
    }
    else{
        email_error.style.display = 'inline';
        verified = false;
    }

    if(password){
        if(checkPassword(password)){
            password_error.style.display = 'none';
        }
        else{
            password_error.style.display = 'inline';
            verified = false;
        }
    }
    else{
        password_error.style.display = 'inline';
        verified = false;
    }

    if(retype_password){
        if(checkPasswordRetry(password, retype_password)){
            retry_error.style.display = 'none';
        }
        else{
            retry_error.style.display = 'inline';
            verified = false;
        }
    }
    else{
        retry_error.style.display = 'none';
        verified = false;
    }
    
    if(verified) {
        alert('Successfully signed up!');
        location.reload('/');
    }

}

signup_btn.addEventListener('click', validatedEntry);