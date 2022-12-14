import fetch from "node-fetch";
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
app.get("/", async (req, resp) => {
  let data = await dbConnect();
  data = await data.find().toArray();
  resp.send(data);
});

app.get("/bettercallsaul", async (req, resp) => {
  let bdata = await dbConnect();
  bdata = await bdata.find({ category: "Better Call Saul" }).toArray();
  resp.send(bdata);
});
app.listen(3000);
