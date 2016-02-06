var chalk = require('chalk');
var express=require('express');
var mongoose=require('mongoose');


var db=require('./models/db.js');
var routes=require('./routes/route.js');
var bodyParser=require('body-parser');

var app=express();

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get('/', function(req,res) {
  res.sendFile('public/index.html');
});

app.get('/employee',routes.getEmployees);
app.get('/employee/:id',routes.getEmployee);

app.post('/employee',routes.addEmployee);
app.put('/employee/:id',routes.updateEmployee);
app.delete('/employee/:id',routes.deleteEmployee);

var port = process.env.PORT || 3000;

var server=app.listen(port,function(req,res){
    console.log(chalk.green("Catch the action at http://localhost:"+port));
});
