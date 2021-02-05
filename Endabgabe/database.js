"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mongo = require("mongodb");
console.log("Database starting");
let databaseURL = "mongodb://localhost:27017";
let databaseName = "Test";
let db;
let players;
// running on heroku?
if (process.env.NODE_ENV == "production") {
    // databaseURL = "mongodb+srv://username:password@hostname:port/database";
    //databaseURL = "mongodb+srv://testuser:testpassword@eia2-57vpd.mongodb.net/eia2";
    databaseURL = "mongodb+srv://Regina:12345@reginashood-msrks.mongodb.net/zauberbild";
    //databaseURL = "mongodb+srv://reginashood-msrks.mongodb.net/<dbname>"
    databaseName = "zauberbild";
}
// try to connect to database, then activate callback "handleConnect" 
Mongo.MongoClient.connect(databaseURL, { connectTimeoutMS: 8000 }, handleConnect);
// connect-handler receives two standard parameters, an error object and a database client object
function handleConnect(_e, _client) {
    if (_e)
        console.log("Unable to connect to database, error: ", _e);
    else {
        console.log("Connected to database!");
        db = _client.db(databaseName);
        players = db.collection("zauberbildNeu");
    }
}
function insert(_doc) {
    players.insertOne(_doc, handleInsert);
}
exports.insert = insert;
function handleInsert(_e) {
    console.log("Database insertion returned -> " + _e);
}
function findAll(_callback) {
    var cursor = players.find();
    cursor.toArray(prepareAnswer);
    function prepareAnswer(_e, pointArray) {
        if (_e)
            _callback("Error" + _e);
        else
            // stringify creates a json-string, passed it back to _callback
            _callback(JSON.stringify(pointArray));
    }
}
exports.findAll = findAll;
//# sourceMappingURL=database.js.map