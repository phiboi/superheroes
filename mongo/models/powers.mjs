import mongoose from 'mongoose';

const powersType = new mongoose.Schema({
  name: String
});

export const Powers = mongoose.model('Powers', powersType);
