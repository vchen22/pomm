/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars');

var index = require('./routes/index');
const { viewFriends } = require('./routes/friends');
const { viewProfile } = require('./routes/profile');
const { setTimer } = require('./routes/settimer');
const { viewWorkSession } = require('./routes/worksession');
const { viewToDoList } = require('./routes/todolist');
const { add } = require('./routes/addTask');
const { remove } = require('./routes/removeTask');
const { viewDummyFriend1 } = require('./routes/dummyfriend1');
const { viewDummyFriend2 } = require('./routes/dummyfriend2');
const { viewResults } = require('./routes/results');
const { viewSignIn } = require('./routes/signin');
const { viewLogOut } = require('./routes/logout');
const { viewSignUp } = require('./routes/signup');
// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// app.get('/', index.view);
// app.get('/signin', viewSignIn);
app.get('/', viewSignIn);
app.get('/signup', viewSignUp);
app.get('/home', index.view);
app.get('/friends', viewFriends);
app.get('/dummyfriend1', viewDummyFriend1);
app.get('/dummyfriend2', viewDummyFriend2);
app.get('/profile', viewProfile);
app.get('/todolist', viewToDoList);
app.get('/settimer', setTimer);
app.get('/worksession', viewWorkSession);
app.get('/results', viewResults);
app.get('/logout', viewLogOut);
app.get('/addTask', add);
app.get('/removeTask', remove);

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
