let express = require('express');
let bodyParser = require('body-parser');
let path = require('path');
let expressValidator = require('express-validator')
let mongojs = require('mongojs');
let db = mongojs('workers', ['users']);
let app = express();

/*
let logger = function(req, res, next){
	console.log('logging..');
	next();

}
*/
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

//Set Static path
app.use(express.static(path.join(__dirname, 'public')))


//Global

app.use(function (req, res, next){
	res.locals.errors = null;
	next();
})




/*let people = [
	{
		name: 'Jefff',
		age: 30,
	},
	{
		name: 'Harry',
		age: 25,
	},
	{
		name: 'John',
		age: 40
	}
]
*/

//Express Validator
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));


/*let users = [
	{	id: 1,
		first_name: 'John',
		last_name: 'Gregory',
		email: 'john@fuckyou'
	},
	{	id: 2,
		first_name: 'Lucy',
		last_name: 'Oly',
		email: 'john@fuckandyou'
	},
	{	id: 3,
		first_name: 'Lidia',
		last_name: 'Soriet',
		email: 'john@fucktoyou'
	}
]*/

app.get('/',  function(req, res){

	db.users.find(function (err, docs) {
		console.log(docs);
		res.render('index', {
			title: 'Customers',
			users: docs
		})
	})
	//res.json(people)
}); 


app.post('/users/add', function (req, res){

	req.checkBody('first_name', 'First name is Required!').notEmpty();
	req.checkBody('last_name', 'last name is Required!').notEmpty();
	req.checkBody('email', 'email is Required!').notEmpty();
	
	let errors = req.validationErrors();

	if(errors) {

		res.redirect('/')



		res.render('index', {
			title: 'Customers',
			users: users,
			errors: errors
		});
	}
	else {
		let newUser = {
		first_name: req.body.first_name,
		last_name: req.body.last_name,
		email: req.body.email
		}
		console.log('SUCCESS');
	
	db.users.insert(newUser, function (err, result) {
			if(err){
				console.log(err);
			}

			res.redirect('/')
	});

	}


	//console.log(req.body.first_name);
});

app.listen(3000, function() {
		console.log('Server Started on Port 3000...')
	// body...
});