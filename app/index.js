const express = require('express');
const mongoose = require('mongoose');
const uri = require('./config/db.config');
const cors = require("cors");

const app = express();
mongoose.set('useUnifiedTopology', true);
mongoose.set('useNewUrlParser', true);

app.get('/', function (req, res) {
  res.send('Hello Experimentality')
})
 
let corsOptions = {
  origin: "http://localhost:3000"
};

mongoose.connect(uri, (err, res) => {
  if (err) throw err;
  console.log("DB online")
}); 

app.use(cors(corsOptions));
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server online, listening at port ${PORT}`)
})