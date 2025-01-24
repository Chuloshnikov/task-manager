import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";

const app = express();

dotenv.config();

const port = process.env.PORT || 8080;

app.use(bodyParser.json());

//________________________________________________________

app.get("/", (req, res) => {
  res.send("Hello server!");
});

app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
