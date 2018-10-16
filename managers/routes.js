const cors = require('cors');
const user = require('../modules/user/userController');
module.exports = function (app) {
    app.use(cors());
    app.get('/', function (req, res) {
        res.send("user API working fine");
    });
    app.post('/signup', user.addUser);
    app.post('/login', user.getUser);
};