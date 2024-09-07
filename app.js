
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import adminRoutes from './routes/adminRoutes.js';
import attendanceRoutes from './routes/attendanceRoutes.js';
import classRoutes from './routes/ClassRoutes.js';
import complainRoutes from './routes/complainRoutes.js';
import noticeRoutes from './routes/NoticeRoutes.js';
import studentAttendanceRoutes from './routes/SattendanceRoutes.js';
import studentRoutes from './routes/studentRoutes.js';
import subjectRoutes from './routes/subjectRoutes.js';
import teacherRoutes from './routes/teacherRoutes.js';
// Load environment variables
dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use (cors());
app.use('/api/admin', adminRoutes);   //post  == localhost:5000/api/admin/signup
app.use('/api/teachers', teacherRoutes);// post == localhost:5000/api/teachers/======create teacher
//
app.use('/api/attendance', attendanceRoutes);
// localhost:5000/api/attendance/mark
//localhost:5000/api/attendance/teacher/1
// app.use('/api/classes', studentRoutes);
// app.use('/api/classes', classRoutes);
// app.use(`/api/classes`, subjectRoutes);
app.use('/api/notice', noticeRoutes);
app.use('/api/complain',complainRoutes);
app.use('/api/studentAttendance', studentAttendanceRoutes);


app.use('/api/classes', classRoutes);
app.use('/api/classes', studentRoutes);
app.use('/api/classes', subjectRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
