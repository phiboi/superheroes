import { Sequelize } from "sequelize/types";

class SuperHero extends Model {}
SuperHero.init({
    id : {
        type: Sequelize.STRING,
        allowNull: false
    },
    name :{
        type: Sequelize.STRING
    }
}, {
    sequelize,
});
// CREATE TABLE Superhero
// (
//     id INT NOT NULL,
//     name VARCHAR(40) NOT NULL,
//     PRIMARY KEY(id)
// );