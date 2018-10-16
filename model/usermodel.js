const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    id: {type: String, default: ''},
    name: {type: String, default: ''},
    password: {type: String, default: ''},
    phoneNumber: {type: String, default: ''},
    emailId: {type: String, default: ''},
    address: {type: String, default: ''},
    addedOn: {type: String, default: 0},
    modifiedOn: {type: String, default: new Date().toDateString()},
    isDeleted: {type: Boolean, default: false}
}, {timeStamps: true});

UserSchema.static({
    findDocuments: function (findObject) {
        return this.find(findObject);
    }
});
UserSchema.method({
    saveObj: function (object) {
        console.log(object);
        return this.save(object);
    }
});
mongoose.model('User', UserSchema);