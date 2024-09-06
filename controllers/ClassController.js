import { formatDate } from '../extra/dateFormat.js';
import Class from '../models/Class.js';

export const getClassDetails = async (req, res) => {
  try {
    const classes = await Class.findAll();
    res.json(classes);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching classes' });
  }
};

export const getClassById = async (req, res) => {
  try {
    const classDetails = await Class.findByPk(req.params.classID);
    res.json(classDetails);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching class details' });
  }
};

export const createClass = async (req, res) => {
//   try {
//     const newClass = await Class.create(req.body);
//     res.json(newClass);
//   } catch (error) {
//     res.status(500).json({ error: 'Error creating class' });
//   }
// };
const { name ,date} = req.body;

    try {
      // Check if class already exists
      const existingClass = await Class.findOne({ where: { name } });
      const formattedDate = formatDate(new Date());
      if (existingClass) {
        return res.status(400).json({ message: 'Class already exists' });
      }
  
   
  
      // Create a new class
      const classs = await Class.create({
        name,
        date: formattedDate
        
      });
  
      res.status(201).json({ message: 'Class created successfully', classs });
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong', error });
    console.log(error);
    }
};




export const updateClass = async (req, res) => {
  try {
    const updatedClass = await Class.update(req.body, {
      where: { id: req.params.classID },
    });
    res.json(updatedClass);
  } catch (error) {
    res.status(500).json({ error: 'Error updating class' });
  }
};

export const deleteClass = async (req, res) => {
  try {
    await Class.destroy({ where: { id: req.params.classID } });
    res.json({ message: 'Class deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting class' });
  }
};
