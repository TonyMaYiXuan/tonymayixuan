javascript
Copy
const canvas = document.createElement("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);

const context = canvas.getContext("2d");
const radius = 50;
let x = canvas.width / 2;
let y = canvas.height / 2;
let isDragging = false;
let offsetX = 0;
let offsetY = 0;

function animateCircle() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2);
    context.fillStyle = "blue";
    context.fill();
    requestAnimationFrame(animateCircle);
}

animateCircle();

canvas.addEventListener("mousedown", function(event) {
    const rect = canvas.getBoundingClientRect();
    offsetX = event.clientX - rect.left - x;
    offsetY = event.clientY - rect.top - y;
    if (Math.sqrt(Math.pow(offsetX, 2) + Math.pow(offsetY, 2)) <= radius) {
        isDragging = true;
    }
});

canvas.addEventListener("mousemove", function(event) {
    if (isDragging) {
        const rect = canvas.getBoundingClientRect();
        x = event.clientX - rect.left - offsetX;
        y = event.clientY - rect.top - offsetY;
    }
});

canvas.addEventListener("mouseup", function(event) {
    isDragging = false;
});
