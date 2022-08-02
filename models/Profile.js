const mongoose  = require("mongoose"); // 数据存在mongoose
const Scheme = mongoose.Schema;

// create Scheme
const ProfileCheme = new Scheme({
    type: {
        type: String
    },
    income: {
        type: String
    },
    expend: {
        type: String,
        required: true
    },
    cash: {
        type: String,
        required: true
    },
    remark: {
        type: String
    }
})

module.exports = Profile = mongoose.model('profile', ProfileCheme);