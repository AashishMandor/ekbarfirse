import { formatDate } from "../extra/dateFormat.js";
import Notice from "../models/Notice.js";



export const createnotice = async (req, res) => {
    try {
      const { title, description} = req.body;
      const formattedDate = formatDate(new Date());
      const notice = await Notice.create({
        title,
        description,
        date: formattedDate
      });
  
      res.status(201).json({ message: 'notice created successfully', notice });
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong', error });
      console.log(error);
    }
  };
  



export const getAllNotice = async (req, res) => {
    try {
      const notice = await Notice.findAll();
      res.status(200).json(notice);
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong', error });
    }
  };