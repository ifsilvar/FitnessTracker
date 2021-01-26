const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const routes = require('./routes/routes.js');

const PORT = process.env.PORT || 3008;

const app = express();
//always do these before routes
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

app.use(logger("dev"));


app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/exercise", {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useCreateIndex: true,
    useFindAndModify: false
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});