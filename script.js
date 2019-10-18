const elements = document.querySelectorAll('.project-entry');
let range = 0;
let startPoint = 0;
let endPoint = 0;

initialize();

setTimeout(animateEntry, 500);

function initialize() {
    calculateBounds();
    animateEntry();
}

function calculateBounds() {
    range = window.innerHeight * 0.6;
    startPoint = (window.innerHeight - range) / 2;
    endPoint = window.innerHeight - startPoint;
}

function animateEntry() {
    for (let node of elements) {
        if (node.getBoundingClientRect().top < endPoint &&
            node.getBoundingClientRect().bottom > startPoint) {
            node.style.transform = `scale(1)`;
            node.style.opacity = "1";
        } else {
            node.style.transform = `scale(0.95)`;
            node.style.opacity = "0.2";
        }
    }
}

window.addEventListener("resize", () => {
    calculateBounds();
});

window.addEventListener("scroll", () => {
    animateEntry();
});