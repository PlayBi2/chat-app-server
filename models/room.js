const db = require("../database");

const Room = (room) => {
  this.idRoom = room.idRoom;
  this.name = room.name;
  this.description = room.description;
};

Room.getAll = async (data, result) => {
  const { idUser } = data;
  const sql = `SELECT * from rooms inner join list_user_in_room on rooms.idRoom = list_user_in_room.idRoom where idUser = '${idUser}'`;
  // const sql = `select * from rooms`
  const [rows, fields] = await db.query(sql);
  // console.log(fields)
  result(rows);
};

Room.addUser = async (data, result) => {
  const { idUser, idRoom, name, description } = data;
  const sql = `insert into list_user_in_room(idRoom , idUser) values('${idRoom}','${idUser}')`;
  const response = await db.query(sql);
  result(response);
  // const [rows, fields] = await db.query(sql)
  // result([rows, fields])
};

Room.newRoom = async (data, result) => {
  const { name, description, idUser } = data;
  const sql = `insert into rooms(name, description, idHost) values('${name}','${description}','${idUser}')`;
  const response = await db.query(sql);
  result(response);
};

Room.updateRoom = async (data, result) => {
  const { idRoom, newName } = data;
  const sql = `UPDATE rooms SET name = '${newName}' WHERE idRoom = '${idRoom}'`;

  const response = await db.query(sql);
  result(response);
};

Room.deleteRoom = async (data, result) => {
  const { idRoom } = data;
  const sql = `delete from rooms where rooms.idRoom = '${idRoom}'`;
  const response = await db.query(sql);
  result(response);
};

module.exports = Room;
