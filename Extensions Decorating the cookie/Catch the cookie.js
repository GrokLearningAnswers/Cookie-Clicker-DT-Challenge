let cookie = document.querySelector('img');

function startRolling() {
    cookie.style.transform = "translate(1200px, 0px) rotate(720deg) ";
}

function caught() {
    alert('Nice one, mate!');
    cookie.style.transform = '';
}