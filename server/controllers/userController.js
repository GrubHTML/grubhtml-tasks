const UserModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSignUp = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const hashedPass = await bcrypt.hash(password, 12);
    const userData = await UserModel.create({
      username: username,
      email: email,
      password: hashedPass,
    });
    return res.status(201).json({ userData });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const userSignIn = async (req, res) => {
  const { username, password } = req.body;
  try {
    const userData = await UserModel.findOne({
      where: { username },
    });
    if (!userData) res.status(404).json({ message: "user not found!" });
    const isValid = await bcrypt.compare(password, userData.password);
    if (isValid) {
      const accessToken = jwt.sign(
        {
          data: userData.id,
        },
        process.env.JWT_SECRET_KEY,
        { expiresIn: "15m" }
      );
      return res
        .status(200)
        .json({ token: accessToken, message: "User signed in successfully!" });
    }
    if (!isValid)
      return res.status(401).json({ meesage: "invalid credentials" });
  } catch (error) {
    res.status(500).json({ error: error.mesage });
  }
};

module.exports = { userSignUp, userSignIn };
