const app = require('express')();
const mongoose = require('mongoose');
const PORT = 3000;

mongoose.connect('mongodb://ayushkul:ayush123@ds011933.mlab.com:11933/user_medico')
    .then(listen).catch(function () {
    console.log("Connected");
});
function listen() {
    app.listen(PORT,)
}