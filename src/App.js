// Import necessary dependencies and components
import React from 'react';
import { Route, Routes } from 'react-router-dom';
//import axios from 'axios';

// Import your components
import Student from './components/Student';
import Header from './components/header'; // Corrected the capitalization
import Display from './components/display';
import Visitor from './components/visitor'; // Corrected the capitalization
import Counsellor from './components/counsollor'; // Corrected the import statement
import Views from './components/view';
import SendMail from './components/sendMail';
import Login from './components/Login.js';
import StudentsQR from './components/CompaniesQR';
import Upload from './components/upload.js';
import OtpMail from './components/otpmail.js';
import VerifyOtp from './components/verifyotp.js'

// Functional component App
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/views' element={<Views />} />
        <Route path='/SendMail' element={ <SendMail/> }/>
        <Route path="/counsellor" element={<Counsellor />} />
        <Route path="/display" element={<Display />} />
        <Route path="/student" element={<Student />} />
        <Route path="/visitor" element={<Visitor />} />
        <Route path="Login" element={<Login/>} />
        <Route path='/StudentsQR' element={<StudentsQR/>}/>
        <Route path='/Upload' element={<Upload/>}/>
        <Route path='/OtpMail' element={<OtpMail/>}/>
        <Route path='/VerifyOtp' element={<VerifyOtp/>}/>
      </Routes>
  </div>
  );
}

export default App;