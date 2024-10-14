import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import session from "express-session";
import dotenv from "dotenv";
import MongoStore from "connect-mongo";
import passport from "passport";
import router from "./routes/all.route.js";
import { DB_NAME } from "./db/constants.js";

dotenv.config();
const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  }),
);
app.use(
  express.json({
    limit: "16kb",
  }),
);
app.use(
  express.urlencoded({
    extended: true,
    limit: "16kb",
  }),
);
app.use(express.static("public"));
app.use(cookieParser());
app.use(
  session(
    {
      secret: process.env.SESSION_SECRET,
      saveUninitialized: false,
      resave: true,
      store: MongoStore.create({
        mongoUrl: process.env.MONGODB_URI + DB_NAME, // Using mongoUrl instead of mongooseConnection
        collectionName: "sessions",
      }),
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 30, // Milliseconds
      },
    },
    (err) => {
      if (err) {
        console.error("Session error: ", err);
      } else {
        console.log("Session store is active.");
      }
    },
  ),
);
app.use(passport.initialize());
app.use(passport.session());
app.use(router);

app.listen(process.env.PORT, (req, res) => {
  console.log(`Server Running at PORT : ${process.env.PORT}`);
});
export { app };
