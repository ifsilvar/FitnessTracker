const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
// const routes = require('./controllers');

const PORT = process.env.PORT || 3008;

const app = express();

app.use(routes);

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
});

//routes
app.use(require("./routes/routes.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
