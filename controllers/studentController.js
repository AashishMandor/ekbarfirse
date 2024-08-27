import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Sattendance from "../models/Sattendance.js";
import Student from "../models/Student.js";


export const createstudents = async (req, res) => {
    const { name, email, password, age, address, className } = req.body;

    try {
        // Check if student already exists
        const existingstudents = await Student.findOne({ where: { email } });
        if (existingstudents) {
            return res.status(400).json({ message: 'student already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new student
        const student = await Student.create({
            name,
            email,
            age,
            address,
            className,
            password: hashedPassword,

        });

        res.status(201).json({ message: 'student created successfully', student });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong', error });
        console.log(error);
    }
};


// Update an existing student
export const updatestudent = async (req, res) => {
    const { id } = req.params;
    const { name, email, password, className} = req.body;
  
    try {
      // Find student by ID
      const student = await Student.findByPk(id);
      if (!student) {
        return res.status(404).json({ message: 'student not found' });
      }
  
      // Hash the new password if provided
      let hashedPassword = Student.password;
      if (password) {
        hashedPassword = await bcrypt.hash(password, 10);
      }
  
      // Update student details
      await student.update({
        name: name || Student.name,
        email: email || Student.email,
        password: hashedPassword,
        className: className || Student.className
      });
  
      res.status(200).json({ message: 'student updated successfully', student });
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong', error });
    }
  };
  
  // Get details of a single student
  export const getstudentById = async (req, res) => {
    const { id } = req.params;
  
    try {
      const student = await Student.findByPk(id);
      if (!student) {
        return res.status(404).json({ message: 'student not found' });
      }
  
      res.status(200).json(student);
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong', error });
      console.log(error);
    }
  };
  
  // Get all students
  export const getAllstudents = async (req, res) => {
    try {
      const students = await Student.findAll();
      res.status(200).json(students);
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong', error });
    }
  };
  
  // Delete a student
  export const deletestudent = async (req, res) => {
    const { id } = req.params;
  
    try {
      // Find student by ID
      const student = await Student.findByPk(id);
      if (!student) {
        return res.status(404).json({ message: 'student not found' });
      }
  
      // Delete the student
      await student.destroy();
      res.status(200).json({ message: 'student deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong', error });
    }
  };
  
  
  export const studentlogin = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Find the student by email
      const student = await Student.findOne({ where: { email } });
      
      if (!student) {
        return res.status(400).json({ message: 'Student not found' });
      }
  
      // Compare passwords
      const isMatch = await bcrypt.compare(password, student.password); // Use 'student.password'
      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }
  
      // Generate a token (assuming you want to use JWT for authentication)
      const token = jwt.sign(
        { id: student.id, email: student.email },
        'your_secret_key', // Replace with your actual secret key
        { expiresIn: '1h' } // Token expiration time
      );
  
      res.status(200).json({ message: 'Logged in successfully', token });
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong', error });
      console.log(error);
    }
  };


export const getAllStudentsWithAttendance = async (req, res) => {
    try {
        const students = await Student.findAll({
            include: [
                {
                    model: Sattendance,
                    attributes: ['date', 'status']
                }
            ]
        });
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch students' });
        console.log(error );
    }
};
  
