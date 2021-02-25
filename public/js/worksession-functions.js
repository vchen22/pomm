{   
    var strike1 = document.getElementById('task1');
    var strike2 = document.getElementById('task2');
    var strike3 = document.getElementById('task3');
    var start = document.getElementById('start');
    var pause = document.getElementById('pause');
    var time = document.getElementById('stopwatch'),
    seconds = 0, minutes = 0, hours = 0,
    t;
}

function add() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
    time.innerHTML = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
    timer();
}

function timer() {
    t = setTimeout(add, 1000);
}

function toggle() {
    // console.log(start.style.display);
    if ( start.style.display === "block" ) {
        // console.log('start button pressed, pause should display');
        start.style.display = "none";
        pause.style.display = "block";
    } else { // switch back
        // console.log('pause button pressed, start should display');
        start.style.display = "block";
        pause.style.display = "none";
        clearTimeout(t);
    }
}

function lineThru1(){
    if(strike1.style.textDecoration == "line-through"){
        strike1.style.textDecoration = "none";
    } else {
    strike1.style.textDecoration = "line-through";
    }
}

function lineThru2(){
    if(strike2.style.textDecoration == "line-through"){
        strike2.style.textDecoration = "none";
    } else {
    strike2.style.textDecoration = "line-through";
    }
}

function lineThru3(){
    if(strike3.style.textDecoration == "line-through"){
        strike3.style.textDecoration = "none";
    } else {
    strike3.style.textDecoration = "line-through";
    }
}


function init(){
    /* Start button */
    start.style.display = "block";
    pause.style.display = "none";
    start.addEventListener('click', timer);
    start.addEventListener('click', toggle);
    pause.addEventListener('click', toggle);
    strike1.addEventListener('click', lineThru1);
    strike2.addEventListener('click', lineThru2);
    strike3.addEventListener('click', lineThru3);
}

// wait for DOM to load first
window.addEventListener('DOMContentLoaded', init);