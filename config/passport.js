const passport = require("passport");
const googleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../models/user");
const Task = require("../models/tasks");

passport.use(
  new googleStrategy(
    {
      clientID: process.env.AUTH_CLIENT_ID,
      clientSecret: process.env.AUTH_CLIENT_SECRET,
      callbackURL: `${process.env.SERVER_URL}/auth/google/redirect`,
    },
    async (accessToken, refreshToken, profile, done) => {
      //console.log(profile);
      let user = await User.findOne({ googleId: profile.id });
      if (user) {
        done(null, user, { message: "Already present" });
      } else {
        // const tasks = await Task.findOne().select("_id");
        // console.log(tasks);
        user = new User({
          name: profile.displayName,
          googleId: profile.id,
          emailId: profile.emails[0].value,
          //   tasks: tasks,
        });
        await user.save();
        done(null, user, { message: "Saved" });
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user._id);
});
passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});
