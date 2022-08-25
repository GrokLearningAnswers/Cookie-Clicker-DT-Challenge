let cookie = document.querySelector('img');
let article = document.querySelector('article');

function bite() {
    cookie.src = 'cookie-bite.png';
    article.style.backgroundColor = "dodgerblue";
    article.style.backgroundImage = "url(cookie-full.png)";
    article.style.color = "snow";
}