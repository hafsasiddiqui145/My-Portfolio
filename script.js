const staticText = "I am a ";
const dynamicTexts = [
    "Web Developer.",
    "HTML Developer.",
    "CSS Developer.",
    "React JS Expert.",
    "JS Developer.",
    "Front-end Developer."
];

let textIndex = 0;
let charIndex = 0;
const speed = 100;

function typeEffect() {
    if (charIndex < dynamicTexts[textIndex].length) {
        document.querySelector(".typewriter").textContent = dynamicTexts[textIndex].substring(0, charIndex);
        charIndex++;
        setTimeout(typeEffect, speed);
    } else {
        setTimeout(() => {
            charIndex = 0;
            textIndex = (textIndex + 1) % dynamicTexts.length;
            typeEffect();
        }, 2000);
    }
}

window.onload = () => {
    typeEffect();
};
const scrollBtn = document.getElementById("scroll-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollBtn.style.display = "flex"; // Show button when scrolling down
    } else {
        scrollBtn.style.display = "none"; // Hide button when at the top
    }
});

scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll to top
});
