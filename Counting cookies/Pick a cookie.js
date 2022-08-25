let img = document.querySelector('img');
let heading = document.querySelector('h3');

let bestCookie = prompt('What\'s your favourite cookie?');

img.src = bestCookie + '.png';

heading.textContent = bestCookie;

function oopsie() {
    img.src = "plate.png";
}