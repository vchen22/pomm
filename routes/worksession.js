
/*
 * GET work session.
 */ 

var data = require('../taskname.json');

exports.viewWorkSession = function(req, res){
    console.log('hello');
    console.log(data);
    res.render('worksession', data);
};