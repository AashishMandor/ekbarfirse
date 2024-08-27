import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Teacher from '../models/Teacher.js';

// Create a new teacher
export const createTeacher = async (req, res) => {
  const { name, email, password, subject } = req.body;

  try {
    // Check if teacher already exists
    const existingTeacher = await Teacher.findOne({ where: { email } });
    if (existingTeacher) {
      return res.status(400).json({ message: 'Teacher already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new teacher
    const teacher = await Teacher.create({
      name,
      email,
      password: hashedPassword,
      subject
    });

    res.status(201).json({ message: 'Teacher created successfully', teacher });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error });
  }
};

// Update an existing teacher
export const updateTeacher = async (req, res) => {
  const { id } = req.params;
  const { name, email, password, subject } = req.body;

  try {
    // Find teacher by ID
    const teacher = await Teacher.findByPk(id);
    if (!teacher) {
      return res.status(404).json({ message: 'Teacher not found' });
    }

    // Hash the new password if provided
    let hashedPassword = teacher.password;
    if (password) {
      hashedPassword = await bcrypt.hash(password, 10);
    }

    // Update teacher details
    await teacher.update({
      name: name || teacher.name,
      email: email || teacher.email,
      password: hashedPassword,
      subject: subject || teacher.subject
    });

    res.status(200).json({ message: 'Teacher updated successfully', teacher });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error });
  }
};

// Get details of a single teacher
export const getTeacherById = async (req, res) => {
  const { id } = req.params;

  try {
    const teacher = await Teacher.findByPk(id);
    if (!teacher) {
      return res.status(404).json({ message: 'Teacher not found' });
    }

    res.status(200).json(teacher);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error });
  }
};

// Get all teachers
export const getAllTeachers = async (req, res) => {
  try {
    const teachers = await Teacher.findAll();
    res.status(200).json(teachers);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error });
  }
};
// Delete a teacher

export const deleteTeacher = async (req, res) => {
  const { id } = req.params;

  try {
    // Find teacher by ID
    const teacher = await Teacher.findByPk(id);
    if (!teacher) {
      return res.status(404).json({ message: 'Teacher not found' });
    }

    // Delete the teacher
    await teacher.destroy();
    res.status(200).json({ message: 'Teacher deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error });
  }
};


export const Teacherlogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the teacher
    const teacher = await Teacher.findOne({ where: { email } });
   
    if (!teacher) {
    res.status(400).json({ message: 'Teacher not found' });
    console.log(error);
      
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, teacher.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate a JWT token
    const token = jwt.sign(
      { id: teacher.id, teacher: teacher.email },
      'your_jwt_secret_key',
      { expiresIn: '1h' }
    );

    res.status(200).json({ message: 'Logged in successfully', token });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error });
    console.log(error);
  }
};

