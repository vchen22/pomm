
/*
 * GET dummy friend profile.
 */ 
var data = require('../dummyfriend2.json');

exports.viewDummyFriend2 = function(req, res){
    res.render('dummyfriend2', data);
  };