var express = require('express'),
    app = express(),
    response = function (num, res) {
      var randomWait = Math.floor((Math.random() * 5000) + 1);
      console.log('Got request for Chapter ' + num + ' will wait ' + randomWait + 'ms before processing.');
      
      setTimeout(function () {
        console.log('Sending Chapter ' + num + ' now.');
        res.send('<b>CHAPTER ' + num + ':</b> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
      }, randomWait);
    };

app.get('/chapter/1', function (req, res) { response(1, res); });
app.get('/chapter/2', function (req, res) { response(2, res); });
app.get('/chapter/3', function (req, res) { response(3, res); });
app.get('/chapter/4', function (req, res) { response(4, res); });
app.get('/chapter/5', function (req, res) { response(5, res); });
app.get('/chapter/6', function (req, res) { response(6, res); });
app.get('/chapter/7', function (req, res) { response(7, res); });
app.get('/chapter/8', function (req, res) { response(8, res); });
app.get('/chapter/9', function (req, res) { response(9, res); });
app.get('/chapter/10', function (req, res) { response(10, res); });
app.use(express.static(__dirname + '/lab'));

var server = app.listen(3000, function () {
  console.log('Listening on port %d', server.address().port);
});