  import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Class from '../models/Class.js';
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
    const { rollNumber, StudentName, email, password, age, address } = req.body;
    const { classId } = req.params;
  
    
    // Debug: Check if classId is coming correctly
  
    try {
      // Check if the class exists
      const classExists = await Class.findByPk(classId);
      console.log('Class Exists:', classExists);  // Debug: Check if Class.findByPk works
  
      if (!classExists) {
        return res.status(404).json({ message: 'Class not found' });
      }
  
      // Continue with creating the student
      const existingStudent = await Student.findOne({ where: { email } });
      if (existingStudent) {
        return res.status(400).json({ message: 'Student already exists' });
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const student = await Student.create({
        rollNumber,
        StudentName,
        email,
        password: hashedPassword,
        age,
        address,
        classId: parseInt(classId, 10), // Ensure classId is an integer
      });
  
      res.status(201).json({ message: 'Student created successfully', student });
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