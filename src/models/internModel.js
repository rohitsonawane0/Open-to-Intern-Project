const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const internSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/]
    },
    mobile: {
        type: Number,
        required: true,
        unique: true,
        match: [/^(\+\d{1,3}[- ]?)?\d{10}$/]
    },
    collegeId: {
        type: ObjectId,
        required: true,
        unique: true,
        ref: 'College'
    },
    isDeleted: {
        type: Boolean,
        default: false
    }

}, { timestamp: true })
module.exports = mongoose.model('Intern', internSchema)