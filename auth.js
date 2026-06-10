function register() {
    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;

    localStorage.setItem(user, pass);

    alert("Account created!");
}

function login() {
    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;

    if(localStorage.getItem(user) === pass) {
        localStorage.setItem("ternix_user", user);
        window.location = "home.html";
    } else {
        alert("Wrong password!");
    }
}
