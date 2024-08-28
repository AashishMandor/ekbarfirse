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
