require('../../model/usermodel');
const Constant = require('../../helper/Constants');
const Mongoose = require('mongoose');
let UserModel = Mongoose.model('User');
module.exports = {
    addUser: async function (req, res) {
        let response = req.body;
        if (!response || !response.emailId || !response.password) {
            res.send({data: {}, responseData: 401, message: Constant.MISSING_DETAILS});
            return;
        }
        let isAvailable = await UserModel.findDocuments({emailId: response.emailId});
        if (isAvailable.length) {
            res.send({data: {}, responseData: 401, message: Constant.USER_ALREADY_EXISTS});
            return;
        }
        let userObj = new UserModel(req.body);
        let result = await userObj.saveObj();
        res.send({data: result, responseData: 200, message: Constant.SIGN_UP_SUCCESS});
    },
    getUser: async function (req, res) {
        let response = req.body;
        if (!response || !response.emailId || !response.password) {
            res.send({data: {}, responseData: 401, message: Constant.MISSING_DETAILS});
            return;
        }
        let result = await UserModel.findDocuments(response);
        res.send({
            data: result,
            responseCode: result.length ? 200 : 401,
            message: result.length ? Constant.LOGIN_SUCCESS : Constant.INVALID_LOGIN_DETAILS});
    },
};