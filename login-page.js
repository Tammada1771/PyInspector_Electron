const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
let request = new XMLHttpRequest()

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    request.open("GET", "http://127.0.0.1:8000/users");

    request.send();

    request.onload = () => {
        if (request.status == 200) {
            console.log(JSON.parse(request.response))
        } else {
            console.log("Page not found")
        }
    }

})