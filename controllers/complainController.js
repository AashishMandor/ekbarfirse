// import Complain from "../models/complain.js";


// export const createcomplain = async (req, res) => {
    

//     try {
//       const {  content} = req.body;
//       const complain = await Complain.create({
    
//         content,
//         date:new Date()

        
//       });
  
//       res.status(201).json({ message: 'notice created successfully', complain });
//     } catch (error) {
//       res.status(500).json({ message: 'Something went wrong', error });
//       console.log(error);
//     }
//   };




import { formatDate } from '../extra/dateFormat.js'; // Import if using a separate file
import Complain from "../models/complain.js";

export const createcomplain = async (req, res) => {
    try {
        const { content } = req.body;
        const formattedDate = formatDate(new Date());

        const complain = await Complain.create({
            content,
            date: formattedDate
        });

        res.status(201).json({ message: 'Complain created successfully', complain });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong', error });
        console.log(error);
    }
};


export const getAllComplain = async (req, res) => {
    try {
      const complain = await Complain.findAll();
      res.status(200).json(complain);
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong', error });
      console.log(error);
    }
  };

  export const deleteComplain = async (req, res) => {
    const { id } = req.params;
  
    try {
      // Find complain by ID
      const complain = await Complain.findByPk(id);
      if (!complain) {
        return res.status(404).json({ message: 'Compalin not found' });
      }
  
      // Delete the complain
      await complain.destroy();
      res.status(200).json({ message: 'complain deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong', error });
    }
  };
  