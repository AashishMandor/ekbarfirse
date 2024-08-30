import { formatDate } from '../extra/dateFormat.js';
import Attendance from '../models/Attendance.js';
import Teacher from '../models/Teacher.js';

// Mark attendance for a teacher
export const markAttendance = async (req, res) => {
  const { teacherName, status } = req.body;
  const formattedDate = formatDate(new Date());

  try {
    
    const teacher = await Teacher.findByPk(teacherName);
    if (!teacher) {
      return res.status(404).json({ message: 'Teacher not found' });
    }

    
    const existingAttendance = await Attendance.findOne({
      where: {
        teacherName,
        date: formattedDate,
      },
    });

    if (existingAttendance) {
      return res.status(400).json({ message: 'Attendance has already been marked for today' });
    }

    // If not, mark attendance
    const attendance = await Attendance.create({
      teacherName,
      date: formattedDate,
      status,
    });

    res.status(201).json({ message: 'Attendance marked successfully', attendance });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error });
  }
};


// Get attendance of a specific teacher
export const getAttendanceByTeacher = async (req, res) => {
  const { teacherName, } = req.params;

  try {
    const attendance = await Attendance.findAll({
      where: { teacherName },
      include: [{ model: Teacher, attributes: ['name', 'email', 'subject','classteacher'] }],
    });

    if (!attendance.length) {
      return res.status(404).json({ message: 'No attendance records found for this teacher' });
    }

    res.status(200).json(attendance);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error });
  }
};

// Get all attendance records
export const getAllAttendance = async (req, res) => {
  try {
    const attendance = await Attendance.findAll({
      include: [{ model: Teacher, attributes: ['name', 'email', 'subject','classteacher'] }],
    });

    res.status(200).json(attendance);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error });
  }
};
