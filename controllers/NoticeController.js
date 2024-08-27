
import Notice from "../models/Notice.js";

export const createnotice = async (req, res) => {
    try {
      const { title, description} = req.body;
      const notice = await Notice.create({
        title,
        description,
      });
  
      res.status(201).json({ message: 'notice created successfully', notice });
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong', error });
      console.log(error);
    }
  };
  

//   export const deleteTeacher = async (req, res) => {
//     const { id } = req.params;
  
//     try {
//       // Find teacher by ID
//       const teacher = await Teacher.findByPk(id);
//       if (!teacher) {
//         return res.status(404).json({ message: 'Teacher not found' });
//       }
  
//       // Delete the teacher
//       await teacher.destroy();
//       res.status(200).json({ message: 'Teacher deleted successfully' });
//     } catch (error) {
//       res.status(500).json({ message: 'Something went wrong', error });
//     }
//   };


export const getAllNotice = async (req, res) => {
    try {
      const notice = await Notice.findAll();
      res.status(200).json(notice);
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong', error });
    }
  };