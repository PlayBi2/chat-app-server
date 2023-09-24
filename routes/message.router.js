const express = require("express");
const {
  getMessageController,
  postMessageController,
} = require("../controller/message-controller");
const router = express.Router();

router.get("/", getMessageController);
router.post("/", postMessageController);

module.exports = router;
