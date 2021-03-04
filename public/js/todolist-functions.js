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

// var taskData = $.get("/removeTask", callback);
// var taskData = require("../../taskname.json");
// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
    console.log(div);
    // var toDelete = close[i].id;
    console.log("delete " + div.id);

    for (var j = 0; j < taskData.length; j++) {
        if (taskData[i].id == div.id) {
            taskData.splice(j, 1);
            break;
        }
    }
    console.log(taskData);
  }
}

function callback(result){
    console.log(result);
}

// function removeTask() {
//     $("span").click(function () {
//         var toDelete = this.id;

//         for (var i = 0; i < taskData.length; i++) {
//             if (taskData[i].id == toDelete) {
//                 taskData.splice(i, 1);
//                 break;
//             }
//         }
//     });

//     console.log(taskData);
// }
// Create a new list item when clicking on the "Add" button
// function newTask() {
//   var li = document.createElement("li");
//   li.classList.add('shadow');
//   var inputValue = document.getElementById("task-input").value;
//   var t = document.createTextNode(inputValue);
//   li.appendChild(t);
//   if (inputValue === '') {
//     alert("You must write something!");
//   } else {
//     document.getElementById("task-list").appendChild(li);
//   }
//   document.getElementById("task-input").value = "";
//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   li.appendChild(span);
//   for (i = 0; i < close.length; i++) {
//     close[i].onclick = function() {
//       var div = this.parentElement;
//       div.style.display = "none";
//     }
//   }
// }