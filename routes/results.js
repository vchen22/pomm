/*
 * GET profile page.
 */ 
// create another view/file
// exports.viewResults = function(req, res){
//     res.render('results');
// };

var data = require('../results-nums.json')

exports.viewResults = function(req, res) {
    res.render('results', data);
};