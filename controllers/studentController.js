  import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
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
      const student = await Student.findByPk(req.params.rollNumber);
      res.json(student);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching student details' });
    }
  };

  export const createStudent = async (req, res) => {
  //   try {
  //     const newStudent = await Student.create(req.body);
  //     res.json(newStudent);
  //   } catch (error) {
  //     res.status(500).json({ error: 'Error creating student' });
  //     console.log(error);
  //   }
  // };
  const { rollNumber,StudentName, email, password, age,address, } = req.body;

  try {
    // Check if teacher already exists
    const existingstudent = await Student.findOne({ where: { rollNumber } });
    if (existingstudent) {
      return res.status(400).json({ message: 'student already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new teacher
    const student = await Student.create({
      rollNumber,
      StudentName,
      email,
      password: hashedPassword,
      age,
      address
    
    });

    res.status(201).json({ message: 'student created successfully', student });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error });
  console.log(error);
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
  export const Studentlogin = async (req, res) => {
    try {
      const { email, password } = req.body;

      // Find the teacher
      const student = await Student.findOne({ where: { email } });
    
      if (!student) {
      res.status(400).json({ message: 'student not found' });
      console.log(error);
        
      }

      // Compare passwords
      const isMatch = await bcrypt.compare(password, student.password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }

      // Generate a JWT token
      const token = jwt.sign(
        { name: student.name, email: student.email },
        'your_jwt_secret_key',
        { expiresIn: '1h' }
      );

      res.status(200).json({ message: 'Logged in successfully', token });
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong', error });
      console.log(error);
    }
  };