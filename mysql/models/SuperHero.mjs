import Sequelize from 'sequelize';
import db from '../services/HeroesDB.mjs';

const SuperHero = db.define('Superhero', {
    id: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING
    }
});

export default SuperHero;
// CREATE TABLE Superhero
// (
//     id INT NOT NULL,
//     name VARCHAR(40) NOT NULL,
//     PRIMARY KEY(id)
// );