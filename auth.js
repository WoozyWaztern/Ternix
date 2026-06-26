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

function login(){

const username =
document.getElementById("user").value.trim();

const password =
document.getElementById("pass").value;

const users =
JSON.parse(
localStorage.getItem("ternix_users") || "{}"
);

if(users[username] && users[username] === password){

localStorage.setItem(
"ternix_user",
username
);

location.href = "home.html";

}else{

showError(
"Incorrect username or password."
);

}

}

function showError(text){

const user =
document.getElementById("user");

const pass =
document.getElementById("pass");

user.style.display = "none";
pass.style.display = "none";

let error =
document.getElementById("loginError");

if(!error){

error =
document.createElement("div");

error.id = "loginError";

error.style.color = "#e11d48";
error.style.fontWeight = "bold";
error.style.marginTop = "15px";

pass.parentNode.insertBefore(
error,
pass.nextSibling
);

}

error.innerText = text;

}

function restoreInputs(){

const user =
document.getElementById("user");

const pass =
document.getElementById("pass");

user.style.display = "";
pass.style.display = "";

const error =
document.getElementById("loginError");

if(error){
error.remove();
}

}

document.getElementById("user").addEventListener(
"focus",
restoreInputs
);

document.getElementById("pass").addEventListener(
"focus",
restoreInputs
);
