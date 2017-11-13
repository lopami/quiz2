var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/quiz2";
var db;

MongoClient.connect(url, function (err, database) {
    if (err) throw err;
    db = database;
    console.log("Connected to " + url);
});
function findAll(req, res) {
    //Get data from mongoDB
    var query = {};
    db.collection("users").find(query).toArray(
        function (err, result) {
            if (err) throw err;
            console.log(result);
            res.json(result);
        });
}

function findByName(req, res) {
    var first_name = req.query.first_name;
    var query = { first_name: first_name };
    console.log(first_name);
    db.collection("users").find(query).toArray(
        function (err, item) {
            console.log(item);
            res.send(item);
        });
};

function findByRole(req, res) {
    var role = req.param('role');
    console.log(role);
    db.collection("users").find({
        role: role
    }).toArray(
        function (err, result) {
            if (err) throw err;
            // console.log(result);
            
            res.json(result);
        });
};

module.exports = {
    findAll: findAll,
    findByName: findByName,
    findByRole: findByRole
};