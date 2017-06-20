const express = require('express');
const mustExp = require('mustache-express');
const app = express();
let data = require('./data.js');

app.use(express.static('public'));

// app.get('/', function(req,res){
//   res.sendFile('user_dir',{root: __dirname});
// });

app.engine('mustache', mustExp());
app.set('views', './views');
app.set('view engine', 'mustache');

app.get('/user_dir', function(req,res){
  res.render('user_dir',data);
});

// {"id":1,"username":"hjuza0","name":"Hamlen Juza","avatar"
// :"https://robohash.org/blanditiisexercitationemquaerat.png?size=150x150&set=set1",
// "email":"hjuza0@blogger.com","university":"Pomor State University","job":"Engineer
// IV","company":"Stark, Feil and Bode","skills":["DMVPN","HDX","Rhino 3D"],"phone":"7-(397)813-7803",
// "address":{"street_num":"78226","street_name":"Ryan","city":"Kamennogorsk","state_or_province":null,
// "postal_code":"188950","country":"Russia"}}
// app.get('/news', function(req, res){
//      res.json(o);
// });

app.listen(3000, function(req,res){
  console.log('Your app is running on localhost:3000');
});
