var express = require('express');
var app = express();
var users = require('./users.js')


app.get('/users/user', users.findAll);
app.get('/users/search', users.findByName);
app.get('/users/role/:role', users.findByRole);

app.listen(3000);
console.log('Server is running at http://localhost:3000');