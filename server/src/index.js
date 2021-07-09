const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const morgan = require("morgan");
const path = require("path");
const http = require("http");
const cors = require("cors");
const socket = require("socket.io");

const userRouter = require("./routes/user");
const bookRouter = require("./routes/book");

dotenv.config();

const app = express();

const server = http.createServer(app);
const io = socket(server, {
  cors: {
    allowed: "*",
  },
});

/**
 * Connection to the database
 */
mongoose
  .connect(process.env.DATABASE_STRING, {
    useCreateIndex: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database successfuly");
  });

/**
 * Middleware
 */
if (process.env.NODE_ENV == "development") {
  app.use(morgan("dev"));
}

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

/**
 * Route Middleware
 */

app.use("/api/v1/users", userRouter);
app.use("/api/v1/books", bookRouter);

/**
 * Socket
 */

io.on("connection", (socket) => {
  socket.on("join", (id) => {
    socket.join(id);
    socket.on("send-change", (data) => {
      socket.broadcast.to(id).emit("receive-change", data);
    });
  });
});

app.use("*", (req, res, next) => {
  res.status(400).json({
    status: "error",
    message: `The requested url ${req.originalUrl} doesnot exist`,
  });
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
