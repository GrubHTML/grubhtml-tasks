const userRouter = require("express").Router();
const { userSignUp, userSignIn } = require("../controllers/userController");

userRouter.post("/signup", userSignUp);
userRouter.post("/signin", userSignIn);
module.exports = { userRouter };
