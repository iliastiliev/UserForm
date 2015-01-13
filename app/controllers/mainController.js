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

	app.post('/search', function(req, res){
		var searchedUsers = [];
		console.log(req.body['search-content']);
		if(req.body['search-content'] === ""){
			res.render('index', {users: app.users});
		}
		else {
			app.users.forEach(function(user){
				var user_info = user.username+" "+user.fullname+" "+user.email+" "+user.phone;

				if(user_info.indexOf(req.body['search-content']) != -1) 
					searchedUsers.push(user);
			});

			res.render('index', {users:searchedUsers});
		}
	})

};