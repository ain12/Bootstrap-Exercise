const form_2 = document.getElementById("form2");
const email_2 = document.getElementById("join-form");
const password_2 = document.getElementById("password2");
const passwordRepeat = document.getElementById("password3");
const province = document.getElementById("province");

const emailValidation_2 = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const passwordValidation_2 = /^(?=.{1,})/;

document.getElementById("submit-2").addEventListener("click", validationForm2 = () => {
    form.classList.remove('is-invalid');
    let validatedEmail = validationInputs2(emailValidation_2, email_2, "invalid-feedback");
    let validatedPassword1 = validationInputs2(passwordValidation_2, password_2, "invalid-feedback");
    let validatedPassword2 = validationInputs(passwordValidation_2, passwordRepeat, "invalid-feedback");
    let checkPassword = equalPasswords(password_2, passwordRepeat, "invalid-feedback");
    let checkedProvince = checkProvince("invalid-feedback");
    if (validatedEmail == true && validatedPassword1 == true && checkPassword == true && validatedPassword2 && checkedProvince == true) {
        form.reset();
    }
});

const validationInputs2 = (expression, input, name) => {
    if (!expression.test(input.value)) {
        input.classList.add("is-invalid");
        document.querySelector(`.${name}`);
        return false;
    } else {
        input.classList.add("is-valid");
        return true;
    }
};

const equalPasswords = (pass1, pass2, name) => {
    if (pass1.value != pass2.value) {
        pass2.classList.add("is-invalid");
        document.querySelector(`.${name}`);
        return false;
    } else {
        pass1.classList.add("is-valid");
        pass2.classList.add("is-valid");
        return true;
    }
};

const checkProvince = (name) => {
    if (province.value == "") {
        province.classList.add("is-invalid");
        document.querySelector(`.${name}`);
        return false;
    } else {
        province.classList.add("is-valid");
        return true;
    }
};

form_2.addEventListener('blur', (event) => {
    if (event.target.value != '') {
        event.target.classList.remove('is-invalid');
    }
}, true);

form_2.addEventListener('submit', function (e) {
    e.preventDefault();
});