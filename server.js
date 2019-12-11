const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", function(req, res) {
  res.sendFile(__dirname, "./index.html");
});

app.use(express.static("public"));
app.use("/portfolio", express.static("public"));
app.use("/images", express.static("public"));
app.use("/scripts", express.static("public"));

app.listen(3000, () => console.log(`App listening on http://localhost:3000`));
