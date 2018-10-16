const app = require('express')();
const mongoose = require('mongoose');
const PORT = 3000;
const BODY_PARSER = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(BODY_PARSER.urlencoded({extended: false}))

// parse application/json
app.use(BODY_PARSER.json())
require('./managers/routes')(app)

mongoose.connect('<connectionLink>') //connectionLink: from mLab
    .then(listen).catch(function (e) {
    console.log(e);
});

function listen() {
    console.log('connected')
}

app.listen(PORT, function () {
});