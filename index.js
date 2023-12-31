const express = require("express");
const app = express();

require("dotenv").config();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  next();
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");

const io = new Server(server);

io.on("connection", (socket) => {
  console.log("a user connected");
});

const postsRouter = require("./routes/posts.router");
const authRouter = require("./routes/auth.router");
const roomRouter = require("./routes/room.router");
const messageRouter = require("./routes/message.router");

app.use("/api/v1/posts", postsRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/rooms", roomRouter);
app.use("/api/v1/messages", messageRouter);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log("Server is running....");
});
