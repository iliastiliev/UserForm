module.exports.controller = function(app){
	app.get('/', function(req, res){ 
		res.render('index', {users: app.users});
	});

	app.get('/delete/:id', function(req, res){
		app.users.splice(req.params.id, 1);
		res.redirect('/');
	});

	app.post('/edit/:id', function(req, res){
		app.users[req.params.id] = req.body;
		res.redirect('/')
	})

	app.post('/create', function(req, res){
		app.users.push(req.body);
		res.redirect('/')
	})

};