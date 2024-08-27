import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Subject = sequelize.define('Subject',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      subjectName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      code: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      session: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
    });
    
sequelize.sync({alter:true})
.then(()=>{
    console.log("subject model created successfully");
})
.catch(err=>{
    console.log("Error creating subject model",err);
})


export default Subject;