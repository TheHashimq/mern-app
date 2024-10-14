import { Router } from "express";
import passport from "passport";
import "../utils/local-passport.js";
const router = Router();

router.get("/api/v1/login", (req, res) => {
	const form =
		'<h1>Login Page</h1><form method="POST" action="/api/v1/login">\
    Enter Username:<br><input type="text" name="email">\
    <br>Enter Password:<br><input type="password" name="password">\
    <br><br><input type="submit" value="Submit"></form>\
  	<a href="/api/v1/auth/google"> Login with Google </a>';
	return req.user
		? res.redirect("http://localhost:5173/")
		: res.redirect("http://localhost:5173/login");
});

router.post("/api/v1/login", passport.authenticate("local"), (req, res) => {
	console.log(req.body);
	return res.status(200).send({ message: "Done " });
});
router.get("/api/v1/login/status", (req, res) => {
	console.log(`Inside /login/status endpoint`);
	// console.log(req.user.email);
	console.log(req);
	return req.user ? res.status(200).send(req.user.name) : res.status(401);
});
export default router;
