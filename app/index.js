const express = require('express');
const mongoose = require('mongoose');
const uri = require('./config/db.config');
const cors = require("cors");

const app = express();

mongoose.set('useUnifiedTopology', true);
mongoose.set('useNewUrlParser', true);
 
let corsOptions = {
  origin: "http://localhost:3000" // Para un front sencillo en React
};


mongoose.connect(uri, (err, res) => {
  if (err) throw err;
  console.log("DB online")
}); 

require("./routes/famousquote.routes")(app);

app.use(cors(corsOptions));
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server online, listening at port ${PORT}`)
})