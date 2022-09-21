import fetch from "node-fetch";
import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/BreakingBadCharacters");

const postSchema = new mongoose.Schema({
  char_id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  birthday: {
    type: String,
    required: true,
  },
  occupation: {
    type: Array,
    required: true,
  },

  img: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  nickname: {
    type: String,
    required: true,
  },
  appearance: {
    type: Array,
    required: true,
  },
  portrayed: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  better_call_saul_appearance: {
    type: Array,
    required: true,
  },
});

const Post = mongoose.model("Post", postSchema);

async function getApi() {
  const response = await fetch("https://www.breakingbadapi.com/api/characters");
  const charactersApi = await response.json();

  for (let i = 0; i < charactersApi.length; i++) {
    const post = new Post({
      char_id: charactersApi[i]["char_id"],
      name: charactersApi[i]["name"],
      birthday: charactersApi[i]["birthday"],
      occupation: charactersApi[i]["occupation"],
      img: charactersApi[i]["img"],
      status: charactersApi[i]["status"],
      nickname: charactersApi[i]["nickname"],
      appearance: charactersApi[i]["appearance"],
      portrayed: charactersApi[i]["portrayed"],
      category: charactersApi[i]["category"],
      better_call_saul_appearance:
        charactersApi[i]["better_call_saul_appearance"],
    });
    post.save();
  }
}

getApi();
