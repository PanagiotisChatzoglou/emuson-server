import express from "express";
const router = express.Router();

import { isInstructor, requireSignin, isEnrolled } from "../middlewares";

// import {
//   reviewCreate,
//   reviewUpdate,
//   reviewDestroy,
// } from "../controllers/review";

import { reviewCreate } from "../controllers/course";

//review reviews create /posts/:id/reviews
router.post("/course/:courseId/reviews", reviewCreate);

//PUT reviews update /posts/:id/reviews/:review_id
// router.put("/course/:slug/reviews/:review_id", requireSignin, reviewUpdate);

// //DELETE reviews destroy /posts/:id/reviews/:review_id
// router.delete("/course/:slug/reviews/:review_id", requireSignin, reviewDestroy);

module.exports = router;
