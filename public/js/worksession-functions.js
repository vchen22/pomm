{
  var start = document.getElementById('start');
  var pause = document.getElementById('pause');
  var info = document.getElementById('info');
  var breakBtn = document.getElementById('break');
  var time = document.getElementById('stopwatch'),
    seconds = 0,
    minutes = 0,
    hours = 0,
    totalMinutes = 0,
    t,
    breaktime,
    tmp,
    minReturn,
    btn;
}

function add() {
  seconds++;
  if (seconds >= 60) {
    seconds = 0;
    totalMinutes++;
    minutes++;
    if (minutes >= 60) {
      minutes = 0;
      hours++;
    }
  }
  time.innerHTML =
    (hours ? (hours > 9 ? hours : '0' + hours) : '00') +
    ':' +
    (minutes ? (minutes > 9 ? minutes : '0' + minutes) : '00') +
    ':' +
    (seconds > 9 ? seconds : '0' + seconds);
  timer();
}

function timer() {
  t = setTimeout(add, 1000);
}

function toggle() {
  if (start.style.display === 'block') {
    // console.log('start button pressed, pause should display');
    start.style.display = 'none';
    pause.style.display = 'block';
  } else if (pause.style.display === 'block') {
    // console.log('pause button pressed, break should display');
    breaktime = time.innerHTML;
    console.log(breaktime);
    pause.style.display = 'none';
    start.style.display = 'block';
    clearTimeout(t);
    breakSession();
  }
}

function breakSession() {
  tmp = breaktime.split(':');
  minReturn = +tmp[0] * 60 + +tmp[1];
}

function breakPopUpFxn(){
  var displayBreakTime = Math.round(minReturn / 5);
  // console.log(displayBreakTime);
  if(Number.isNaN(displayBreakTime) || displayBreakTime == 0){
    $("#dialogText").text("Tip: Work a bit longer before you take a break!");
  } else {
    $("#dialogText").text("Take a break for " + displayBreakTime + " minutes!");
    $("#dialogButton").text("Done with break, back to work!");
    time.innerHTML = '00:00:00';
    seconds = 0;
    minutes = 0;
    hours = 0;
  }
  $("#pauseDialog").show();
}

function closeBreakPopUp(){
  document.getElementById("pauseDialog").close();
  $("#pauseDialog").css("display", "none");
}

function openInfo(){
  $("#infoDialog").show();
}

function closeInfoPopUp(){
  document.getElementById("pauseDialog").close();
  $("#infoDialog").css("display", "none");
}

function init() {
  /* Start button */
  start.style.display = 'block';
  pause.style.display = 'none';
  start.addEventListener('click', timer);
  start.addEventListener('click', toggle);
  pause.addEventListener('click', toggle);
  $("#pause").click(breakPopUpFxn);
  $("#dialogButton").click(closeBreakPopUp);
  $("#infoBtn").click(openInfo);
  $("#infoDialogButton").click(closeInfoPopUp);
}

// wait for DOM to load first
window.addEventListener('DOMContentLoaded', init);
