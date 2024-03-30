import React, { useEffect, useState } from 'react';
import axios from 'axios';
import QRCode from 'qrcode.react';
import './StudentsQR.css'; 

const StudentsQR = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get('http://localhost:3500/students');
        setStudents(response.data);
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };

    fetchStudents();
  }, []);

  return (
    <div className="students-container">
      {students.map((student) => (
        <div key={student._id} className="student-card">
          <h3>{student.name}</h3>
          <QRCode value={JSON.stringify(student)} className="qr-code" />
          <h6>Course: {student.course}</h6>
          <h6>CGPA: {student.cgpa}</h6>
        </div>
      ))}
    </div>
  );
};

export default StudentsQR;
