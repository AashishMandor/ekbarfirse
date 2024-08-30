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

export const createSubject = async (req, res) => {
  try {
    const newSubject = await Subject.create(req.body);
    res.status(201).json(newSubject);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getSubject = async (req, res) => {
  try {
    const subject = await Subject.findByPk(req.params.id);
    if (subject) {
      res.status(200).json(subject);
    } else {
      res.status(404).json({ message: 'Subject not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getAllSubjects = async (req, res) => {
  try {
    const subjects = await Subject.findAll();
    res.status(200).json(subjects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateSubject = async (req, res) => {
  try {
    const updatedSubject = await Subject.update(req.body, {
      where: { id: req.params.id },
    });
    res.status(200).json(updatedSubject);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteSubject = async (req, res) => {
  try {
    await Subject.destroy({ where: { id: req.params.id } });
    res.status(200).json({ message: 'Subject deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Additional controller to get subjects by class
export const getSubjectsByClass = async (req, res) => {
  try {
    const subjects = await Subject.findAll({
      where: { classId: req.params.classID },
    });
    res.status(200).json(subjects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
