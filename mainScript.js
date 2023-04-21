const canvas = document.createElement("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);

const context = canvas.getContext("2d");
const radius = 80;
let x = canvas.width / 2;
let y = canvas.height / 2;
let dx = 5;
let dy = 5;

function animateCircle() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    x += dx;
    y += dy;
    if (x + radius >= canvas.width || x - radius <= 0) {
        dx = -dx;
    }
    if (y + radius >= canvas.height || y - radius <= 0) {
        dy = -dy;
    }
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2);
    context.fillStyle = "blue";
    context.fill();
    requestAnimationFrame(animateCircle);
}

animateCircle();
