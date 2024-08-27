import Attendance from '../models/Attendance.js';
import Teacher from '../models/Teacher.js';

// Mark attendance for a teacher
export const markAttendance = async (req, res) => {
  const { teacherId, status } = req.body;

  try {
    const teacher = await Teacher.findByPk(teacherId);
    if (!teacher) {
      return res.status(404).json({ message: 'Teacher not found' });
    }

    const attendance = await Attendance.create({
      teacherId,
      date: new Date(),
      status,
    });

    res.status(201).json({ message: 'Attendance marked successfully', attendance });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error });
  }
};

// Get attendance of a specific teacher
export const getAttendanceByTeacher = async (req, res) => {
  const { teacherId, } = req.params;

  try {
    const attendance = await Attendance.findAll({
      where: { teacherId },
      include: [{ model: Teacher, attributes: ['name', 'email', 'subject'] }],
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
      include: [{ model: Teacher, attributes: ['name', 'email', 'subject'] }],
    });

    res.status(200).json(attendance);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error });
  }
};
