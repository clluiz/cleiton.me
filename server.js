var express = require("express");
var app = express()
var router = express.Router();
var path = __dirname + '/';
app.use(express.static(path))

router.use(function (req, res, next) {
    console.log("/" + req.method);
    next();
});

router.get("/", function (req, res) {
    res.sendFile(path + "index.html");
});

app.use("/", router);

app.listen(3009, function () {
    console.log("Live at Port 3009");
});


