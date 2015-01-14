/*file for configuration of the http server*/

var app        = express();
var express    = require('express');
var fs         = require('fs');
var bodyParser = require('body-parser');

app.users = [
	{username: "iliailiev", fullname: 'Ilia Iliev', email: 'iliailiev@gmail.com', phone: '+3598873856241'},
	{username: "ivanivanov", fullname: 'Ivan Ivanov', email: 'ivanivanov@hotmail.com', phone: '+359899553322'},
	{username: "georgigeorgiev", fullname: 'Georgi Geogiev', email: 'georgigeorgiev@yahoo.com', phone: '+359879359478'}
];

app.set('view engine', 'jade'); // setup of main engine
app.set('views', './views'); // setup of main view folder

app.use(express.static(__dirname + '/public')); // setup of static folder
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

// dynamically include routes (Controller) 
fs.readdirSync('./controllers').forEach(function (file) { 
	if(file.substr(-3) == '.js') { 
		route = require('./controllers/' + file); 
		route.controller(app); 
	} 
});

app.use(app.route); 

app.listen(3000); // port for listening for client requests