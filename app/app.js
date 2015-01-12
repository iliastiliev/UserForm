var express = require('express');
var app = express();
var fs = require('fs');

app.set('view engine', 'jade')
app.set('views', './views')

// dynamically include routes (Controller) 
fs.readdirSync('./controllers').forEach(function (file) { 
	if(file.substr(-3) == '.js') { 
		route = require('./controllers/' + file); 
		route.controller(app); 
	} 
});

app.use(app.route);
app.listen(3000);