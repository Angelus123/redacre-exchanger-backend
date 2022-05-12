import app from'./src/app.js';
import express from'express';
import  config from'./config/config.js';
import mongoose  from "mongoose";
const currentConfig = config[process.env.NODE_ENV];
const {port, db_url} =currentConfig;

mongoose.connect(db_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(" Db connection done successfully"));

app.listen(port, () => console.log(`listen to ${port}`));
export default app