const jwt = require("jsonwebtoken");

exports.cookieJwtAuth = (req, res, next) => {
  const token = req.cookies.token;
  try {
    const userData = jwt.verify(token, "the-super-strong-secrect");
    console.log(userData);
    req.userData = userData;
    next();
  } catch (err) {
    res.clearCookie("token");
    return res.redirect("/");
  }
};
