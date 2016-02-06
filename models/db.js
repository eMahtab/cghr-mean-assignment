var chalk = require('chalk');
var mongoose = require( 'mongoose' );

var dbURI = 'mongodb://localhost/cghr';

//var dbURI = 'mongodb://your_username:your_password@ds043615.mongolab.com:43615/leavethemarks';

mongoose.connect(dbURI);

mongoose.connection.on('connected', function () {
  console.log(chalk.green('Mongoose connected to ' + dbURI));
});

mongoose.connection.on('error',function (err) {
  console.log(chalk.red('Mongoose connection error: ' + err));
});

mongoose.connection.on('disconnected', function () {
  console.log(chalk.red('Mongoose disconnected'));
});


var employeeSchema = new mongoose.Schema({
  email: {type: String},
  name: {type: String},
  dob: {type: Date},
  sex:{type:String},
  department:{type:String},
  age:{type:Number}
});

mongoose.model( 'Employee', employeeSchema );
