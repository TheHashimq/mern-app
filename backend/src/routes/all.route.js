import { Router } from "express";
import userRouter from "./user.route.js";
import signupRouter from "./signup.route.js";
import loginRouter from "./login.route.js";
import googleRouter from "./google.route.js";
import homeRouter from "./home.route.js";

const router = Router();

router.use(homeRouter);
router.use(loginRouter);
router.use(userRouter);
router.use(signupRouter);
router.use(googleRouter);

export default router;
