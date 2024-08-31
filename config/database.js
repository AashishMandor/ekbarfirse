import { Sequelize } from 'sequelize';

// Initialize Sequelize with MySQL connection details
const sequelize = new Sequelize('hello', 'root', 'aashish@123', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,  // Set to true if you want to see SQL queries in the console
});

// Test the database connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

export default sequelize;
