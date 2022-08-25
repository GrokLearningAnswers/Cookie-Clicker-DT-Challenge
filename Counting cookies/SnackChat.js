let snappedText = document.querySelector('span');
let snappedCount = 0;

function count() {
    snappedCount++;
    snappedText.textContent = snappedCount;
    alert('Snap sent to a random friend');
}