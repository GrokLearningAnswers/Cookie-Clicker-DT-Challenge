let stroopwafels = parseInt(prompt('How many Stroopwafels would you like?'));

let bought = document.querySelector('i');
bought.textContent = stroopwafels;

let received = document.querySelector('b');
received.textContent = stroopwafels + 3;