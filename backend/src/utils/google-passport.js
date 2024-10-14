import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth2";
import dotenv from "dotenv";
import User from "../models/user.model.js";

dotenv.config();
// Serialize and deserialize user for session management
passport.serializeUser((user, done) => {
  console.log("Serializing user: ", user);
  done(null, user.id); // Store user ID in the session
});

passport.deserializeUser(async (id, done) => {
  console.log("Deserializing user by ID: ", id);
  try {
    const user = await User.findById(id);
    if (!user) throw new Error("User not found");
    done(null, user); // Pass user back to req.user
  } catch (error) {
    done(error, null);
  }
});

// Define Google OAuth strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID, // Get from Google Cloud Console
      clientSecret: process.env.GOOGLE_CLIENT_SECRET, // Get from Google Cloud Console
      callbackURL: `${process.env.BACKEND_URL}/api/v1/auth/google/callback`, // Redirect URL after Google login
      passReqToCallback: true,
    },
    async (req, accessToken, refreshToken, profile, done) => {
      try {
        // Find the user by Google ID in the database
        const existingUser = await User.findOne({ email: profile.email });

        if (existingUser) {
          console.log("User found: ", existingUser);
          return done(null, existingUser); // User exists, pass it to done
        }

        // If the user doesn't exist, create a new user
        const newUser = new User({
          googleId: profile.id,
          name: profile.displayName,
          email: profile.emails[0].value, // Extract the first email
          role: "customer", // Default role or based on logic
        });

        const savedUser = await newUser.save();
        console.log("New user created: ", savedUser);
        return done(null, savedUser); // Pass the newly created user to done
      } catch (error) {
        console.error("Error during Google OAuth: ", error);
        return done(error, null);
      }
    },
  ),
);

export default passport;
