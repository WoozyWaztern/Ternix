function register(){

const username =
document.getElementById("user").value.trim();

const password =
document.getElementById("pass").value;

/* username */

const usernameRegex =
/^[A-Za-z0-9_]{3,20}$/;

if(!usernameRegex.test(username)){
alert(
"Invalid username. Use 3-20 letters, numbers or _"
);
return;
}

/* bad words */

const bannedWords = [
"fuck",
"bitch",
"shit",
"asshole",
"nigger",
"nigga",
"faggot",
"hitler",
"nazi",
"terrorist"
];

const lower =
username.toLowerCase();

for(const word of bannedWords){

if(lower.includes(word)){
alert(
"Invalid username."
);
return;
}

}

/* password */

if(password.length < 8){
alert(
"Password must be at least 8 characters."
);
return;
}

/* forbidden symbols */

const forbidden =
/[!\"@#№$;%:^?&*()\-+=\/}{\]\[\\|:;',.]/;

if(forbidden.test(password)){
alert(
"Password contains forbidden symbols."
);
return;
}

/* save */

const users =
JSON.parse(
localStorage.getItem("ternix_users")
|| "{}"
);

if(users[username]){
alert(
"Username already exists."
);
return;
}

users[username] = password;

localStorage.setItem(
"ternix_users",
JSON.stringify(users)
);

alert(
"Account created successfully."
);

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
