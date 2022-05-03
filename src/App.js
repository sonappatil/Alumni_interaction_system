import React from 'react';
import{
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

import DeptStudents from './Components/DeptStudents'
import Navbar from './Components/Navbar'
import Steps from './Components/Steps';
import Welcome from './Components/Welcome';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Navbar/>
     <Welcome/>
     <Steps/>
     <Routes>
       <Route>
         <Route path='deptStudents' element={<DeptStudents/>}/>
       </Route>
     </Routes>
     </BrowserRouter>
        
    </div>
  )
}

export default App