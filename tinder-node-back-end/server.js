import express from "express";
import mongooes from "mongoose";
import cors from "cors";

// dbCard make module import
import Cards from "./dbCards.js";

// TODO: app config --->
const app = express();
const port = process.env.PORT || 8008;

const connection_url =
  "mongodb+srv://admin:PSaj37xZH0XWfQ5Z@cluster0.ulyon.mongodb.net/<tinderDB>?retryWrites=true&w=majority";

// TODO: middleware --->
app.use(express.json());
app.use(cors());

// TODO: db config --->
mongooes.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

// TODO: api endpoint --->
app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

app.post("/tinder/cards", (req, res) => {
  const dbCard = req.body;

  Cards.create(dbCard, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/tinder/cards", (req, res) => {
  Cards.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

// TODO: listener --->
app.listen(port, (e) => {
  if (e) {
    console.log(e);
  } else {
    console.log(`Listening on localhost: http://localhost:${port}`);
  }
});
