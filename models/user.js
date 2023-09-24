const db = require("../database");
const JWT = require("../common/token");

const User = (user) => {
  this.username = user.username;
  this.password = user.password;
};

User.AddUser = async (data, result) => {
  const { username, password } = data;
  // console.log({username, password})
  const sql = `INSERT INTO users (username, password) VALUES ('${username}', '${password}')`;
  // db.query(sql, (err, user) => {
  //   if (err) {
  //     result(null);
  //   } else {
  //     result(user);
  //   }
  // });
  const [rows, fields] = await db.query(sql)
  result([rows, fields])
};

User.GetUser = async (data, result) => {
  const { username, password } = data;
  const sql = `select * from users where username = '${username}' and password = '${password}' limit 1`;
  db.query(sql, (err, user) => {
    if (err) {
      result(null);
    } else {
      result(user[0]);
    }
  });
  // const [rows, fields] = await db.query(sql)
  // result([rows, fields])
};

module.exports = User;
