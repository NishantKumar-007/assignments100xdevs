const { User } = require("../db/index");
async function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected

  const user = User.findOne({ username: req.headers.username });
  if (!user) {
    res.status(404).json("User not found");
  }
  next();
}

module.exports = userMiddleware;
