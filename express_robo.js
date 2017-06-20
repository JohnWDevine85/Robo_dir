const express = require('express')
const path = require('path')
const mustacheExpress = require('mustache-express')
const data = require('./data.js')

const app = express()

app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')
app.use(express.static(__dirname + '/public'))

app.get('/robo/index', function(req, res) {

  res.render('robo', {data: data.users})
})
app.get('/robo/index/user', function(req, res) {

  res.render('robo', {otherdata: data.users})
})
app.listen(3000, function() {
  console.log('Successfully started express application!')
})
// "id":1,
// "username":"hjuza0",
// "name":"Hamlen Juza",
// "avatar":"https://robohash.org/blanditiisexercitationemquaerat.png?size=150x150&set=set1",
// "email":"hjuza0@blogger.com",
// "university":"Pomor State University",
// "job":"Engineer IV",
// "company":"Stark, Feil and Bode",
// "skills":["DMVPN","HDX","Rhino 3D"],
// "phone":"7-(397)813-7803",
// "address":{
//   "street_num":"78226",
//   "street_name":"Ryan",
//   "city":"Kamennogorsk",
//   "state_or_province":null,
//   "postal_code":"188950",
//   "country":"Russia"
// }
