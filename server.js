// three things
var express    = require("express"),
    bodyParser = require("bodyParser"),
    path       = require("path");

var express = express();
var PORT    = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.listen(PORT, () => {
  console.log('server started on ... port ',PORT);
});
