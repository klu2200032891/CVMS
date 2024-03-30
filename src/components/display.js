import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './StudentDetails.CSS';

const StudentDetails = () => {
  const [studentData, setStudentData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editData, setEditData] = useState({
    studentId: '',
    name: '',
    course: '',
    cgpa: '',
    ID: '',
    mail: '',
    mobilenumber: '',
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const response = await axios.get('http://localhost:3500/students/');
        setStudentData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching student data:', error);
      }
    };

    fetchStudentData();
  }, []);

  const handleEdit = async (studentId) => {
    try {
      const response = await axios.get(`http://localhost:3500/students/${studentId}`);
      const { _id, name, course, cgpa, ID, mail, mobilenumber } = response.data;
      setEditData({
        studentId: _id,
        name,
        course,
        cgpa,
        ID,
        mail,
        mobilenumber,
      });
      setIsEditing(true);
    } catch (error) {
      console.error('Error fetching student for edit:', error);
    }
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:3500/students/${editData.studentId}`, {
        name: editData.name,
        course: editData.course,
        cgpa: editData.cgpa,
        ID: editData.ID,
        mail: editData.mail,
        mobilenumber: editData.mobilenumber,
      });

      setStudentData((prevData) =>
        prevData.map((student) =>
          student._id === editData.studentId
            ? { ...student, ...editData }
            : student
        )
      );

      setIsEditing(false);
      console.log(`Update student with ID: ${editData.studentId}`);
    } catch (error) {
      console.error('Error updating student:', error);
    }
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleDelete = async (studentId) => {
    try {
      await axios.delete(`http://localhost:3500/students/${studentId}`);
      setStudentData((prevData) => prevData.filter((student) => student._id !== studentId));
      console.log(`Delete student with ID: ${studentId}`);
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  };

  return (
    <div>
      <h2>Student Details</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="student-cards-container">
          {studentData.map((student, index) => (
            <div key={student._id} className={`student-card card-${index % 3 + 1}`}>
              <div className="student-info">
                <p><strong>Name:</strong> {student.name}</p>
                <p><strong>Course:</strong> {student.course}</p>
                <p><strong>CGPA:</strong> {student.cgpa}</p>
                <p><strong>ID:</strong> {student.ID}</p>
                <p><strong>Email:</strong> {student.mail}</p>
                <p><strong>Phone Number:</strong> {student.mobilenumber}</p>
              </div>
              <div className="button-group">
                <button onClick={() => handleEdit(student._id)}>Update</button>
                <button onClick={() => handleDelete(student._id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {isEditing && (
        <div className="student-card">
          <h2>Edit Student Information</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Full Name:</label>
              <input type="text" id="name" name="name" value={editData.name} onChange={handleInputChange} />
            </div>

            <div className="form-group">
              <label htmlFor="course">Course:</label>
              <input type="text" id="course" name="course" value={editData.course} onChange={handleInputChange} />
            </div>

            <div className="form-group">
              <label htmlFor="cgpa">CGPA:</label>
              <input type="number" id="cgpa" name="cgpa" value={editData.cgpa} onChange={handleInputChange} />
            </div>

            <div className="form-group">
              <label htmlFor="ID">Student ID:</label>
              <input type="text" id="ID" name="ID" value={editData.ID} onChange={handleInputChange} />
            </div>

            <div className="form-group">
              <label htmlFor="mail">Email:</label>
              <input type="text" id="mail" name="mail" value={editData.mail} onChange={handleInputChange} />
            </div>

            <div className="form-group">
              <label htmlFor="mobilenumber">Phone Number:</label>
              <input type="text" id="mobilenumber" name="mobilenumber" value={editData.mobilenumber} onChange={handleInputChange} />
            </div>

            <div className="button-group">
              <button type="button" onClick={handleUpdate}>Update</button>
              <button type="button" onClick={handleCancelEdit}>Cancel</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default StudentDetails;
