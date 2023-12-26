const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require("../db/index");

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  await Admin.create({
    username: req.body.username,
    password: req.body.password,
  });
  res.json({
    message: "Admin created successfully",
  });
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  await Course.create({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    image: req.body.image,
  });
  res.send("Course created successfully");
});

router.get("/courses", adminMiddleware, (req, res) => {
  // Implement fetching all courses logic
  Course.find().then((courses) => {
    res.json(courses);
  });
});

module.exports = router;
