const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27107";
const database = "BreakingBadCharacters";
const client = new MongoClient(url);

async function getData() {
  let result = await client.connect();
  let db = result.db(database);
  let collection = db.collection("posts");
  let response = await collection.find({}).toArray();
  console.log(response);
}

getData();
