// import { DataTypes } from 'sequelize';
// import sequelize from '../config/database.js';
// import Class from './Class.js';
// import Sattendance from './Sattendance.js';






// const Student = sequelize.define('Student', {
//   id: {
//     type: DataTypes.INTEGER,
//     // primaryKey: true,
//     autoIncrement: true,
//   },
//   name: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   email: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     unique: true,
//     validate: {
//       isEmail: true,
//     },
//   },
//   password: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     validate: {
//       len: [8, 255],  // Password should be between 8 and 255 characters
//     },
//   },
//   age: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//     validate: {
//       min: 1,  // Age should be a positive number
//     },
//   },
//   address: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
  
//   className: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   rollNumber:{
//     type: DataTypes.INTEGER,
//     allowNull: false,
//     primaryKey: true,
//     unique: true,
//     validate: {
//       min: 1,  // Roll number should be a positive integer
//     },
//   }
  
// },
//  {
//   timestamps: true,  // Automatically adds createdAt and updatedAt fields
// });

// sequelize.sync({ alter: true })
//   .then(() => {
//     console.log('Student table created or updated.');
//   })
//   .catch((error) => {
//     console.error('Error creating or updating Teacher table:', error);
//   });

// //   Student.hasMany(Sattendance, { foreignKey: 'studentId' });
// // Sattendance.belongsTo(Student, { foreignKey: 'studentId' });

// Student.hasMany(Sattendance, { foreignKey: 'studentRollNumber' });
// Sattendance.belongsTo(Student, { foreignKey: 'studentRollNumber' });

// Student.belongsTo(Class);
// Class.hasMany(Student);


// export default Student;



import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';


const Student = sequelize.define('Student', {
  rollNumber: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    unique: true,
    validate: {
      min: 1, // Roll number should be a positive integer
    },
  },
  StudentName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [8, 255],  // Password should be between 8 and 255 characters
    },
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1, // Age should be a positive number
    },
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  class: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: true,  // Automatically adds createdAt and updatedAt fields
});

sequelize.sync({ alter: true })
  .then(() => {
    console.log('Student table created or updated.');
  })
  .catch((error) => {
    console.error('Error creating or updating Student table:', error);
    console.log(error);
  });



// Student.hasMany(Sattendance, { foreignKey: 'studentRollNumber' });
// Sattendance.belongsTo(Student, { foreignKey: 'studentRollNumber' });

// Student.belongsTo(Class);
// Class.hasMany(Student);


export default Student;
