'use strict';

const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
const mainHolder = document.getElementById("main-holder");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const name = loginForm.name.value;
    const surname = loginForm.surname.value;
    const patronymic = loginForm.patronymic.value;
    const email = loginForm.email.value;
    const number = loginForm.number.value;
    const login = loginForm.login.value;
    const password = loginForm.password.value;
    const second_password = loginForm.second_password.value;

    if (name === "Варлам" && surname === "Мухин" && patronymic === "Ярославович" 
        && email === "Samoilov@mail.ru" && number === "78005004030" && login === "Samoilov"
        && password === "1234" && second_password === "1234") {
        alert("Поздравляем! Вы являетесь авторизованным пользователем.");
        location.replace("/index.html");
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})