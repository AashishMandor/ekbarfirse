// import Subject from '../models/Subject.js';





// export const createsubject=async (req,res)=>{
//     const {subjectName,code,session}=req.body;
     
//     try {
//         const existingSubject=await Subject.findOne({ where: { subjectName, code, session } });
//         if (existingSubject){
//             return res.status(400).json({message:'Subject already exists'});
//         }

//         const subject = await Subject.create({
//             subjectName,
//             code,
//             session,
//             date: new Date()
//         });

//         res.status(201).json({message:'Subject created'
//         })

//         } catch (error) {
//             res.status(500).json({message:'Something went wrong',error});
//             console.log(error);
//         }

        
//     }



//     //update

//     export const updatesubject = async(req, res) =>{
//         const {subjectName}=req.params;
//         const {code,session}=req.body;
//         try {
//             const subject =await Subject.findByPk(subjectName);
//             if (!subject){
//                 return res.status(404).json({message:'Subject not found'});
//             }

//             await subject.update({
//                 code:code||subject.code,
//                 session:session||subject.session
                
//             });

//             res.status(200).json({message:'Subject updated'
//             ,subject})
//         }catch (err) {
//             res.status(200).json({message:'errored'})
//         }
//     }


//     /// get all subjects
//     export const getallsubjects = async (req, res) => {
//         try{
//             const subjects=await Subject.findAll();
//             res.status(200).json(subjects);
//         }catch (err) {
//             res.status(500).json({message:'Something went wrong',error});
//         }
//     }


import Subject from '../models/Subject.js';

export const getAllSubjects = async (req, res) => {
  try {
    const subjects = await Subject.findAll();
    res.json(subjects);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching subjects' });
  }
};

export const getSubjectById = async (req, res) => {
  try {
    const subject = await Subject.findByPk(req.params.subjectID);
    res.json(subject);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching subject details' });
  }
};

export const createSubject = async (req, res) => {
  try {
    const newSubject = await Subject.create(req.body);
    res.json(newSubject);
  } catch (error) {
    res.status(500).json({ error: 'Error creating subject' });
  }
};

export const updateSubject = async (req, res) => {
  try {
    const updatedSubject = await Subject.update(req.body, {
      where: { id: req.params.subjectID },
    });
    res.json(updatedSubject);
  } catch (error) {
    res.status(500).json({ error: 'Error updating subject' });
  }
};

export const deleteSubject = async (req, res) => {
  try {
    await Subject.destroy({ where: { id: req.params.subjectID } });
    res.json({ message: 'Subject deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting subject' });
  }
};
