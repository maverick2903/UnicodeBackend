import { MongoClient } from "mongodb";
import express from "express";
const url = "mongodb://localhost:27017";
const database = "BreakingBadCharacters";
const client = new MongoClient(url);
async function dbConnect() {
  let result = await client.connect();
  let db = result.db(database);
  return db.collection("posts");
}

const app = express();
app.use(express.json());
app.get("/", async (req, resp) => {
  let data = await dbConnect();
  data = await data.find().toArray();
  resp.send(data);
});
app.post("/", async (req, resp) => {
  let data = await dbConnect();
  let result = await data.insertOne(req.body);
  resp.send(result);
});

app.listen(4000);
