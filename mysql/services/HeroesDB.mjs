import Sequelize from "sequelize";
export default new Sequelize(
  "mysql://algonquin:algonquin@adt-mysql.czanlufceq0x.us-east-2.rds.amazonaws.com:3306/heroes",
  {
    define: {
      defaultScope: {
        attributes: {
          exclude: ["createdAt", "updatedAt"]
        }
      }
    }
  }
);
