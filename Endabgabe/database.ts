import * as Mongo from "mongodb";
console.log("Database starting");

let databaseURL: string = "mongodb://localhost:27017";
let databaseName: string = "Test";
let db: Mongo.Db;
let players: Mongo.Collection;

// running on heroku?
if (process.env.NODE_ENV == "production") {
    databaseURL = "mongodb+srv://jan:1234@cluster0.3yq4i.mongodb.net/Firework";
    //databaseURL = "mongo "mongodb+srv://cluster0.3yq4i.mongodb.net/Firework" --username jan"
    //databaseURL = "mongo "mongodb+srv://jan:1234@cluster0.3yq4i.mongodb.net/Firework" --username jan"
    databaseName = "fireworks";
}

// try to connect to database, then activate callback "handleConnect" 
Mongo.MongoClient.connect(databaseURL, { connectTimeoutMS: 8000 }, handleConnect);

// connect-handler receives two standard parameters, an error object and a database client object
function handleConnect(_e: Mongo.MongoError, _client: Mongo.MongoClient): void {
    if (_e)
        console.log("Unable to connect to database, error: ", _e);
    else {
        console.log("Connected to database!");
        db = _client.db(databaseName); 
        players = db.collection("fireworks");
    }
}

export function insert(_doc: Object): void {
    players.insertOne(_doc, handleInsert);
}


function handleInsert(_e: Mongo.MongoError): void {
    console.log("Database insertion returned -> " + _e);
}


export function findAll(_callback: Function): void {
    var cursor: Mongo.Cursor = players.find();
    cursor.toArray(prepareAnswer);


    function prepareAnswer(_e: Mongo.MongoError, pointArray: Object[]): void {
        if (_e)
            _callback("Error" + _e);
        else
            // stringify creates a json-string, passed it back to _callback
            _callback(JSON.stringify(pointArray));
    }
}