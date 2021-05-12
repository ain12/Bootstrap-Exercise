const bar = document.getElementById("search-bar");
const inputClass = document.querySelector(".input-group");

document.getElementById("search-btn").addEventListener("click", validationSearch = () => {
    inputClass.classList.remove("is-invalid");
    validationBar("invalid-feedback");
});

const validationBar = (name) => {
    if (bar.value.length < 3) {
        bar.classList.add("is-invalid");
        document.querySelector(`.${name}`);
        return false;
    } else {
        bar.classList.add("is-valid");
        return true;
    }
};

inputClass.addEventListener('blur', (event) => {
    if (event.target.value != '') {
        event.target.classList.remove('is-invalid');
    }
}, true);

inputClass.addEventListener('button', function (e) {
    e.preventDefault();
});