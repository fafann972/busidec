var express = require('express');
var parser = require('body-parser');
var routes = require('./router');
var cors = require('cors');

app = express();
port = process.env.PORT || 3000;

app.use(parser.urlencoded({
    extended: true
}));
app.use(parser.json());

routes(app);

app.use(cors());

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods", "PUT,GET,POST,DELETE");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });


app.listen(port);

console.log('todo list RESTful API server started on: ' + port);