const canvas = document.createElement("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);
canvas.style.zIndex = 3;

const context = canvas.getContext("2d");
const radius = 40;
var x = canvas.width / 2;
var y = canvas.height / 2;
var isDragging = false;
var newX;
var newY;

function showCircle() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2);
    context.fillStyle = "green";
    context.fill();
    requestAnimationFrame(showCircle);
}

showCircle();

function updateCircle(mousedown = false) {
    const rect = canvas.getBoundingClientRect();
    newX = event.clientX - rect.left;
    newY = event.clientY - rect.top;
    if (mousedown && ((newX - x, 2) * (newX - x, 2) + (newY - y, 2) * (newY - y, 2) <= radius * radius)) {
        isDragging = true;
    }
    if (isDragging) {
        x = newX;
        y = newY;
        showCircle();
    }
}

canvas.addEventListener("mousedown", function(event) {
    updateCircle(true);
});

canvas.addEventListener("mousemove", function(event) {
    updateCircle();
});

canvas.addEventListener("mouseup", function(event) {
    isDragging = false;
});
