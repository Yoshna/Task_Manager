const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = require("../models/user");

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile"],
  })
);
router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
  //   console.log(req.user);
  //   console.log("vvfvfv");
  res.redirect(`${process.env.CLIENT_URL}/tasks`);
});

router.get("/login", (req, res) => {
  //   console.log(req.user);
  //   console.log("gug");
  if (req.user) return res.send(req.user);
  else return res.send(null);
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect(`${process.env.CLIENT_URL}/`);
});

// router.get("/", async (req, res) => {
//   const user = await User.find({}).populate("tasks").exec();
//   console.log(user);
//   res.send(user);
// });

module.exports = router;
