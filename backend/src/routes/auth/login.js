//Code from here:
//https://www.tutsmake.com/node-js-express-mysql-user-authentication-rest-api-example/

const express = require("express");
const router = express.Router();
const db = require("../../database");
//const { signupValidation, loginValidation } = require('./validation');
//const { validationResult } = require('express-validator');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userQueries = require("../../queries/users");

router.post("/", async (req, res, next) => {
  const {username, password} = req.body;
  const db = req.db;
  loginUser(db, username, password, res)
});

const loginUser = async (db, username, password, res) => {
  try {
    result = await userQueries.selectUser(db, username);

    if (!result.length) {
      return res.status(401).send({
        msg: "Email or password is incorrect!",
      });
    }

    const isMatching = await bcrypt.compare(
        password,
        result[0]["password"]
    );
    if (isMatching) {
      const token = jwt.sign(
        { id: result[0].id },
        "the-super-strong-secrect",
        { expiresIn: "1h" }
      );
      //TODO: There is a bug here I think where the previous login is returned and not the current login time. -Toni
      db.query(
        `UPDATE users SET last_login = now() WHERE id = '${result[0].id}'`
      );
      return res.status(200).send({
        token,
        user: result[0],
      });
    } else {
      return res.status(401).send({
        msg: "Username or password is incorrect!",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(400).send({
      msg: err,
    })
  }
}

module.exports = {
  router,
  default: router,
  loginUser: loginUser
}

/*
db.query(
  `SELECT * FROM users WHERE username = ${db.escape(req.body.username)};`,
  (err, result) => {
    // user does not exists
    if (err) {
      throw err;
      return res.status(400).send({
        msg: err,
      });
    }
    if (!result.length) {
      return res.status(401).send({
        msg: "Email or password is incorrect!",
      });
    }
    // check password
    bcrypt.compare(
      req.body.password,
      result[0]["password"],
      (bErr, bResult) => {
        // wrong password
        if (bErr) {
          throw bErr;
          return res.status(401).send({
            msg: "Email or password is incorrect!",
          });
        }
        if (bResult) {
          const token = jwt.sign(
            { id: result[0].id },
            "the-super-strong-secrect",
            { expiresIn: "1h" }
          );
          //TODO: There is a bug here I think where the previous login is returned and not the current login time. -Toni
          db.query(
            `UPDATE users SET last_login = now() WHERE id = '${result[0].id}'`
          );
          return res.status(200).send({
            token,
            user: result[0],
          });
        }
        return res.status(401).send({
          msg: "Username or password is incorrect!",
        });
      }
    );
  }
);
*/

module.exports = router;

