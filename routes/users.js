const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

console.log(userController());

/* GET users listing. */
router.get("/", function (req, res, next) {
  const { firstName, lastName, age } = userController();

  res.render("user", {
    title: firstName,
    message: lastName,
    age: age,
  });
});

module.exports = router;
