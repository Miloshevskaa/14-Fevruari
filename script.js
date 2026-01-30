const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");

let noClicks = 0;
let noBtnScale = 1; // почетен размер

noBtn.addEventListener("click", () => {
    noClicks++;

    if (noClicks === 1) {
        noBtn.textContent = "Are you sure? 😢";
    } else if (noClicks === 2) {
        noBtn.textContent = "Please? 🥺";
    } else if (noClicks === 3) {
        noBtn.textContent = "Last chance 😭";
        noBtnScale = 0.9; // прво намалување
        noBtn.style.transform = `scale(${noBtnScale})`;
    } else {
        // поместување + намалување
        moveNoButton();
        noBtnScale *= 0.9; // намалување 10%
        noBtn.style.transform = `translate(${noBtn.dataset.x || 0}px, ${noBtn.dataset.y || 0}px) scale(${noBtnScale})`;
    }
});

function moveNoButton() {
    const x = Math.random() * 300 - 150;
    const y = Math.random() * 300 - 150;
    noBtn.dataset.x = x; // чуваме координати
    noBtn.dataset.y = y;
    noBtn.style.transform = `translate(${x}px, ${y}px) scale(${noBtnScale})`;
}

yesBtn.addEventListener("click", () => {
    message.textContent = "YAYYY!! 💖💖💖";
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
});
