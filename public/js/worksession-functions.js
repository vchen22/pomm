{   var start = document.getElementById('start');
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
    console.log(start.style.display);
    if ( start.style.display === "block" ) {
        console.log('start button pressed, pause should display');
        start.style.display = "none";
        pause.style.display = "block";
    } else { // switch back
        console.log('pause button pressed, start should display');
        start.style.display = "block";
        pause.style.display = "none";
        clearTimeout(t);
    }
}

function init(){
    /* Start button */
    start.style.display = "block";
    pause.style.display = "none";
    start.addEventListener('click', timer);
    start.addEventListener('click', toggle);
    pause.addEventListener('click', toggle);
}

// wait for DOM to load first
window.addEventListener('DOMContentLoaded', init);