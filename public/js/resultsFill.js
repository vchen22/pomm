var tasks = localStorage.getItem('totalTasks');
var minutes = localStorage.getItem('totalMinutes');

document.getElementById(
  'result-items'
).innerHTML = `<li>Worked for ${minutes} minutes</li>
<li>Completed ${tasks} tasks</li>
<li>Completed 1 session</li>`;
