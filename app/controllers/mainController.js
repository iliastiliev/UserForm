/*main controller from MVC model*/

module.exports.controller = function(app){
	
	//rendered of index file and it loaded
	app.get('/', function(req, res){ 
		res.render('index', {users: app.users});
	});

	//creation of get request for delete of user by index
	app.get('/delete/:id', function(req, res){
		app.users.splice(req.params.id, 1);
		res.redirect('/');
	});

	//creation of post request for edit of all information for user
	app.post('/edit/:id', function(req, res){
		app.users[req.params.id] = req.body;
		res.redirect('/');
	});

	//creation of post request for create of user
	app.post('/create', function(req, res){
		app.users.push(req.body);
		res.redirect('/');
	});

	app.get('/cancel-adding', function(req, res){ 
		res.redirect('/');
	});

	//rendered of index file and show of information for finded users from creteria
	app.post('/search', function(req, res){
		var searchedUsers = [];
		
		//check for empty search creteria; if creteria exists the controller search for exact match
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