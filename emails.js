const express = require("express");
const app = express();
const router = express.Router();

router.get("/", function (req, res) {
  let result = emailCheck(req.body);
  res.send(`Your result is : ${result}`);
});

const emailCleaner = (email) => {
  return email.split("@")[0].split("+")[0].split(".").join("");
};

const emailsArr = [
  "test.email@gmail.com",
  "test.email+spam@gmail.com",
  "testemail@gmail.com",
];
const emailCheck = () => {
  let uniqueEmailsArr = [];
  for (let i = 0; i < emailsArr.length; i++) {
    let result = emailsArr[i]
    let email = emailCleaner(result);
    if (!uniqueEmailsArr.includes(email)) {
      uniqueEmailsArr.push(email);
    }
  }
  return uniqueEmailsArr.length;
};

console.log(emailCheck(emailsArr));

module.exports = router;
