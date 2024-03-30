import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import EscalatorWarningIcon from '@mui/icons-material/EscalatorWarning';

const Counsollor = () => {
  const users = [
    { user: 'Ramsai', phonenumber: '123456789', email: 'asdf@gmail.com', id: '2200030830', relation: 'Father' },
    { user: 'Goutham', phonenumber: '123456789', email: 'asdf@gmail.com', id: '2200030830', relation: 'Father' },
    { user: 'Eshu', phonenumber: '123456789', email: 'asdf@gmail.com', id: '2200030830', relation: 'Father' },
    { user: 'pavan', phonenumber: '123456789', email: 'asdf@gmail.com', id: '2200030830', relation: 'Father' },
    { user: 'mydham', phonenumber: '8688136224', email: 'mern@gmail.com', id: '2200030830', relation: 'Father' },
  ];

  return (
    <div style={{ textAlign: 'center', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      <h2>
        <font face='Times new roman'>Parent Details:</font>
      </h2>
      {users.map((user, index) => (
        <Card key={index} sx={{ maxWidth: 500, margin: '10px', border: '2px solid black' }}>
          <CardMedia component="div">
            {/* You can customize the SchoolIcon here */}
            <EscalatorWarningIcon style={{ fontSize: 48, color: 'black' }} />
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" style={{ color: 'Blue', textAlign: 'left' }}>
              <h3>
                <font face="Times New Roman" size="4">
                  Parent Details
                </font>
              </h3>
            </Typography>
            <Typography variant="h6" color="black" style={{ textAlign: 'left' }}>
              <font face="Times New Roman" size="4">
                Name: {user.user}
                <br></br>
                Phonenumber: {user.phonenumber}<br></br>
                Email: {user.email}<br></br>
                ID: {user.id}<br></br>
                Relation: {user.relation}<br></br>
              </font>
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default  Counsollor;
