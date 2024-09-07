import Sequelize from 'sequelize';
import { formatDate } from '../extra/dateFormat.js';
import Class from '../models/Class.js';
import Student from '../models/Student.js';
import Subject from '../models/Subject.js';


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
    const classDetails = await Class.findByPk(req.params.classID, {
      include: [
        {
          model: Student,
          as: 'Students', // Use the exact alias defined in the association
          attributes: ['rollNumber', 'StudentName', 'email', 'age', 'address'],
          where: { classId: Sequelize.col('Class.classId') },
          required: false,
        },
        {
          model: Subject,
          as: 'Subjects', // Use the exact alias defined in the association
          attributes: ['subjectName', 'code', 'session'],
          where: { classId: Sequelize.col('Class.classId') },
          required: false,
        }
      ]
    });

    if (!classDetails) {
      return res.status(404).json({ error: 'Class not found' });
    }

    res.json(classDetails);
  } catch (error) {
    console.error('Error fetching class details:', error);
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


export const getStudentsByClassId = async (req, res) => {
  try {
    const classID = req.params.classID;
    const students = await Student.findAll({
      where: { classId: classID },
      attributes: ['rollNumber', 'StudentName', 'email', 'age', 'address'],
      include: [
        {
          model: Class,
          as: 'Class', // Alias as defined in associations
          attributes: ['name'] // You can adjust the fields you want to return for the class
        }
      ]
    });

    if (students.length === 0) {
      return res.status(404).json({ error: 'No students found for this class' });
    }

    res.json(students);
  } catch (error) {
    console.error('Error fetching students:', error);
    res.status(500).json({ error: 'Error fetching students' });
  }
};


export const getSubjectsByClassId = async (req, res) => {
  try {
    const classID = req.params.classID;
    const subjects = await Subject.findAll({
      where: { classId: classID },
      attributes: ['subjectName', 'code', 'session'],
      include: [
        {
          model: Class,
          as: 'Class', // Alias as defined in associations
          attributes: ['name'] // You can adjust the fields you want to return for the class
        }
      ]
    });

    if (subjects.length === 0) {
      return res.status(404).json({ error: 'No subjects found for this class' });
    }

    res.json(subjects);
  } catch (error) {
    console.error('Error fetching subjects:', error);
    res.status(500).json({ error: 'Error fetching subjects' });
  }
};