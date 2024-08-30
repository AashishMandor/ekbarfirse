
import { formatDate } from "../extra/dateFormat.js";
import Sattendance from "../models/Sattendance.js";
import Student from "../models/Student.js";


// export const markAttendance = async (req, res) => {
//     const { studentRollNumber, status } = req.body;
//     const formattedDate = formatDate(new Date());

//     try {
//         const attendance = await Sattendance.create({
//             studentRollNumber,
//             date: formattedDate,  // Today's date
//             status
//         });
//         res.status(201).json(attendance);
//     } catch (error) {
//         res.status(500).json({ error: 'Failed to mark attendance' });
//         console.log(error);
//     }
// };



export const markAttendance = async (req, res) => {
    const { studentRollNumber, status } = req.body;
    const formattedDate = formatDate(new Date());

    try {
        // Check if the attendance for this student on today's date already exists
        const existingAttendance = await Sattendance.findOne({
            where: { studentRollNumber, date: formattedDate }
        });

        if (existingAttendance) {
            return res.status(400).json({ error: 'Attendance has already been marked for today' });
        }

        // If no attendance record exists for today, create a new one
        const attendance = await Sattendance.create({
            studentRollNumber,
            date: formattedDate,
            status
        });

        res.status(201).json(attendance);
    } catch (error) {
        res.status(500).json({ error: 'Failed to mark attendance' });
        console.log(error);
    }
};



// Get attendance of a specific student
export const getAttendanceByRollNumber = async (req, res) => {
    const { studentRollNumber } = req.params;
  
    try {
      const attendanceRecords = await Sattendance.findAll({
        where: { studentRollNumber: studentRollNumber },  // Updated where clause
        include: [{ model: Student, attributes: ['StudentName', 'className', 'rollNumber'] }]

       
        
      });
  
      if (!attendanceRecords.length) {
        return res.status(404).json({ message: 'No attendance records found for this student' });
      }
  
      res.status(200).json(attendanceRecords);
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong', error });
      console.log(error);
    }
  };


  export const getAttendanceByClassName = async (req, res) => {
    const { className } = req.params;
  
    try {
        const attendanceRecords = await Sattendance.findAll({
            include: [
                {
                    model: Student,
                    attributes: ['StudentName', 'class', 'rollNumber'],
                    where: { class: className }  // Filter by class name
                }
            ]
        });

        if (!attendanceRecords.length) {
            return res.status(404).json({ message: `No attendance records found for class ${className}` });
        }

        res.status(200).json(attendanceRecords);
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong', error });
        console.log(error);
    }
};