// Create a "close" button and append it to each list item
var taskList = document.getElementsByTagName("LI");
var i;
for (i = 0; i < taskList.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  taskList[i].appendChild(span);
}

// var removeTask = require('./routes/removeTask');
// var taskData = require("../../taskname.json");
// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
    console.log(div);
    console.log("delete task #" + div.id);
    // $.getJSON("/taskname", function(task){
    //   console.log("in getjson")
    // });

    // for (var j = 0; j < taskData.length; j++) {
    //     if (taskData[i].id == div.id) {
    //         taskData.splice(j, 1);
    //         break;
    //     }
    // }
    // console.log(taskData);
  }
}

function callback(result){
    console.log(result);
}
