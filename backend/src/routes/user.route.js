import { Router } from "express";
import User from "../models/user.model.js";
import { hashPassword } from "../utils/helper.js";

const router = Router();

router.post("/api/v1/user", async (req, res) => {
	try {
		const newUser = new User(req.body);
		newUser.password = hashPassword(newUser.password);
		await newUser.save();
		res.status(201).json(newUser);
	} catch (err) {
		res.send(400).json({ messgae: `Error Creating user item ${err}` });
	}
});
router.get("/api/v1/user", (req, res) => {
	req.sessionStore.get(req.session.id, (err, sessionData) => {
		if (err) {
			console.log(err);
			throw err;
		}
		console.log(sessionData);
	});
	return res.status(200).send(`<h1> You got it ${req.user.name}</h1>`);
});

export default router;
