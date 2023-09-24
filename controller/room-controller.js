const Room = require("../models/room");

const getRoomsController = (req, res) => {
  const data = req.body;

  Room.getAll(data, (response) => {
    res.json({response});
  });
};

const addUserInRoom = (req, res) => {
  const data = req.body;
  Room.addUser(data, (response) => {
    res.send({
      result: response,
      status: 200,
    });
  });
};

const createRoom = (req, res) => {
  const data = req.body;
  Room.newRoom(data, (response) => {
    res.send({
      result: response,
      status: 200,
    });
  });
};

const updateRoomController = (req, res) => {
  const data = req.body;
  Room.updateRoom(data, (response) => {
    res.send({
      result: response,
      status: 200,
    });
  });
};

const deleteRoomController = (req, res) => {
  const data = req.body;
  Room.deleteRoom(data, (response) => {
    res.send({
      result: response,
      status: 200,
    });
  });
};

module.exports = {
  getRoomsController,
  addUserInRoom,
  createRoom,
  updateRoomController,
  deleteRoomController
};
