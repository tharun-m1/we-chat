const express = require("express");
const { createServer } = require("node:http");
const { Server } = require("socket.io");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const mailTo = require("./services/mailer.js");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const userNameRoutes = require("./routes/userNameRoutes.js");
const contactRoutes = require("./routes/contactRoutes.js");

const app = express();
const server = createServer(app);
const io = new Server(server, {
  connectionStateRecovery: {},
});
app.use(
  cors({
    origin: "http://localhost:3000", // Replace with your frontend URL
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
app.use("/", contactRoutes);
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
const activeUsers = {};
// ================================= Socket =============================
io.on("connection", (socket) => {
  console.log("User connected");

  socket.on("online", (id) => {
    console.log("user id is", id);
    activeUsers[id] = true;
    console.log("activeUsers\n", activeUsers);
  });
  socket.on("disconnect", () => {
    console.log("User Disconnected");
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
