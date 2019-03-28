import sequelize from '../services/HeroesDB.mjs';
import { Sequelize } from 'sequelize/types';
export class SuperHeroSuperPower extends Model {}
SuperHeroSuperPower.init({
    heroID: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    powerID: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
});
// CREATE TABLE SuperheroSuperpowers
// (
//     superheroId INT FOREIGN KEY REFERENCES Superhero(id),
//     superpowerId INT FOREIGN KEY REFERENCES Superpower(id),
//     PRIMARY KEY(superheroId, superpowerId)
// );