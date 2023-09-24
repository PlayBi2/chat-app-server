const db = require("../database");
const Message = (message) => {
  this.text = message.text;
  this.idMessage = message.idMessage;
  this.createAt = message.createAt;
  this.idUser = message.idUser;
  this.idRoom = message.idRoom;
};

Message.AddMessage = async (data, result) => {
  const { text, idUser, idRoom } = data;
  const sql = `insert into messages (text, idUser, idRoom) values('${text}','${idUser}','${idRoom}')`;
  const [rows, fields] = await db.query(sql);
  result(rows);
};

Message.getAll = async (data, result) => {
  const { idUser, idRoom } = data;
  const sql = `select * from messages where idUser = '${idUser}' and idRoom = '${idRoom}'`;
  const [rows, fields] = await db.query(sql);
  if (rows.affectedRows) {
    result({ message: "Ok", response: rows });
  } else {
    result({ error: "Error" });
  }
};

module.exports = Message;
