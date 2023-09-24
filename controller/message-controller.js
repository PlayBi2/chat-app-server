const Message = require("../models/message");

const getMessageController = (req, res) => {
  const data = req.body;
  Message.getAll(data, (response) => {
    res.send(response);
  });
};

const postMessageController = (req, res) => {
  const data = req.body;
  // console.log(data)
  Message.AddMessage(data, (response) => {
    res.send(response);
  });
};

module.exports = {getMessageController, postMessageController};
