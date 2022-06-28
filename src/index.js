const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const route = require("./route/route");

app.use(bodyParser.json());

mongoose
  .connect(
    "mongodb+srv://rohit_sonawane:SuperSu@cluster0.e9hjfiy.mongodb.net/group60Database"
  )
  .then(() => console.log("MongaDB connected"))
  .catch((error) => console.log(error));

app.use("/", route);

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log(`Express is running on ${port}`);
});
