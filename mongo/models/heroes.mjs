import mongoose from 'mongoose';
const {ObjectId} = mongoose.Schema.Types;

const heroesType = new mongoose.Schema({
  name: String,
  powersIds: [ObjectId]
});

export const Heroes = mongoose.model('Heroes', heroesType);
