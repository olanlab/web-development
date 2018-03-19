const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

// CONNECT
MongoClient.connect(url, function(err, client) {
	if (err) throw err;
	console.log("Database created!");
	
	// use shopper
	const db = client.db("shopper");
	db.collection("users").findOne({status: "pending"}, function(err, result) {
		if (err) throw err;
		console.log(result);

		client.close();
	});
});