require("dotenv").config();
var ip = require("ip");
var express = require("express");
var app = express();

var cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/api/hello", function (req, res) {
  res.json({ greeting: "hello API" });
});

app.get("/api/whoami", function (req, res) {
  const ipAdress = ip.address();
  const language = req.headers["accept-language"];
  const software = req.headers["user-agent"];
  res.json({ ipaddress: ipAdress, language: language, software: software });
});

app.listen(3000);
console.log("app app is listening on port 3000");
