let cookie = document.querySelector('img');
let blogSub = document.querySelector('h1');

function cookieBite(){
    cookie.src = "cookie-bite.png";
}

function cookieEat(){
    cookie.src = "cookie.png";
    blogSub.textContent = "You clicked and got a cookie!";
}