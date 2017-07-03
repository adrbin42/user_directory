const express = require('express');
const mustExp = require('mustache-express');
const app = express();
let data = require('./data.js');

app.use(express.static('public'));

app.engine('mustache', mustExp());
app.set('views', './views');
app.set('view engine', 'mustache');

app.get('/user_dir', function(req,res){
  res.render('user_dir',data);
});

app.get('/user/:id', function(req,res){
  console.log(req.params.id);
  let i = req.params.id -1;
  res.render('user',data.users[i]);
});

app.listen(3000, function(req,res){
  console.log('Your app is running on localhost:3000');
});
