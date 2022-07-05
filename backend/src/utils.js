const bcrypt = require("bcryptjs");

const hashPassword = async (password) => {
    return await bcrypt.hash(password, 10)
    //Should look into error handling
  }

  module.exports = {
    hashPassword: hashPassword,
};