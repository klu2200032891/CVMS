import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';

const SendMail = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = { email, message, subject };
      console.log(data);

      const response = await axios.post("http://localhost:3500/api/SendMail", data);
      console.log(response.data);

      setFormSubmitted(true);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <Paper elevation={10} style={{ padding: 20, width: 500, margin: '20px auto' }}>
      <div align="center">
        <h2>Send Email</h2>
      </div>
      <form onSubmit={handleFormSubmit}>
        <TextField
          label="Email"
          placeholder="Enter mail address"
          fullWidth
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          margin="normal"
        />
        <TextField
          label="Subject"
          placeholder="Enter subject"
          fullWidth
          required
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          margin="normal"
        />
        <TextField
          label="Message"
          placeholder="Enter message"
          multiline
          rows={4}
          fullWidth
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          margin="normal"
        />
        <Button type="submit" color="primary" variant="contained" fullWidth style={{ marginTop: 20 }}>
          Send Email
        </Button>
      </form>
      {formSubmitted && <p style={{ marginTop: 10, textAlign: 'center' }}>Email Sent Successfully!</p>}
    </Paper>
  );
};

export default SendMail;
