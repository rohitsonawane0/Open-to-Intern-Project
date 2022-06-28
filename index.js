const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get("/", (req, res) => {
  console.log("Test is working");
  res.status(200).send("Test is working");
});

const port = process.env.port || 3000;
app.listen(port, function () {
  console.log(`Express is running on ${port}`);
});
