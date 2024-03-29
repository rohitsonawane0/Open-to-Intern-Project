const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const internSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },
    mobile: {
      type: String,
      required: true,
      unique: true,

    },
    collegeId: {
      type: ObjectId,
      required: true,
      ref: "College",
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  }, { timestamps: true });

module.exports = mongoose.model("Intern", internSchema);
