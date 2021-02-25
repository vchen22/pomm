
/*
 * GET dummy friend profile.
 */ 
var data = require('../dummyfriend1.json');

exports.viewDummyFriend1 = function(req, res){
    res.render('dummyfriend1', data);
  };