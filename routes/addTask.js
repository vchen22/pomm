var taskData = require("../taskname.json");
var taskCount = 0;

exports.add = function(req, res) {
    console.log("in addtask.js")
    taskCount++;
    var newTask = {
        "taskname": req.query.taskname,
        "taskid": taskCount
    };
    taskData.tasklist.push(newTask);
    console.log(taskData);

    res.render('todolist', taskData);
}