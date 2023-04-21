const canvas = document.createElement("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);

const context = canvas.getContext("2d");
const radius = 60;
var x = canvas.width / 2;
var y = canvas.height / 2;
var isDragging = false;
var offsetX = 0;
var offsetY = 0;

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
    offsetX = event.clientX - rect.left;
    offsetY = event.clientY - rect.top;
    if (Math.sqrt(Math.pow(offsetX - x, 2) + Math.pow(offsetY - y, 2)) <= radius) {
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
