const selectUser = async (db, username) => {
    return db.execute( `SELECT * FROM users WHERE LOWER(username) = LOWER(${db.escape(
      username
    )});`);
  }

  const insertUser = async (db, username, hashedPassword) => {
    return db.query(
      `INSERT INTO users (username, password) VALUES (${db.escape(
        username
      )}, ${db.escape(hashedPassword)})`)
  }

  module.exports = {
    selectUser: selectUser,
    insertUser: insertUser,
};