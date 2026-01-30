const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");

let noClicks = 0;

noBtn.addEventListener("click", () => {
    noClicks++;

    if (noClicks === 1) {
        noBtn.textContent = "Are you sure? 😢";
    } else if (noClicks === 2) {
        noBtn.textContent = "Please? 🥺";
    } else if (noClicks === 3) {
        noBtn.textContent = "Last chance 😭";
    } else {
        moveNoButton();
    }
});

function moveNoButton() {
    const x = Math.random() * 300 - 150;
    const y = Math.random() * 300 - 150;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

yesBtn.addEventListener("click", () => {
    message.textContent = "YAYYY!! 💖💖💖";
    yesBtn.style.display = "none";
    noBtn.style.display = "none";

});
