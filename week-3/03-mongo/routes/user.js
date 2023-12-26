const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db/index");

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  await User.create({
    username: req.body.username,
    password: req.body.password,
  });
  res.json({
    message: "User created successfully",
  });
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  await Course.find().then((courses) => {
    res.json(courses);
  });
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const courseId = req.params.courseId; // Get the courseId from the URL parameter
  const userId = req.headers.username; // Get the user ID or username from the headers
  const user = await User.findOne({ username: userId });
  user.purchasedCourses.push(courseId);
  await user.save();
  res.json({ message: "Course purchased successfully" });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const userId = req.headers.username;
  const user = await User.findOne({ username: userId }).populate(
    "purchasedCourses"
  );
  const purchasedCourseIds = user.purchasedCourses;
  res.json({ purchasedCourseIds });
});

module.exports = router;
