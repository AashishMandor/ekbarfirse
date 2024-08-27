import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Admin from '../models/Admin.js'; // Ensure model name is consistent

// Signup Controller
export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    
    const existingAdmin = await Admin.findOne({ where: { email } });
    if (existingAdmin) {
      return res.status(400).json({ message: 'Admin already exists' });
    }

    
    const hashedPassword = await bcrypt.hash(password, 10);

    
    const newAdmin = await Admin.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({ message: 'Admin created successfully', admin: newAdmin });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error });
    console.log(error);
  }
};


export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the admin
    const admin = await Admin.findOne({ where: { email } });
    if (!admin) {
      return res.status(400).json({ message: 'Admin not found' });
      
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate a JWT token
    const token = jwt.sign(
      { id: admin.id, email: admin.email },
      'your_jwt_secret_key',
      { expiresIn: '1h' }
    );

    res.status(200).json({ message: 'Logged in successfully', token });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error });
  }
};
