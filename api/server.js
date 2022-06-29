const bodyParser = require("body-parser");
// config server
// use express module
const express = require("express");
const app = express()
const user_router = require("./routes/employee");
let port = process.env.PORT || 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// import routes
app.use('/employee',user_router);



// server listerning
app.listen(port, () => {
  console.log(`'RESTful API server started on: '${port}`);
});
