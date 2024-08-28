import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";



const Complain=sequelize.define('complain', {
id :{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
}
,
content : {
    type: DataTypes.TEXT,
    allowNull: false,
},
date:{
type: DataTypes.STRING,
allowNull: false,
// date.toLocaleDateString('en-GB');
// console.log(date); // Output: 28/08/2024


}

})

sequelize.sync({ alter: true })
  .then(() => {
    console.log('complain table created or updated.');
  })
  .catch((error) => {
    console.error('Error creating or updating complain table:', error);
  });

export default Complain;