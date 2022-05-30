const express = require("express");
const path = require("path");
const configs = require('./config')
const sequelize = require('./db/db');
const { errorMiddleware } = require("./middlewares/error/errorMiddleware");
const errorHandler = require("./modules/error/errorHandler");
const router = require("./routes/routes");
require("dotenv").config()

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("uploads", express.static(path.join(__dirname, "src", "uploads")))

app.use(errorMiddleware)

app.use("/api", router)
app.use(errorHandler)

module.exports = app