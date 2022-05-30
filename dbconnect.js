var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
const database='mydb'
const client= new MongoClient(url)

async function getData()
{
  let result= await client.connect();
  let db= result.db('mydb');
}


/*
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.createCollection("customers", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});
*/