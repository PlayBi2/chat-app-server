const express = require("express");
const router = express.Router();

const {
  getRoomsController,
  addUserInRoom,
  createRoom,
  updateRoomController,
  deleteRoomController,
} = require("../controller/room-controller");

router.get("/", getRoomsController);
router.post("/:idUser", addUserInRoom);
router.post("/", createRoom);
router.patch("/:idRoom", updateRoomController);
router.delete("/:idRoom", deleteRoomController);

module.exports = router
