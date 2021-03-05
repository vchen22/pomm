// var taskData = require("../taskname.json");
var taskCount = 0;

exports.add = function(req, res) {
    // taskCount++;
    // var newTask = {
    //     "taskname": req.query.taskname,
    //     "taskid": taskCount
    // };
    // taskData.tasklist.push(newTask);

    res.render('todolist');
}