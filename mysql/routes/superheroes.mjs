import express from "express";
import db from "../services/HeroesDB.mjs";
import SuperHero from "../models/SuperHero.mjs";
import SuperPower from "../models/SuperPower.mjs";

const router = express.Router();
/* Hero routes */
router.get("/heroes/get", async (_, res) => {
  SuperHero.findAll()
    .then(heroes => {
      res.send(heroes);
    })
    .catch(err => console.log(err));
});

router.get("/heroes/join", async (_, res) => {
  db.query(
    "SELECT hero.name as hero, superpower.name as powers FROM Superheros AS hero JOIN SuperheroSuperpowers AS superheroPower ON hero.id = superheroPower.superheroId JOIN superpowers AS superpower ON superpower.id = superheroPower.superpowerId;"
  )
    .then(heroes => {
      res.send(heroes);
    })
    .catch(err => console.log(err));
  //   SELECT hero.name as hero, superpower.name as powers FROM Superheros AS hero
  //   JOIN SuperheroSuperpowers AS superheroPower ON hero.id = superheroPower.superheroId
  //   JOIN superpowers AS superpower ON superpower.id = superheroPower.superpowerId;
});

router.post("/heroes/add", async ({ body }, res) => {
  res.send("Not yet implemented");
});

/* Power routes */
router.get("/powers/get", async (_, res) => {
  SuperPower.findAll()
    .then(powers => {
      res.send(powers);
    })
    .catch(err => console.log(err));
});
router.post("/powers/add", async ({ body }, res) => {
  res.send("Not yet implemented");
});

export default router;
