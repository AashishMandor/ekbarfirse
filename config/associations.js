import Admin from '../models/Admin.js';
import Teacher from '../models/Teacher.js';

// Define the relationship
Admin.hasMany(Teacher, {
  foreignKey: 'adminId',
  as: 'teachers',
});
Teacher.belongsTo(Admin, {
  foreignKey: 'adminId',
  as: 'admin',
});





// Sync associations (optional)
const syncAssociations = async () => {
  try {
    await Admin.sync();
    await Teacher.sync();
    console.log('Associations synchronized.');
  } catch (error) {
    console.error('Error synchronizing associations:', error);
  }
};

syncAssociations();

export { Admin, Teacher };

