let game = document.querySelector(".game");
let hands = document.querySelector(".hands");
let balls = document.querySelector(".balls");
let handsLeft = parseInt(window.getComputedStyle(hands).getPropertyValue("left"));
let handsBottom = parseInt(window.getComputedStyle(hands).getPropertyValue("bottom"));

function moveHandsLeft(){
    handsLeft -= 15;
    hands.style.left = handsLeft + 'px';

}
function moveHandsRight(){
    handsLeft += 15;
    hands.style.left = handsLeft + 'px';
}
function control(e){
    if (e.key == "ArrowLeft") {
        moveHandsLeft();
    }
    if (e.key == "ArrowRight") {
        moveHandsRight();
}
}

document.addEventListener("keydown", control);
