// import { formatDate } from '../extra/dateFormat.js';
// import Class from '../models/Class.js';


// export const createclass=async(req,res)=>{

// const {name}=req.body;
// try{
//     const existingClass=await Class.findOne({ where: { name } })
//     const formattedDate = formatDate(new Date());
//     if (existingClass){
//         return res.status(400).json({message:'class already exists'});
//     }

// const classs = await Class.create({
//     name,
//     date: formattedDate,
    
//   });

//   res.status(201).json({ message: 'class created successfully', classs });
// } catch (error) {
//   res.status(500).json({ message: 'Something went wrong', error });
//   console.log(error);
// }
// };



// export const getAllClass = async (req, res) => {
//   try {
//     const classs = await Class.findAll();
//     res.status(200).json(classs);
//   } catch (error) {
//     res.status(500).json({ message: 'Something went wrong', error });
//   }
// };


// export const getClassById = async (req, res) => {
//   const { name } = req.params;

//   try {
//     const classs = await Class.findByPk(name);
//     if (!classs) {
//       return res.status(404).json({ message: 'Teacher not found' });
//     }

//     res.status(200).json(classs);
//   } catch (error) {
//     res.status(500).json({ message: 'Something went wrong', error });
//   }
// };



import Class from '../models/Class.js';
import Subject from '../models/Subject.js';
import Teacher from '../models/Teacher.js';



export const createclass=async(req,res)=>{

const {name}=req.body;
try{
    const existingClass=await Class.findOne({ where: { name } })
    const formattedDate = formatDate(new Date());
    if (existingClass){
        return res.status(400).json({message:'class already exists'});
    }

const classs = await Class.create({
    name,
    date: formattedDate,
    
  });

  res.status(201).json({ message: 'class created successfully', classs });
} catch (error) {
  res.status(500).json({ message: 'Something went wrong', error });
  console.log(error);
}
};


export const getClassDetails = async (req, res) => {
  try {
    const classDetails = await Class.findByPk(req.params.classID);
    if (classDetails) {
      res.status(200).json(classDetails);
    } else {
      res.status(404).json({ message: 'Class not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getClassSubjects = async (req, res) => {
  try {
    const classSubjects = await Subject.findAll({
      where: { classId: req.params.classID },
    });
    res.status(200).json(classSubjects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getClassStudents = async (req, res) => {
  try {
    const classStudents = await Teacher.findAll({
      where: { classId: req.params.classID },
    });
    res.status(200).json(classStudents);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
