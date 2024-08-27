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
   
