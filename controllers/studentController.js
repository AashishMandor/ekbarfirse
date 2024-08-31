import Student from '../models/Student.js';

export const getAllStudents = async (req, res) => {
  try {
    const students = await Student.findAll();
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching students' });
  }
};

export const getStudentById = async (req, res) => {
  try {
    const student = await Student.findByPk(req.params.studentID);
    res.json(student);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching student details' });
  }
};

export const createStudent = async (req, res) => {
  try {
    const newStudent = await Student.create(req.body);
    res.json(newStudent);
  } catch (error) {
    res.status(500).json({ error: 'Error creating student' });
  }
};

export const updateStudent = async (req, res) => {
  try {
    const updatedStudent = await Student.update(req.body, {
      where: { rollNumber: req.params.studentID },
    });
    res.json(updatedStudent);
  } catch (error) {
    res.status(500).json({ error: 'Error updating student' });
  }
};

export const deleteStudent = async (req, res) => {
  try {
    await Student.destroy({ where: { rollNumber: req.params.studentID } });
    res.json({ message: 'Student deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting student' });
  }
};
