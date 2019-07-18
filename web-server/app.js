var express = require('express');
var app = express();
var log4js = require('log4js');
log4js.configure('./config/log4js.json');

var logger = log4js.getLogger('index');
// logger.info("11111111");

// var indexRouter = require("./routes/index");

// app.configure(function(){
//   app.use(express.methodOverride());
//   app.use(express.bodyParser());
//   app.use(app.router);
//   app.set('view engine', 'jade');
//   app.set('views', __dirname + '/public');
//   app.set('view options', {layout: false});
//   app.set('basepath',__dirname + '/public');
// });
//
// app.configure('development', function(){
//   app.use(express.static(__dirname + '/public'));
//   app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
// });
//
// app.configure('production', function(){
//   var oneYear = 31557600000;
//   app.use(express.static(__dirname + '/public', { maxAge: oneYear }));
//   app.use(express.errorHandler());
// });

app.post('/postReport', function (req, res) {
  logger.info(req.body);
  // logger.debug('hello world');
  res.send('hello, express');
});
// app.get('/postReport2', function (req, res) {
//   res.send('hello, express');
// });
console.log("web-server start success!");

app.listen(3001);
