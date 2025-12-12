const jwt = require("jsonwebtoken");

const checkLogin = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization || !authorization.startsWith("Bearer "))
    return res.status(401).json({ message: "No token provided" });
  try {
    const token = authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    // console.log(decoded);
    const { username, email } = decoded;
    req.username = username;
    req.email = email;
    next();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
module.exports = checkLogin;
