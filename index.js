const express = require("express");
const path = require("path");
const mongoose=require('mongoose')
const dotenv = require('dotenv')


dotenv.config({path:"./config.env"});
const port= 5000 || process.env.PORT;
try {
  const conn= mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
  })

  console.log(`Connected to database!!!`);
  
} catch (error) {
  console.log(error);
  process.exit(1);
  
}


const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// SETTING VIEW ENGINE
app.set("view engine", "ejs");

//SETTING PUBLIC FOR STATIC FILES ...SO WE NEED PATH MODULE
app.use(express.static(path.join(__dirname, "public")));

//ROUTES
app.use("/", require("./route/main"));

// PORT
app.listen(port, () => {
  console.log(`connected to port http://localhost:${port}`);
});