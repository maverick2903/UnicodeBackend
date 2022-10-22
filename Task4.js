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
app.put("/", async (req, resp) => {
  let data = await dbConnect();
  let result = await data.updateOne(
    { name: req.body.name },
    { $set: req.body }
  );
  resp.send({ result: "updated" });
});
app.delete("/:char_id", async (req, resp) => {
  const data = await dbConnect();
  const result1 = await data.deleteOne({ char_id: Number(req.params.char_id) });
  resp.send(result1);
});
app.get("/", async (req, resp) => {
  let data = await dbConnect();
  data = await data.find().toArray();
  resp.send(data);
});
