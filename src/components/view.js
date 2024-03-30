import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import GroupIcon from '@mui/icons-material/Group';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const Views = () => {
  const initialRows = [
    { user: 'Ramsai', phonenumber: '123456789', id: '2200030830', purpose: 'visit', time: '5:30', relation: 'Parent' },
    { user: 'Goutham', phonenumber: '123456789', id: '2200030830', purpose: 'visit', time: '5:30', relation: 'Visitor' },
    { user: 'Eshu', phonenumber: '123456789', id: '2200030830', purpose: 'visit', time: '5:30', relation: 'parent' },
    { user: 'pavan', phonenumber: '123456789', id: '2200030830', purpose: 'visit', time: '5:30', relation: 'visitor' },
    { user: 'mydham', phonenumber: '8688136224', id: '2200030830', purpose: 'visit', time: '5:30', relation: 'Father' },
    { user: 'Eshu', cgpa: '9.6', relation: 'Student', course: 'cse' },
    { user: 'pavan', cgpa: '9.5', relation: 'Student', course: 'cse' },
    { user: 'Gowtham', cgpa: '9.4', relation: 'Student', course: 'cse' },
  ];

  const [filteredRows, setFilteredRows] = useState([]);
  const [selectedRelation, setSelectedRelation] = useState('');

  // Filter function for Students
  const filterRowsByStudents = () => {
    const filtered = initialRows.filter((row) => row.relation.toLowerCase() === 'student');
    setFilteredRows(filtered);
  };

  // Filter function for Visitors
  const filterRowsByVisitors = () => {
    const filtered = initialRows.filter((row) => row.relation.toLowerCase() === 'visitor');
    setFilteredRows(filtered);
  };

  // Filter function for Parents
  const filterRowsByParents = () => {
    const filtered = initialRows.filter((row) => row.relation.toLowerCase() === 'parent');
    setFilteredRows(filtered);
  };

  // Reset filter function
  const clearFilters = () => {
    setFilteredRows([]);
    setSelectedRelation('');
  };

  return (
    <div style={{ textAlign: 'center', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      <div>
        <center>
          <Select
            value={selectedRelation}
            onChange={(e) => {
              const selected = e.target.value;
              setSelectedRelation(selected);
              switch (selected.toLowerCase()) {
                case 'students':
                  filterRowsByStudents();
                  break;
                case 'visitors':
                  filterRowsByVisitors();
                  break;
                case 'parents':
                  filterRowsByParents();
                  break;
                case 'clear':
                  clearFilters();
                  break;
                default:
                  clearFilters();
              }
            }}
          >
            <MenuItem value='students'>Students</MenuItem>
            <MenuItem value='visitors'>Visitors</MenuItem>
            <MenuItem value='parents'>Parents</MenuItem>
            <MenuItem value='clear'>Clear Filters</MenuItem>
          </Select>
        </center>
      </div>
      <h2>
        <font face='Times new roman'> Details:</font>
      </h2>
      {(filteredRows.length > 0 ? filteredRows : initialRows).map((user, index) => (
        <Card key={index} sx={{ maxWidth: 500, margin: '10px' }}>
          <CardMedia component="div">
            <GroupIcon style={{ fontSize: 48, color: 'blue' }} />
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" style={{ color: 'Blue', textAlign: 'left' }}>
              <h3>
                <font face="Times New Roman" size="4">
                  Details
                </font>
              </h3>
            </Typography>
            {user.relation.toLowerCase() === 'student' ? (
              <Typography variant="h6" color="black" style={{ textAlign: 'left' }}>
                <font face="Times New Roman" size="4">
                  Name: {user.user}
                  <br></br>
                  CGPA: {user.cgpa}
                  <br></br>
                </font>
              </Typography>
            ) : (
              <Typography variant="h6" color="black" style={{ textAlign: 'left' }}>
                <font face="Times New Roman" size="4">
                  Name: {user.user}
                  <br></br>
                  Phonenumber: {user.phonenumber}
                  <br></br>
                  ID: {user.id}
                  <br></br>
                  Relation: {user.relation}
                  <br></br>
                </font>
              </Typography>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Views;
