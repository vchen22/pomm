/*
 * GET to do list page.
 */
// create another view/file
// var taskData = require('../taskname.json');

exports.viewToDoList = function (req, res) {
  // console.log('in todolist.js');
  // console.log(taskData);
  res.render('todolist');
  //res.json(taskData);
};
