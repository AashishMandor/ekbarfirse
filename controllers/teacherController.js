import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
// import Teacher from '../models/Teacher.js';

// // Create a new teacher
// export const createTeacher = async (req, res) => {
//   const { name, email, password, subject,classteacher } = req.body;

//   try {
//     // Check if teacher already exists
//     const existingTeacher = await Teacher.findOne({ where: { email } });
//     if (existingTeacher) {
//       return res.status(400).json({ message: 'Teacher already exists' });
//     }

//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create a new teacher
//     const teacher = await Teacher.create({
//       name,
//       email,
//       password: hashedPassword,
//       subject,
//       classteacher
//     });

//     res.status(201).json({ message: 'Teacher created successfully', teacher });
//   } catch (error) {
//     res.status(500).json({ message: 'Something went wrong', error });
//   console.log(error);
//   }
// };


// // export const createTeacher = async (req, res) => {
// //   const { name, email, password, subjectName, classteacher } = req.body;

// //   try {
// //     // Check if teacher already exists
// //     const existingTeacher = await Teacher.findOne({ where: { email } });
// //     if (existingTeacher) {
// //       return res.status(400).json({ message: 'Teacher already exists' });
// //     }

// //     // Hash the password
// //     const hashedPassword = await bcrypt.hash(password, 10);

// //     // Create a new teacher
// //     const teacher = await Teacher.create({
// //       name,
// //       email,
// //       password: hashedPassword,
// //       classteacher
// //     });

// //     // Assign subjects to the teacher
// //     if (subject && subject.length > 0) {
// //       const subjects = await Subject.findAll({ where: { subjectName: subject } });
// //       await teacher.addSubjects(subjects);
// //     }

// //     res.status(201).json({ message: 'Teacher created successfully', teacher });
// //   } catch (error) {
// //     res.status(500).json({ message: 'Something went wrong', error });
// //   }
// // };


// // Update an existing teacher
// export const updateTeacher = async (req, res) => {
//   const { id } = req.params;
//   const { name, email, password, subject,classteacher } = req.body;

//   try {
//     // Find teacher by ID
//     const teacher = await Teacher.findByPk(id);
//     if (!teacher) {
//       return res.status(404).json({ message: 'Teacher not found' });
//     }

//     // Hash the new password if provided
//     let hashedPassword = teacher.password;
//     if (password) {
//       hashedPassword = await bcrypt.hash(password, 10);
//     }

//     // Update teacher details
//     await teacher.update({
//       name: name || teacher.name,
//       email: email || teacher.email,
//       password: hashedPassword,
//       subject: subject || teacher.subject,
//       classteacher: classteacher || teacher.classteacher,
      
//     });

//     res.status(200).json({ message: 'Teacher updated successfully', teacher });
//   } catch (error) {
//     res.status(500).json({ message: 'Something went wrong', error });
//   }
// };

// // Get details of a single teacher
// export const getTeacherById = async (req, res) => {
//   const { name } = req.params;

//   try {
//     const teacher = await Teacher.findByPk(name,{
//       include: Subject
//     });
    
//     if (!teacher) {
//       return res.status(404).json({ message: 'Teacher not found' });
//     }

//     res.status(200).json(teacher);
//   } catch (error) {
//     res.status(500).json({ message: 'Something went wrong', error });
//   }
// };

// // Get all teachers
// export const getAllTeachers = async (req, res) => {
//   try {
//     // const teachers = await Teacher.findAll();
//     const teachers = await Teacher.findAll({
//       include: Subject
//     });
    
//     res.status(200).json(teachers);
//   } catch (error) {
//     res.status(500).json({ message: 'Something went wrong', error });
//   }
// };
// // Delete a teacher

// export const deleteTeacher = async (req, res) => {
//   const { name } = req.params;

//   try {
//     // Find teacher by ID
//     const teacher = await Teacher.findByPk(name);
//     if (!teacher) {
//       return res.status(404).json({ message: 'Teacher not found' });
//     }

//     // Delete the teacher
//     await teacher.destroy();
//     res.status(200).json({ message: 'Teacher deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ message: 'Something went wrong', error });
//   }
// };


// export const Teacherlogin = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // Find the teacher
//     const teacher = await Teacher.findOne({ where: { email } });
   
//     if (!teacher) {
//     res.status(400).json({ message: 'Teacher not found' });
//     console.log(error);
      
//     }

//     // Compare passwords
//     const isMatch = await bcrypt.compare(password, teacher.password);
//     if (!isMatch) {
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     // Generate a JWT token
//     const token = jwt.sign(
//       { name: teacher.name, teacher: teacher.email },
//       'your_jwt_secret_key',
//       { expiresIn: '1h' }
//     );

//     res.status(200).json({ message: 'Logged in successfully', token });
//   } catch (error) {
//     res.status(500).json({ message: 'Something went wrong', error });
//     console.log(error);
//   }
// };




import Teacher from '../models/Teacher.js';

export const getAllTeachers = async (req, res) => {
  try {
    const teachers = await Teacher.findAll();
    res.json(teachers);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching teachers' });
  }
};

export const getTeacherById = async (req, res) => {
  try {
    const teacher = await Teacher.findByPk(req.params.teacherID);
    res.json(teacher);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching teacher details' });
  }
};

export const createTeacher = async (req, res) => {
  // try {
  //   const newTeacher = await Teacher.create(req.body);
  //   res.json(newTeacher);
  // } catch (error) {
  //   res.status(500).json({ error: 'Error creating teacher' });
  //   console.log(error);
  // }
  const { name, email, password ,subject} = req.body;

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
    console.log(error);
    }
};

export const updateTeacher = async (req, res) => {
  try {
    const updatedTeacher = await Teacher.update(req.body, {
      where: { id: req.params.teacherID },
    });
    res.json(updatedTeacher);
  } catch (error) {
    res.status(500).json({ error: 'Error updating teacher' });
  }
};

export const deleteTeacher = async (req, res) => {
  try {
    await Teacher.destroy({ where: { id: req.params.teacherID } });
    res.json({ message: 'Teacher deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting teacher' });
  }
};




export const Teacherlogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the teacher
    const teacher = await Teacher.findOne({ where: { email } });

    if (!teacher) {
      console.log('Teacher not found');
      return res.status(400).json({ message: 'Teacher not found' });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, teacher.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate a JWT token
    const token = jwt.sign(
      { name: teacher.name, teacher: teacher.email },
      'your_jwt_secret_key',
      { expiresIn: '1h' }
    );

    return res.status(200).json({ message: 'Logged in successfully', token });
  } catch (error) {
    console.log('Something went wrong:', error);
    return res.status(500).json({ message: 'Something went wrong', error });
  }
};
