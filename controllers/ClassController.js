import Class from '../models/Class.js';


export const createclass=async(req,res)=>{

const {name}=req.body;
try{
    const existingClass=await Class.findOne({ where: { name } })
    if (existingClass){
        return res.status(400).json({message:'class already exists'});
    }

const classs = await Class.create({
    name,
    date: new Date(),
    
  });

  res.status(201).json({ message: 'class created successfully', classs });
} catch (error) {
  res.status(500).json({ message: 'Something went wrong', error });
}
};



export const getAllClass = async (req, res) => {
  try {
    const classs = await Class.findAll();
    res.status(200).json(classs);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error });
  }
};


export const getClassById = async (req, res) => {
  const { id } = req.params;

  try {
    const classs = await Class.findByPk(id);
    if (!classs) {
      return res.status(404).json({ message: 'Teacher not found' });
    }

    res.status(200).json(classs);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error });
  }
};

