import mongooes from "mongoose";

const cardSchema = mongooes.Schema({
  name: String,
  img_url: String,
});

export default mongooes.model("cards", cardSchema);
