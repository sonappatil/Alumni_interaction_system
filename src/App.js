import React from 'react';
import{
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import PlacedStudents from './Components/PlacedStudents';
import Dashboard from './Components/Dashboard';
import Welcome from './Components/Welcome';
import PlacementDrives from './Components/PlacementDrives';
import Login from './Components/Login';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
       <Route path='/' element={<Welcome/>}/>
       <Route path='logedIn'  element={<Dashboard/>}/>
       <Route path='placedStudents' element={<PlacedStudents/>}/>
       <Route path='placementdrives' element={<PlacementDrives/>}/>
       <Route path='login' element={<Login/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App