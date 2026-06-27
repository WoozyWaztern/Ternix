const userInput = document.getElementById("user");
const passInput = document.getElementById("pass");

const toggle = document.getElementById("togglePassword");
const eyePath = document.getElementById("eyePath");

/* закрытый глаз */

const eyeClosed =
"M2 4l20 16-1.5 1.5-3.1-2.5A12.3 12.3 0 0 1 12 19C7 19 2.7 15.9 1 12a16.3 16.3 0 0 1 5.2-5.7L.5 5.5 2 4zm10 4a4 4 0 0 1 4 4c0 .6-.1 1.1-.3 1.6l-5.3-4.2c.5-.3 1-.4 1.6-.4zm9 4c-.7 1.6-1.8 3-3.2 4.1l-1.5-1.2A11.5 11.5 0 0 0 19 12c-1.5-3.2-4.7-5-7-5-.8 0-1.5.1-2.2.3L8 5.9A12.6 12.6 0 0 1 12 5c5 0 9.3 3.1 11 7z";

/* открытый глаз */

const eyeOpen =
"M12 5C7 5 2.7 8.1 1 12c1.7 3.9 6 7 11 7s9.3-3.1 11-7c-1.7-3.9-6-7-11-7zm0 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2.2A1.8 1.8 0 1 0 12 10a1.8 1.8 0 0 0 0 3.6";

if(toggle){

toggle.onclick=function(){

if(passInput.type==="password"){

passInput.type="text";
eyePath.setAttribute("d",eyeClosed);

}else{

passInput.type="password";
eyePath.setAttribute("d",eyeOpen);

}

};

}

/* очистка */

function clearError(input,text){

input.classList.remove("error");
input.value="";
input.placeholder=text;

}

userInput.addEventListener("focus",()=>{

clearError(userInput,"Username");

});

passInput.addEventListener("focus",()=>{

clearError(passInput,"Password");

});

/* ошибки */

function usernameError(text){

userInput.value="";
userInput.placeholder=text;
userInput.classList.add("error");

}

function passwordError(text){

passInput.value="";
passInput.placeholder=text;
passInput.classList.add("error");

}

/* регистрация */

function register(){

const username=userInput.value.trim();
const password=passInput.value;

const usernameRegex=/^[A-Za-z0-9_]{3,20}$/;

if(!usernameRegex.test(username)){
usernameError("3-20 letters, numbers or _");
return;
}

const banned=[
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

const normalized = username
.toLowerCase()
.replace(/[^a-z0-9]/g,"")
.replace(/1/g,"i")
.replace(/3/g,"e")
.replace(/4/g,"a")
.replace(/5/g,"s")
.replace(/0/g,"o");

for(const word of bannedWords){

if(normalized.includes(word)){
usernameError("Invalid username");
return;
}

}

if(password.length<8){
passwordError("Minimum 8 characters");
return;
}

const forbidden=/[!\"@#№$;%:^?&*()\-+=\/}{\]\[\\|:;',.]/;

if(forbidden.test(password)){
passwordError("Forbidden symbols");
return;
}

const users=JSON.parse(localStorage.getItem("ternix_users")||"{}");

if(users[username]){
usernameError("Username already exists");
return;
}

users[username]=password;

localStorage.setItem(
"ternix_users",
JSON.stringify(users)
);

userInput.value="";
passInput.value="";

userInput.placeholder="Account created!";
passInput.placeholder="Now login";

}

/* вход */

function login(){

const username=userInput.value.trim();
const password=passInput.value;

const users=JSON.parse(localStorage.getItem("ternix_users")||"{}");

if(!users[username]){
usernameError("Incorrect username");
return;
}

if(users[username]!==password){
passwordError("Incorrect password");
return;
}

localStorage.setItem("ternix_user",username);

location.href="home.html";

}
