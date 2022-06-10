import React from 'react';
import{
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import PlacedStudentsIT from './Components/PlacedStudentsIT';
import Dashboard from './Components/Dashboard';
import Welcome from './Components/Welcome';
import PlacementDrives from './Components/PlacementDrives';
import Login from './Components/Login';
import PlacedStudentsCivil from './Components/PlacedStudentsCivil';
import PlacedStudentsME from './Components/PlacedStudentsME';
import PlacedStudentsCSE from './Components/PlacedStudentsCSE';
import PlacedStudentsEE from './Components/PlacedStudentsEE';
import PlacedStudentsECE from './Components/PlacedStudentsECE';
import SignUp from './Components/SignUp';
import AlumniInfo from './Components/AlumniInfo';
import ForgotPass from './Components/ForgotPass';
import OffCampus from './Components/OffCampus';
import UpdateAlumni from './Components/UpdateAlumni';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
       <Route path='/' element={<Welcome/>}/>
       <Route path='it' element={<PlacedStudentsIT path='/dashboard' heading='Information Technology Department' collection='onCampus'/>}/>
       <Route path='civil' element={<PlacedStudentsCivil/>}/>
       <Route path='mech' element={<PlacedStudentsME/>}/>
       <Route path='cse' element={<PlacedStudentsCSE/>}/>
       <Route path='ee' element={<PlacedStudentsEE/>}/>
       <Route path='ece' element={<PlacedStudentsECE/>}/>
       <Route path='placementdrives' element={<PlacementDrives/>}/>
       <Route path='login' element={<Login/>}/>
       <Route path='signup' element={<SignUp/>}/>
       <Route path='alumniinfo' element={<AlumniInfo/>}/>
       <Route path='forgotpassword' element={<ForgotPass/>}/>
       <Route path='offcampus' element={<OffCampus/>}/>
       <Route path='dashboard' element={<Dashboard/>}/>
       <Route path='updatealumni' element={<UpdateAlumni/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App