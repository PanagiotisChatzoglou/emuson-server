const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema;

const ReviewSchema = new Schema(
  {
    body: String,
    author: {
      type: ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Review", ReviewSchema);
