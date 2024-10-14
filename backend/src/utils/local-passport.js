import passport from "passport";
import { Strategy } from "passport-local";
import User from "../models/user.model.js";
import { comparedPassword, hashPassword } from "./helper.js";

passport.serializeUser((user, done) => {
  console.log("inside serializeUser", user);
  done(null, user.email);
});

passport.deserializeUser(async (email, done) => {
  console.log("inside dserializeUser", email);
  try {
    const findUser = await User.findOne({ email: email });
    if (!findUser) throw new Error("User not found");
    done(null, findUser);
  } catch (error) {
    done(error, null);
  }
});
export default passport.use(
  new Strategy({ usernameField: "email" }, async (username, password, done) => {
    try {
      console.log(`username : ${username}`);
      console.log(`password : ${password}`);
      const findUser = await User.findOne({ email: username });
      if (!findUser) throw new Error("User not Found");
      console.log(password, findUser.password, hashPassword(password));
      if (!comparedPassword(password, findUser.password)) {
        throw new Error("Invalid Credentials");
      }
      done(null, findUser);
    } catch (err) {
      done(err, null);
      console.log(err);
    }
  }),
);
