let fcc = parseInt(prompt('How many cookies will the FCC bring?'));
let b3 = parseInt(prompt('How many biscuits will the B3 bring?'));

let cookies = document.querySelector('i');
cookies.textContent = fcc;

let biscuits = document.querySelector('b');
biscuits.textContent = b3;

let cookbits = document.querySelector('span');
cookbits.textContent = fcc + b3;