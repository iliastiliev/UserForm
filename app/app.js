var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.render('index', {message: "Hi from jade"})
})

app.set('view engine', 'jade')

app.set('view', './view')

app.listen(3000)