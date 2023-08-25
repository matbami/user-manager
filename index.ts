import express from "express";
import db from "./models";
// import {router }from './controllers/user'
const app = express();
const port = process.env.PORT || 8000;
// const router = express.Router()
const userRoutes = require('./controllers/user')


db.sequelize
  .sync()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err: any) => {
    console.error("Unable to connect to the database:", err);
  });

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});



app.use('/user',userRoutes)
