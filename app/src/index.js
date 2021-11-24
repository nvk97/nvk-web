var express = require('express');
var app = express();
var PORT = process.env.PORT || 8080;
app.get('/', function (req, res) { return res.send('Express + TypeScript Server'); });
app.listen(PORT, function () {
    console.log("\u26A1\uFE0F[server]: Server is running at http://localhost:".concat(PORT));
});
