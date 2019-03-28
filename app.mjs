import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import MongoRoutes from './mongo/routes/superheroes.mjs';
import sqlRoutes from './mysql/routes/superheroes.mjs';
import Sequelize from "sequelize";
import bodyParser from 'body-parser';

const app = express();
app.use(cors());
app.use(bodyParser.json());

const mongoUri = 'mongodb+srv://admin:admin@deebeecluster-utwpd.mongodb.net/test?retryWrites=true';
mongoose
  .connect(mongoUri, { useNewUrlParser: true, dbName: 'superheroes' })
  .catch(console.error);

const sequelize = new Sequelize('mysql://algonquin:algonquin@adt-mysql.czanlufceq0x.us-east-2.rds.amazonaws.com:3306/heroes');
sequelize.authenticate()
  .then(() => {
    console.log('Connection established!');
  })
  .catch(err => {
    console.error('Unable to connect: ', err);
  });
app.use('/mongo', MongoRoutes);
app.use('/oracle', sqlRoutes);

app.listen(3100, async () => {
  console.log('Listening to port 3100');
});
