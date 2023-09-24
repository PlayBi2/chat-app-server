const User = require("../models/user");
const JWT = require("../common/token");


const signupController = (req, res) => {
  const data = req.body;
  const { username, password } = data;
  if (username === "" || password === "") {
    res.json("error");
  } else {
    User.AddUser(data, (response) => {
      if (!response) {
        res.json("error");
      } else {
        res.json(response);
      }
    });
  }
};

const loginController = (req, res) => {
  const data = req.body;
  const { username, password } = data;
  if (username === "" || password === "") {
    res.json("error");
  } else {
    User.GetUser(data, async (response) => {
      if (!response || response.length === 0) {
        res.json({
          result: null,
          status: true,
        });
      } else {
        // const user_token = await JWT.make(response);
        // console.log(user_token)
        res.json({
          result: response,
          // user_token,
          status: true,
        });
      }
    });
  }
};

module.exports = { signupController, loginController };
