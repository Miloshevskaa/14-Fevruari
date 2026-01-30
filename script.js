const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");

let noClicks = 0;
let noBtnScale = 1; // почетен размер
let noBtnX = 0;
let noBtnY = 0;

noBtn.addEventListener("click", () => {
    noClicks++;

    if (noClicks === 1) {
        noBtn.textContent = "Are you sure? 😢";
    } else if (noClicks === 2) {
        noBtn.textContent = "Please? 🥺";
    } else if (noClicks === 3) {
        noBtn.textContent = "Last chance 😭";
        noBtnScale = 0.9; // прво намалување
        updateNoBtnTransform();
    } else {
        moveNoButton();
        noBtnScale *= 0.9; // намалување 10%
        updateNoBtnTransform();
    }
});

function moveNoButton() {
    noBtnX = Math.random() * 300 - 150;
    noBtnY = Math.random() * 300 - 150;
}

function updateNoBtnTransform() {
    noBtn.style.transform = `translate(${noBtnX}px, ${noBtnY}px) scale(${noBtnScale})`;
}

yesBtn.addEventListener("click", () => {
    message.textContent = "YAYYY!! 💖💖💖";
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
});
