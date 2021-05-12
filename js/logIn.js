const form = document.getElementById("form");
const email = document.getElementById("login-form");
const password = document.getElementById("password1");

const emailValidation = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const passwordValidation = /^(?=.{1,})/;

document.getElementById("submit").addEventListener("click", validationForm = () => {
    form.classList.remove('is-invalid');
    let validatedEmail = validationInputs(emailValidation, email, "invalid-feedback");
    let validatedPassword = validationInputs(passwordValidation, password, "invalid-feedback");

    if (validatedEmail == true && validatedPassword == true) {
        form.reset();
    }
});

const validationInputs = (expression, input, name) => {
    if (!expression.test(input.value)) {
        input.classList.add("is-invalid");
        document.querySelector(`.${name}`);
        return false;
    } else {
        input.classList.add("is-valid");
        return true;
    }
};

form.addEventListener('blur', (event) => {
    if (event.target.value != '') {
        event.target.classList.remove('is-invalid');
    }
}, true);

form.addEventListener('submit', function (e) {
    e.preventDefault();
});

