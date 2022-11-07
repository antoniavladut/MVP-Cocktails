const cors = require("cors"); // add at the top
var createError = require('http-errors');


const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const recipesRouter = require("./routes/recipes");
var authRouter = require('./routes/auth');
// var usersRouter = require('./routes/users');


const app = express();


app.use(cors()); // add after 'app' is created
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/recipes", recipesRouter);

// Routes
app.use('/', authRouter); 
// // app.use('/', indexRouter);
// app.use('/users', usersRouter);

module.exports = app;
