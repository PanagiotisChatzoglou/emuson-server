import mongoose from "mongoose";
const Schema = mongoose.Schema;
// const Review = require("./review");
const { ObjectId } = mongoose.Schema;

const lessonSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      minLength: 3,
      maxLength: 320,
      required: true,
    },
    slug: {
      type: String,
      lowercase: true,
    },
    content: {
      type: {},
      minlength: 200,
    },
    video: {},
    free_preview: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const reviewSchema = new Schema({
  body: String,
  rating: Number,
  author: {
    type: ObjectId,
    ref: "User",
    required: true,
  },
});

const courseSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      minLength: 3,
      maxLength: 320,
      required: true,
    },
    slug: {
      type: String,
      lowecase: true,
    },
    description: {
      type: {},
      minlength: 200,
      required: true,
    },
    price: {
      type: Number,
      default: 9.99,
    },
    image: {},
    category: String,
    published: {
      type: Boolean,
      default: false,
    },
    paid: {
      type: Boolean,
      default: true,
    },
    instructor: {
      type: ObjectId,
      ref: "User",
      required: true,
    },
    lessons: [lessonSchema],
    reviews: [reviewSchema],
    avgRating: { type: Number, default: 0 },
  },
  { timestamps: true }
);

// courseSchema.pre("remove", async function () {
//   await Review.remove({
//     _id: {
//       $in: this.reviews,
//     },
//   });
// });

// courseSchema.methods.calculateAvgRating = function () {
//   let ratingsTotal = 0;
//   if (this.reviews.length) {
//     this.reviews.forEach((review) => (ratingsTotal += review.rating));
//   } else {
//     this.avgRating = ratingsTotal;
//   }
//   this.avgRating = Math.round((ratingsTotal / this.reviews.length) * 10) / 10;
//   const floorRating = Math.floor(this.avgRating);
//   this.save();
//   return floorRating;
// };

export default mongoose.model("Course", courseSchema);
