import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import axios from 'axios';
//import './components/StudentDetails.css';

const StudentForm = () => {
  const [formData, setFormData] = useState({
    course: '',
    cgpa: '',
    id: '',
    name: '',
    email: '',
    phoneNumber: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const paperStyle = { padding: 20, width: 500, margin: '20px auto' };
  const avatarStyle = { backgroundColor: '#1bbd7e' };
  const btnStyle = { margin: '20px 0' };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(formData); 
      const response = await axios.post('http://localhost:3500/students/', formData);
      console.log(response.data);
      setFormSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <Grid container justifyContent="center">
      {!formSubmitted && (
        <Paper elevation={10} style={paperStyle}>
          <br />
          <Grid align="center">
            <Avatar style={avatarStyle}>🎓</Avatar>
            <br />
            <Typography variant="h5">Student Form</Typography>
          </Grid>
          <br />
          <form onSubmit={handleFormSubmit}>
            <Grid item xs={12}>
              <TextField
                name="name"
                label="name"
                placeholder="Enter your name"
                fullWidth
                required
                value={formData.name}
                onChange={handleFormChange}
              />
            </Grid>
            <br />
            <Grid item xs={12}>
              <TextField
                name="course"
                label="Course"
                placeholder="Enter your course"
                fullWidth
                required
                value={formData.course}
                onChange={handleFormChange}
              />
            </Grid>
            <br />
            <Grid item xs={12}>
              <TextField
                name="cgpa"
                label="CGPA"
                placeholder="Enter your CGPA"
                fullWidth
                required
                value={formData.cgpa}
                onChange={handleFormChange}
              />
            </Grid>
            <br />
            <Grid item xs={12}>
              <TextField
                name="ID"
                label="ID"
                placeholder="Enter your ID"
                fullWidth
                required
                value={formData.ID}
                onChange={handleFormChange}
              />
            </Grid>
            <br />
            <Grid item xs={12}>
              <TextField
                name="mail"
                label="Email"
                placeholder="Enter your email"
                fullWidth
                required
                value={formData.mail}
                onChange={handleFormChange}
              />
            </Grid>
            <br />
            <Grid item xs={12}>
              <TextField
                name="mobilenumber"
                label="Phone Number"
                placeholder="Enter your phone number"
                fullWidth
                required
                value={formData.mobilenumber}
                onChange={handleFormChange}
              />
            </Grid>
            <br />
            <Grid item xs={12}>
              <Button type="submit" color="primary" variant="contained" style={btnStyle} fullWidth>
                Submit
              </Button>
            </Grid>
          </form>
        </Paper>
      )}
      {formSubmitted && <Typography variant="h6">Form Submitted Successfully!</Typography>}
    </Grid>
  );
};

export default StudentForm;