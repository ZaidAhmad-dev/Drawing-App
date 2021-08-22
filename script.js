const canvas = document.getElementById('canvas');
const increaseButton = document.getElementById('increase');
const decreaseButton = document.getElementById('decrease');
const sizeEl = document.getElementById('size');
const colorEl = document.getElementById('color');
const clearEl = document.getElementById('clear');

const ctx = canvas.getContext('2d');

let size = 10;
let color = colorEl.value;
let isPress = false;
let x = undefined;
let y = undefined;

canvas.addEventListener("mousedown", function (e) {
    isPress = true;
    x = e.offsetX;
    y = e.offsetY;
});

canvas.addEventListener("mouseup", function (e) {
    isPress = false;
    x = undefined;
    y = undefined;
});

canvas.addEventListener("mousemove", function(e) {
    e.preventDefault();
    if (isPress) {
    let x2 = e.clientX - canvas.offsetLeft;
    let y2 = e.clientY - canvas.offsetTop;
    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);
    x = x2;
    y = y2;
    }
});


function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();
}

increaseButton.addEventListener('click', function () {
    size += 5;
    if (size > 50) {
        size = 50;
    }
    sizeEl.innerText = size;
});

decreaseButton.addEventListener('click', function () {
    size -= 5;
    if (size < 5) {
        size = 5;
    }
    sizeEl.innerText = size;
});

colorEl.addEventListener('change', function () {
    color = colorEl.value;
});

clearEl.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});