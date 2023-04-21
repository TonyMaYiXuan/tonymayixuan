const canvas = document.createElement("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight * 2 / 3;
document.body.appendChild(canvas);
canvas.style.zIndex = 3;

const context = canvas.getContext("2d");
const circleRadius = 30;
const circleNumber = 5;
var oriX = new Array(circleNumber);
var oriY = new Array(circleNumber);
for (var i = 0; i != circleNumber; i++) {
    oriX[i] = 60 * (i + 1);
    oriY[i] = 60 * (i + 1);
}


function showCircle(i) {
    context.beginPath();
    context.arc(oriX[i], oriY[i], circleRadius, 0, Math.PI * 2);
    context.fillStyle = "green";
    context.fill();
    context.strokeStyle = "blue";
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

// do not allow two fingers at a time, use event.touches.length to implement

let debugElement = document.createElement("div");
debugElement.id = "debug";
debugElement.innerText = navigator.userAgent; // /Mobi/.test(navigator.userAgent) is true if mobile phone is used (at least for Android devices)
document.body.appendChild(debugElement);

function startTouchOrMouse(event, isTouch) {
    const rect = canvas.getBoundingClientRect();
    if (isTouch) {
        newX = event.touches[0].clientX - rect.left;
        newY = event.touches[0].clientY - rect.top;
    }
    else {
        newX = event.clientX - rect.left;
        newY = event.clientY - rect.top;
    }
    for (var i = 0; !isDragging && i != circleNumber; i++) {
        if ((newX - oriX[i]) * (newX - oriX[i]) + (newY - oriY[i]) * (newY - oriY[i]) <= circleRadius * circleRadius) {
            isDragging = true;
            whichDragging = i;
            offsetX = newX - oriX[i];
            offsetY = newY - oriY[i];
        }
    }
}

function moveTouchOrMove(event, isTouch) {
    const rect = canvas.getBoundingClientRect();
    if (isTouch) {
        newX = event.touches[0].clientX - rect.left;
        newY = event.touches[0].clientY - rect.top;
    }
    else {
        newX = event.clientX - rect.left;
        newY = event.clientY - rect.top;
    }
    if (isDragging) {
        oriX[whichDragging] = newX - offsetX;
        oriY[whichDragging] = newY - offsetY;
        showCircles();
    }
}


if ("ontouchstart" in window) {
    canvas.addEventListener("touchstart", function(event) {
        event.preventDefault(); // prevent scrolling on mobile devices // make sure event is defined
        startTouchOrMouse(event, true);
    });
    canvas.addEventListener("touchmove", function(event) {
        event.preventDefault(); // prevent scrolling on mobile devices // make sure event is defined
        moveTouchOrMove(event, true);
    });
    canvas.addEventListener("touchend", function(event) {
        event.preventDefault(); // prevent scrolling on mobile devices // make sure event is defined
        isDragging = false;
    });
}
else {
    console.log("Touch input not supported.");
    canvas.addEventListener("mousedown", function(event) {
        startTouchOrMouse(event, false);
    });
    canvas.addEventListener("mousemove", function(event) {
        moveTouchOrMove(event, false);
    });
    canvas.addEventListener("mouseup", function(event) {
        isDragging = false;
    });
}
