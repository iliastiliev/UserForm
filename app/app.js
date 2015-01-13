var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');

app.set('view engine', 'jade');
app.set('views', './views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.users = [
	{username: "iliailiev", fullname: 'Ilia Iliev', email: 'iliailiev@gmail.com', phone: '+3598873856241'},
	{username: "ivanivanov", fullname: 'Ivan Ivanov', email: 'ivanivanov@hotmail.com', phone: '+359899553322'},
	{username: "georgigeorgiev", fullname: 'Georgi Geogiev', email: 'georgigeorgiev@yahoo.com', phone: '+359879359478'}
];

// dynamically include routes (Controller) 
fs.readdirSync('./controllers').forEach(function (file) { 
	if(file.substr(-3) == '.js') { 
		route = require('./controllers/' + file); 
		route.controller(app); 
	} 
});

app.use(app.route);

app.listen(3000);