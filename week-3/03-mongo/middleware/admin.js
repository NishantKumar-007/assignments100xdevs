// Middleware for handling auth
const { Admin } = require("../db/index");
async function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

  const { username, password } = req.headers;

  // Validate admin credentials
  const admin = await Admin.findOne({ username });

  if (!admin || admin.password !== password) {
    return res.status(401).json({ error: "Invalid admin credentials" });
  }

  // If credentials are valid, proceed to the next middleware/route
  next();
}

module.exports = adminMiddleware;
