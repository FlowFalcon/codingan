const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 500;
canvas.height = 500;

canvas.classList.add('grid');  // Add grid for visual guide

const grid = 50;
let count = 0;
let speed = 10;
let speedIncreaseRate = 0.5;

let snake = {
    x: 250,
    y: 250,
    dx: grid,
    dy: 0,
    cells: [],
    maxCells: 4
};

let apple = { x: 0, y: 0 };

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function resetGame() {
    snake.x = 250;
    snake.y = 250;
    snake.cells = [];
    snake.maxCells = 4;
    snake.dx = grid;
    snake.dy = 0;
    speed = 10;
    placeApple();
}

function placeApple() {
    apple.x = getRandomInt(0, canvas.width / grid) * grid;
    apple.y = getRandomInt(0, canvas.height / grid) * grid;
}

function update() {
    if (++count < speed) {
        return;
    }
    count = 0;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    snake.x += snake.dx;
    snake.y += snake.dy;

    if (snake.x < 0) snake.x = canvas.width - grid;
    else if (snake.x >= canvas.width) snake.x = 0;
    if (snake.y < 0) snake.y = canvas.height - grid;
    else if (snake.y >= canvas.height) snake.y = 0;

    snake.cells.unshift({x: snake.x, y: snake.y});

    if (snake.cells.length > snake.maxCells) {
        snake.cells.pop();
    }

    // Draw apple (more rounded with gradient effect)
    const gradient = ctx.createRadialGradient(apple.x + 25, apple.y + 25, 10, apple.x + 25, apple.y + 25, 25);
    gradient.addColorStop(0, "red");
    gradient.addColorStop(1, "darkred");
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(apple.x + grid / 2, apple.y + grid / 2, grid / 2.5, 0, Math.PI * 2);
    ctx.fill();

    // Draw snake (with rounded rectangles)
    ctx.fillStyle = 'lime';
    snake.cells.forEach((cell, index) => {
        ctx.beginPath();
        ctx.roundRect(cell.x, cell.y, grid, grid, [10]);  // Use round rectangle
        ctx.fill();

        if (cell.x === apple.x && cell.y === apple.y) {
            snake.maxCells++;
            placeApple();
            if (speed > 1) speed -= speedIncreaseRate;
        }

        for (let i = index + 1; i < snake.cells.length; i++) {
            if (cell.x === snake.cells[i].x && cell.y === snake.cells[i].y) {
                resetGame();
            }
        }
    });
}

function changeDirection(e) {
    if (e.key === 'ArrowLeft' && snake.dx === 0) {
        snake.dx = -grid;
        snake.dy = 0;
    } else if (e.key === 'ArrowUp' && snake.dy === 0) {
        snake.dx = 0;
        snake.dy = -grid;
    } else if (e.key === 'ArrowRight' && snake.dx === 0) {
        snake.dx = grid;
        snake.dy = 0;
    } else if (e.key === 'ArrowDown' && snake.dy === 0) {
        snake.dx = 0;
        snake.dy = grid;
    }
}

function handleButton(direction) {
    if (direction === "left" && snake.dx === 0) {
        snake.dx = -grid;
        snake.dy = 0;
    } else if (direction === "up" && snake.dy === 0) {
        snake.dx = 0;
        snake.dy = -grid;
    } else if (direction === "right" && snake.dx === 0) {
        snake.dx = grid;
        snake.dy = 0;
    } else if (direction === "down" && snake.dy === 0) {
        snake.dx = 0;
        snake.dy = grid;
    }
}

document.getElementById('left').addEventListener('click', () => handleButton("left"));
document.getElementById('up').addEventListener('click', () => handleButton("up"));
document.getElementById('right').addEventListener('click', () => handleButton("right"));
document.getElementById('down').addEventListener('click', () => handleButton("down"));
document.getElementById('reset').addEventListener('click', resetGame);

document.addEventListener('keydown', changeDirection);

function gameLoop() {
    requestAnimationFrame(gameLoop);
    update();
}

resetGame();
requestAnimationFrame(gameLoop);
