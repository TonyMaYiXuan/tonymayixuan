const canvas = document.createElement("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);
canvas.style.zIndex = 3;

const context = canvas.getContext("2d");
const circleRadius = 30;
const circleNumber = 5;
var oriX = new Array(circleNumber);
var oriY = new Array(circleNumber);
for (var i = 0; i != circleNumber; i++) {
    oriX[i] = 80 * (i + 1);
    oriY[i] = 80 * (i + 1);
}


function showCircle(i) {
    context.beginPath();
    context.arc(oriX[i], oriY[i], circleRadius, 0, Math.PI * 2);
    context.fillStyle = "green";
    context.fill();
    context.strokeStyle = "red";
    context.lineWidth = 2;
    context.stroke();
}

var animationId;
function showCircles() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i != circleNumber; i++) {
        showCircle(i);
    }
}

animationId = requestAnimationFrame(showCircles); // to cancel, use cancelAnimationFrame(animationID);

var isDragging = false;
var whichDragging;
var newX;
var newY;
var offsetX;
var offsetY;

canvas.addEventListener("mousedown", function(event) {
    const rect = canvas.getBoundingClientRect();
    newX = event.clientX - rect.left;
    newY = event.clientY - rect.top;
    for (var i = 0; !isDragging && i != circleNumber; i++) {
        if ((newX - oriX[i]) * (newX - oriX[i]) + (newY - oriY[i]) * (newY - oriY[i]) <= circleRadius * circleRadius) {
            isDragging = true;
            whichDragging = i;
            offsetX = newX - oriX[i];
            offsetY = newY - oriY[i];
        }
    }
});

canvas.addEventListener("mousemove", function(event) {
    const rect = canvas.getBoundingClientRect();
    newX = event.clientX - rect.left;
    newY = event.clientY - rect.top;
    if (isDragging) {
        oriX[whichDragging] = newX - offsetX;
        oriY[whichDragging] = newY - offsetY;
        showCircles();
    }
});

canvas.addEventListener("mouseup", function(event) {
    isDragging = false;
});
