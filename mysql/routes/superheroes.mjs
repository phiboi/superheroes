import express from 'express';
import db from '../services/HeroesDB.mjs';
import SuperHero from '../models/SuperHero.mjs';
import SuperPower from '../models/SuperPower.mjs';

const router = express.Router();
/* Hero routes */
router.get('/heroes/get', async(_, res) => {
    SuperHero.findAll()
    .then(heroes => {
        res.send(heroes);
    })
    .catch(err => console.log(err))

});
router.post('/heroes/add', async({body}, res) => {
    res.send("Not yet implemented");
});

/* Power routes */
router.get('/powers/get', async(_, res) => {
    SuperPower.findAll()
    .then(powers => {
        res.send(powers);
    })
    .catch(err => console.log(err))
});
router.post('/powers/add', async({body}, res) => {
    res.send("Not yet implemented");
});

export default router;