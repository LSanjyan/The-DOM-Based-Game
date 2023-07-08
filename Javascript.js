let basket = document.querySelector(".basket");
let balls = document.querySelector(".balls");
let basketLeft = parseInt(window.getComputedStyle(basket).getPropertyValue("left"));
let basketBottom = parseInt(window.getComputedStyle(basket).getPropertyValue("bottom"));
let score = 0;

function moveBasketLeft(){
    if (basketLeft > 0) {
        basketLeft -= 15;
        basket.style.left = basketLeft + 'px';
   }
}

function moveBasketRight(){
    if (basketLeft < 620) {
    basketLeft += 15;
    basket.style.left = basketLeft + 'px';

}
}

function control(e){
    if (e.key === "ArrowLeft") {
        moveBasketLeft();
    }
    if (e.key === "ArrowRight") {
        moveBasketRight();
    }
}

function generateBalls(){
    let ballBottom = 470;
    let ballLeft = Math.floor(Math.random() * 620);
    let ball = document.createElement('div');
    ball.setAttribute("class", "ball");
    balls.appendChild(ball);
    function fallDownBall(){
        if (ballBottom < basketBottom + 50 && ballBottom > basketBottom && 
            ballLeft > basketLeft - 30 && ballLeft < basketLeft + 80){
            balls.removeChild(ball);
            clearInterval(fallInterval);
            score++;
        }
        if (ballBottom < basketBottom){
            alert("Game over! Your Score is: "+score);
            clearInterval(fallInterval);
            clearTimeout(ballTimeout);
            location.reload();
        }
        ballBottom -= 5;
        ball.style.bottom = ballBottom + 'px';
        ball.style.left = ballLeft + 'px';
    }
    let fallInterval = setInterval(fallDownBall, 20);
    let ballTimeout = setTimeout(generateBalls, 2000);
}
generateBalls();

document.addEventListener("keydown", control);