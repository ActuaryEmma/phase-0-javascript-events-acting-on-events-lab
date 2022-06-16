// Your code here
const dodger = document.getElementById("dodger")
dodger.style.background = "#FF69B4";
dodger.style.bottom = "0px"
document.addEventListener("keydown", function (event) {
    if(event.key === "ArrowLeft") {
        moveDodgerLeft();
    }
})
document.addEventListener("keydown", function (event) {
    if(event.key === "ArrowRight") {
        moveDodgerRight();
    }
})
document.addEventListener("keydown", function (event) {
    if(event.key === "ArrowUp") {
        moveDodgerUp();
    }
})
document.addEventListener("keydown", function (event) {
    if(event.key === "ArrowDown") {
        moveDodgerDown();
    }
})
function moveDodgerLeft () {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    if(left > 0) {
        dodger.style.left = `${left - 5}px`;
    }
}



function moveDodgerRight () {
    let rightNumbers = dodger.style.left.replace("px", "");
    let right = parseInt(rightNumbers, 10);
    if(right < 360) {
        dodger.style.left = `${right + 5}px`;
    }
}

function moveDodgerUp () {
    let upNumbers = dodger.style.bottom.replace("px", "");
    let up = parseInt(upNumbers, 10);
    if(up < 380) {
        dodger.style.bottom = `${up + 5}px`;
    }
}

function moveDodgerDown () {
    let bottomNumbers = dodger.style.bottom.replace("px", "");
    let bottom = parseInt(bottomNumbers, 10);
    if(bottom > 0) {
        dodger.style.bottom = `${bottom - 5}px`;
    }
}

