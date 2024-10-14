import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  return req.user
    ? res.send(`<h1> Hello there ${req.user.name} </h1>`)
    : res.send(`<h1> Go to login </h1>`);
});

export default router;
