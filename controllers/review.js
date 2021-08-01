import slugify from "slugify";
import { readFileSync } from "fs";
import User from "../models/user";
import Course from "../models/course";
import Review from "../models/review";
// const Course = require("../models/course");
// const Review = require("../models/review");

//Reviews Create
// export const reviewCreate = async (req, res) => {
//   try {
//     const { slug } = req.params;
//     const { body, rating } = req.body;
//     const rev = await Course.findOneAndUpdate(
//       { slug },
//       {
//         $push: { reviews: { body, rating } },
//       },
//       { new: true }
//     ).exec();
//     res.json(rev);
//   } catch (err) {
//     console.log(err);
//     return res.status(400).send("Add Lesson Failed");
//   }
// };

// export const reviewCreate = async (req, res) => {
//   try {
//     let course = await Course.findById(req.params.id)
//       .populate("reviews")
//       .exec();
//     let hasReviewed = course.reviews.filter((review) => {
//       return review.author.equals(req.user._id);
//     }).length;
//     if (hasReviewed) {
//       req.session.error = "Sorry you can only create one review per report";
//       return res.redirect(`/course/${slug}`);
//     }
//     //create a review
//     req.body.review.author = req.user._id;
//     let review = await Review.create(req.body.review);
//     //assign review to post
//     post.reviews.push(review);
//     //sacve post
//     post.save();
//   } catch (err) {
//     console.log(err);
//   }
// };

// export const addLesson = async (req, res) => {
//   try {
//     const { slug, instructorId } = req.params;
//     const { title, content, video } = req.body;

//     if (req.user._id != instructorId) {
//       return res.status(400).send("Unauthorized");
//     }

//     const updated = await Course.findOneAndUpdate(
//       { slug },
//       {
//         $push: { lessons: { title, content, video, slug: slugify(title) } },
//       },
//       { new: true }
//     ).exec();
//     res.json(updated);
//   } catch (err) {
//     console.log(err);
//     return res.status(400).send("Add Lesson Failed");
//   }
// };
//Reviews Update
export const reviewUpdate = async (req, res) => {
  try {
    //
  } catch (err) {
    console.log(err);
  }
};

//Review Destroy
export const reviewDestroy = async (req, res) => {
  try {
    //
  } catch (err) {
    console.log(err);
  }
};
