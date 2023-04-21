const circle = document.getElementById("circle");
const gameRegion = document.getElementById("game-region");
const gameRegionWidth = gameRegion.clientWidth;
const gameRegionHeight = gameRegion.clientHeight;
const circleRadius = parseInt(getComputedStyle(circle).getPropertyValue("width")) / 2;
const speed = 3;
let x = gameRegionWidth / 2;
let y = gameRegionHeight / 2;
let dx = speed;
let dy = speed;

function animateCircle() {
    x += dx;
    y += dy;
    if (x + circleRadius >= gameRegionWidth || x - circleRadius <= 0) {
        dx = -dx;
    }
    if (y + circleRadius >= gameRegionHeight || y - circleRadius <= 0) {
        dy = -dy;
    }
    circle.style.left = x - circleRadius + "px";
    circle.style.top = y - circleRadius + "px";
}
setInterval(animateCircle, 20);
