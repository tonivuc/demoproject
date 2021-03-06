const express = require("express");
var fileupload = require("express-fileupload");
const { cookieJwtAuth } = require("./middleware/cookieJwtAuth");
const app = express();
const port = 5000;

console.log("Runnign dev server backend!");

app.use(express.json());

//For multipart/form data
app.use(fileupload());

//Add db connection as middleware
//Source: https://stackoverflow.com/questions/45658061/asynchronous-call-of-mysql-on-node-js
app.use(async (req, res, next) => {
  if (!app.db) {
    const dbCon = require("./database2");
    app.db = await dbCon;
  }
  req.db = app.db;
  return next();
});

app.post("/", (req, res) => {
  res.send(404);
});

app.use(
  "/api/lunch-wishes",
  cookieJwtAuth,
  require("./routes/api/lunchWishes")
);
app.use("/api/files", require("./routes/api/files"));
app.use("/auth/register", require("./routes/auth/register"));
const loginModule = require("./routes/auth/login");
app.use("/auth/login", loginModule.router);
app.listen(port);
