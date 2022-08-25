let cashmoney = parseInt(prompt('How many dollars would you like to spend on your hand crafted cookie?'));
let peepee = document.querySelector('p');
let imagey = document.querySelector('img');
if(cashmoney == 0){
    peepee.textContent = "Sorry, we don't have any free cookies. Have this promotional plate.";
}
if(cashmoney > 0){
    peepee.textContent = "Have a selection of our recycled micro-cookies.";
    imagey.src = "crumbs.png";
}
if(cashmoney > 1){
    peepee.textContent = "Two fingers of Scottish Highland shortbread.";
    imagey.src = "scotch-finger.png";
}
if(cashmoney > 10){
    peepee.textContent = "A singular roasted Californian Almond has been lovingly nestled into your cookie.";
    imagey.src = "chinese-almond.png";
}
if(cashmoney > 20){
    peepee.textContent = "Freshly grated Fijian Coconut lightly sprinkled over a confit of English raspberries on an Italian biscotto.";
    imagey.src = "raspberry-ice.png";
}
if(cashmoney > 50){
    peepee.textContent = "Oh! You must be a real connoisseur! Have our finest and most difficult to bake cookie.";
    imagey.src = "choc-chip.png";
}