require("dotenv").config();
const express = require("express");
const productRouter = require("./routes/product");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const server = express();
// bd connection
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(
    `mongodb+srv://imsa57:${process.env.DB_PASSWORD}@cluster0.hael8ks.mongodb.net/ecommerceDatabase`
  );
  console.log("database connected");
}

//body parsher
server.use(cors());
server.use(express.json());
server.use("/products", productRouter.router);
server.use(express.static(path.resolve(__dirname, "build")));
server.use("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

server.listen(8080, () => {
  console.log("Server Started");
});
