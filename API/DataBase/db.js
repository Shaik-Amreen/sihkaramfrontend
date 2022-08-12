const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/sihkaram",
  {
    useNewUrlParser: true, useUnifiedTopology: true, //make this true
    autoIndex: true, useCreateIndex: true
  }).then((result) => {
    console.log('Mongodb connection succeeded ')
  }).catch((err) => {
    console.log('error while connecting Mongodb' + err)
  })