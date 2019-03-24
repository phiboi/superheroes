import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();
app.use(cors());

const mongoUri = 'mongodb+srv://admin:admin@deebeecluster-utwpd.mongodb.net/test?retryWrites=true';
mongoose
  .connect(mongoUri, {useNewUrlParser: true, dbName: 'superheroes'})
  .catch(console.error);

app.listen(3100, () => {
  console.log('Listening to port 3100');
});
