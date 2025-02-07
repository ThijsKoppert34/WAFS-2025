const hand = document.querySelector(".hand");
const button = document.querySelector(".zwaaiKnop");
const avatar = document.querySelector(".avatar")

button.addEventListener("click", () => {
    hand.classList.toggle("zwaaiToggle");
    avatar.classList.toggle("knipOog");
});

const bergen = document.querySelectorAll(".bergen article img");

bergen.forEach(berg => {
    berg.addEventListener("click", () => {
        berg.classList.toggle("openBerg");
    })
})