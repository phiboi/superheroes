import express from 'express';
import {Heroes} from '../models/heroes.mjs';
import {Powers} from '../models/powers.mjs';

const router = express.Router();

const resolveHero = async (hero) => {
  const {powersIds, ...rest} = hero.toObject();
  return {
    ...rest,
    powers: await Promise.all(
      powersIds.map(powerId => Powers.findById(powerId).exec())
    )
  };
}

router.get('/heroes/get', async (_, res) => {
  const heroes = await Heroes.find().exec();
  const resolvedHeroes = await Promise.all(
    heroes.map(resolveHero)
  );
  res.send(resolvedHeroes);
});

router.post('/heroes/add', async ({body}, res) => {
  const powersIds = (await Promise.all(
    body.powers.map(({name}) => Powers.findOne({name}).exec())
  )).map(val => val._id);
  const newHero = {...body};
  delete newHero.powers;
  const addNewHero = await new Heroes({...newHero, powersIds}).save();
  res.send(await resolveHero(addNewHero));
});

router.get('/powers/get', async (_, res) => {
  res.send(await Powers.find().exec());
});

router.post('/powers/add', async ({body}, res) => {
  res.send(await new Powers({name: body.name}).save());
});

export default router;
