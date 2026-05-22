const cube = document.getElementById("cube");
const gameArea = document.getElementById("gameArea");
const scoreText = document.getElementById("score");

let score = 0;

function moveCube() {

    const maxX = gameArea.clientWidth - 65;
    const maxY = gameArea.clientHeight - 65;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    cube.style.left = randomX + "px";
    cube.style.top = randomY + "px";

}

cube.addEventListener("click", () => {

    score++;

    scoreText.innerText = "Score: " + score;

    cube.style.transform = "scale(.8)";

    setTimeout(() => {

        cube.style.transform = "scale(1)";

    }, 100);

    moveCube();

});

setInterval(moveCube, 1000);

moveCube();
