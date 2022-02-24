const express = require("express");
const path = require("path");
const dbconn=require('./database/dbconn')
const dotenv = require('dotenv')

//connect database
dbconn.dbconn();


dotenv.config({path:"./config.env"});
const port= process.env.PORT;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.set("view engine", "ejs");


app.use(express.static(path.join(__dirname, "public")));


app.use("/", require("./route/main"));


app.listen(port, () => {
  console.log(`connected to port http://localhost:${port}`);
});