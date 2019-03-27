import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import MongoRoutes from './mongo/routes/superheroes.mjs';
import * as oracle from './oracle/services/database.mjs';
import OraRoutes from './oracle/routes/superheroes.mjs';
import bodyParser from 'body-parser';

const app = express();
app.use(cors());
app.use(bodyParser.json());

const mongoUri = 'mongodb+srv://admin:admin@deebeecluster-utwpd.mongodb.net/test?retryWrites=true';
mongoose
  .connect(mongoUri, {useNewUrlParser: true, dbName: 'superheroes'})
  .catch(console.error);

oracle.initialize().catch(console.error);

app.use('/mongo', MongoRoutes);
app.use('/oracle', OraRoutes);

app.listen(3100, async () => {
  console.log('Listening to port 3100');
});
