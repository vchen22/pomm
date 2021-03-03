/*
 * GET friends page.
 */ 
// create another view/file
// exports.viewFriends = function(req, res){
//     res.render('friends');
// };
var data = require('../friendlist.json');

exports.viewFriends = function(req, res) {
    res.render('friends', data);

    // res.render("friends", {
    //     "name": "Vicki Chen",
    //     "image": "profilepic.png",
    //     "id": "friend1"
    // });
};