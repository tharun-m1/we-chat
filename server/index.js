const express = require("express");
const { createServer } = require("node:http");
const { Server } = require("socket.io");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const userNameRoutes = require("./routes/userNameRoutes.js");
const mailTo = require("./services/mailer.js");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const app = express();
const server = createServer(app);
const io = new Server(server, {
  connectionStateRecovery: {},
});
app.use(
  cors({
    origin: "https://wechat-sand.vercel.app/", // Replace with your frontend URL
    credentials: true,
  })
);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Hello, This is we chat!",
  });
});

app.use("/", authRoutes);
app.use("/username", userNameRoutes);
// ======================== Error Handler ===============================
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Internal Server Error";
  return res.status(status).json({
    status,
    message,
  });
});
// ======================================================================
server.listen(process.env.PORT, () => {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      console.log(`Server running at port:${process.env.PORT}`);
    })
    .catch((err) => {
      console.log(err);
    });
});
