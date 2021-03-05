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
    minReturn;
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
  // console.log(start.style.display);
  if (start.style.display === 'block') {
    // console.log('start button pressed, pause should display');
    start.style.display = 'none';
    pause.style.display = 'block';
  } else if (pause.style.display === 'block') {
    // switch back
    // console.log('pause button pressed, break should display');
    breaktime = time.innerHTML;
    breakBtn.style.display = 'block';
    pause.style.display = 'none';
    clearTimeout(t);
  } else if (breakBtn.style.display === 'block') {
    start.style.display = 'block';
    pause.style.display = 'none';
    breakBtn.style.display = 'none';
    time.innerHTML = '00:00:00';
    seconds = 0;
    minutes = 0;
    hours = 0;
  }
}


function help() {
  alert(
    'Start the session and cross off tasks as you complete them. \r\n' +
      'When you are feeling mentally fatigued or get distracted, pause the session and take a break for the amount of time displayed. \r\n' +
      "End the session when you've completed all tasks!"
  );
}

function breakSession() {
  tmp = breaktime.split(':');
  minReturn = +tmp[0] * 60 + +tmp[1];

  alert('Take a break for ' + Math.round(minReturn / 5) + ' minutes!');
}

function init() {
  /* Start button */
  start.style.display = 'block';
  pause.style.display = 'none';
  start.addEventListener('click', timer);
  start.addEventListener('click', toggle);
  pause.addEventListener('click', toggle);
  info.addEventListener('click', help);
  breakBtn.addEventListener('click', breakSession);
  breakBtn.addEventListener('click', toggle);

  $("li").click(function() {
    if ($(this).css("text-decoration") == "none solid rgb(33, 37, 41)") {
      $(this).css("text-decoration", "line-through");
    }
    else {
      $(this).css("text-decoration", "none");
    }
  });
}

// wait for DOM to load first
window.addEventListener('DOMContentLoaded', init);
