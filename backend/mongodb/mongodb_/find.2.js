const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

MongoClient.connect(url, function(err, client) {
	if (err) throw err;
	console.log("Database created!");
	
	const db = client.db("shopper");
	db.collection("users").find({age: 33}).toArray((err, docs) => {
		if (err) throw err;
		console.log(docs);
		client.close();
	});
});