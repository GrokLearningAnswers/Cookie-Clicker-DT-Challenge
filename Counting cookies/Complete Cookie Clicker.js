let image = document.querySelector('img');
let countText = document.querySelector('i');
let countNum = 0;

function clickEvent(){
    image.src="cookie.png";
    countNum++;
    countText.textContent = countNum;
}