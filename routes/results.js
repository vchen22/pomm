/*
 * GET profile page.
 */ 
// create another view/file
exports.viewResults = function(req, res){
    res.render('results');

    // res.render("results", {
    //     "hours": "2",
    //     "tasks": "2"
    // });
};