let cookie = document.querySelector('img');
let blogSub = document.querySelector('h2');

function cookieBite(){
    cookie.src = "cookie-bite.png";
}

function cookieEat(){
    cookie.src = "crumbs.png";
    blogSub.textContent = "Om nom nom nom!";
}