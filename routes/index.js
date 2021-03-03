
/*
 * GET home page.
 */ 

// exports.view = function(req, res){
//   res.render('index');
// };

var data = require("../pomm-counter.json");
exports.view = function(req, res) {
  res.render('index', data);
}