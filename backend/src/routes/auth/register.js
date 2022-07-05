//Code from here:
//https://www.tutsmake.com/node-js-express-mysql-user-authentication-rest-api-example/

const express = require("express");
const router = express.Router();
const db = require("../../database");
//const { signupValidation, loginValidation } = require('./validation');
//const { validationResult } = require('express-validator');
const jwt = require("jsonwebtoken");
const userQueries = require("../../queries/users");
const utils = require("../../utils");
const { loginUser } = require("./login");

router.post("/", async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const result = await userQueries.selectUser(req.db, username);
    if (result[0]?.length) {
      return res.status(409).send({
        msg: "This user is already in use!",
      });
    }

    const hashedPassword = await utils.hashPassword(password);

    await userQueries.insertUser(req.db, username, hashedPassword);
    console.log("Inserted user");
    console.log("test", loginUser);
    loginUser(req.db, username);
  } catch (err) {
    console.log(err);
    res.status(400).send({
      msg: err,
    });
  }
});

router.post("/old", (req, res, next) => {
  db.query(
    `SELECT * FROM users WHERE LOWER(email) = LOWER(${db.escape(
      req.body.username
    )});`,
    (err, result) => {
      if (result?.length) {
        return res.status(409).send({
          msg: "This user is already in use!",
        });
      } else {
        // username is available
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(500).send({
              msg: err,
            });
          } else {
            // has hashed pw => add to database
            db.query(
              `INSERT INTO users (username, password) VALUES (${db.escape(
                req.body.username
              )}, ${db.escape(hash)})`,
              (err, result) => {
                if (err) {
                  throw err;
                  return res.status(400).send({
                    msg: err,
                  });
                }
                return res.status(201).send({
                  msg: "The user has been registerd with us!",
                });
              }
            );
          }
        });
      }
    }
  );
});

//TODO: Temporary for debuging, remove later.
router.get("/", async (req, res) => {
  const results = await db.promise().query(`SELECT * FROM users`);
  console.log(results[0]);
  res.status(200).send(results[0]);
});

module.exports = router;
