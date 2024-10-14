import { Router } from "express";

const router = Router();

router.get("/api/v1/signup", (req, res) => {
  const form =
    '<h1>Sign Up Page</h1><form method="POST" action="/api/v1/signup">\
    Enter Email:<br><input type="text" name="email">\
    <br>Enter Password:<br><input type="password" name="password">\
    <br><br><input type="submit" value="Submit"></form>\
  <a href="/api/v1/auth/google"> Sign Up with google </a> ';

  res.send(form);
});

router.post("/api/v1/signup", (req, res) => {
  console.log(req.email, req.password);
  if (
    req.email === "" ||
    req.password === "" ||
    req.email === undefined ||
    req.password === undefined
  ) {
    return res.send(
      `<h1> Please Enter the details: <a href="/api/v1/signup"> try again </a> </h1>`,
    );
  }
  return res.status(400).send("<h1> OK </h1>");
});

export default router;
