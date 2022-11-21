const express = require("express");
const route = require("./routes/route.js");

const { default: mongoose } = require("mongoose");
const app = express();

app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://rohit_sonawane:SuperSu@cluster0.e9hjfiy.mongodb.net/group60Database"
  )
  .then(() => console.log("MongaDB connected"))
  .catch((error) => console.log(error));
app.use("/", route);

app.all("/**", (req, res) => {
  res.status(404).send({ status: false, message: "Page Not Found!" });
});

const port = process.env.PORT || 3001;
app.listen(port, function () {
  console.log(`Express is running on ${port}`);
});
