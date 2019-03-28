import Sequelize from 'sequelize';
import db from '../services/HeroesDB.mjs';

const SuperPower = db.define('superpower', {
    id: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING
    }
});

export default SuperPower;
// CREATE TABLE Superpower
// (
//     id INT NOT NULL,
//     name VARCHAR(40) NOT NULL,
//     PRIMARY KEY(id)
// );