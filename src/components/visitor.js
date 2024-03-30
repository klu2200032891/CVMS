import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import GroupIcon from '@mui/icons-material/Group';

const Visitor = () => {
  const users = [
    { user: 'Ramsai', phonenumber: '123456789'   },
    { user: 'Goutham', phonenumber: '123456789'   },
  ];

  return (
    <div style={{ textAlign: 'center', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      <h2>
        <font face='Times new roman'>Visitor Details:</font>
      </h2>
      {users.map((user, index) => (
        <Card key={index} sx={{ maxWidth: 500, margin: '10px' , border: '2px solid black'}}>
          <CardMedia component="div">
            {/* You can customize the SchoolIcon here */}
            <GroupIcon style={{ fontSize: 48, color: 'black' }} />
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" style={{ color: 'Blue', textAlign: 'left' }}>
              <h3>
                <font face="Times New Roman" size="4">
                  Visitor Details
                </font>
              </h3>
            </Typography>
            <Typography variant="h6" color="black" style={{ textAlign: 'left' }}>
              <font face="Times New Roman" size="4">
                Name: {user.user}
                <br></br>
                Phonenumber: {user.phonenumber}<br></br>
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

export default Visitor;
