
import Sattendance from "../models/Sattendance.js";


export const markAttendance = async (req, res) => {
    const { studentId, status } = req.body;

    try {
        const attendance = await Sattendance.create({
            studentId,
            date: new Date(),  // Today's date
            status
        });
        res.status(201).json(attendance);
    } catch (error) {
        res.status(500).json({ error: 'Failed to mark attendance' });
        console.log(error);
    }
};
