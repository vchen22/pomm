var taskData = require("../taskname.json");

exports.remove = function(req, res) {
    var task = req.param.taskID;
    res.render('todolist', taskData);
}