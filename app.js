const express = require("express");
const mainRouter = require("./src/routes");
const path = require("path")
const app = express();
const PORT = 3002;


app.use(express.static(__dirname + '/public'));

app.use("/", mainRouter);


app.listen(PORT, () => {
  console.log("Server is listening on port : " + PORT);
});
