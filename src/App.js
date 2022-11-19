import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavBar from './components/navbar';
import Home from './components/pages/home';
import Sertificates from './components/pages/sertificates'
import InfoPages from './components/pages/infopages'
import InfoPages1 from './components/pages/infopages1'
import InfoPages2 from './components/pages/infopages2'
import InfoPages3 from './components/pages/infopages3'
import InfoPages4 from './components/pages/infopages4'
import InfoPages5 from './components/pages/infopages5'
import InfoPages6 from './components/pages/infopages6'
import InfoPages7 from './components/pages/infopages7'
import InfoPages8 from './components/pages/infopages8'
import InfoPages9 from './components/pages/infopages9'
import InfoPages10 from './components/pages/infopages10'
import InfoPages11 from './components/pages/infopages11'



function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Sertificates' element={<Sertificates />} />
          <Route path='/InfoPages' element={<InfoPages />} />
          <Route path='/InfoPages1' element={<InfoPages1 />} />
          <Route path='/InfoPages2' element={<InfoPages2 />} />
          <Route path='/InfoPages3' element={<InfoPages3 />} />
          <Route path='/InfoPages4' element={<InfoPages4 />} />
          <Route path='/InfoPages5' element={<InfoPages5 />} />
          <Route path='/InfoPages6' element={<InfoPages6 />} />
          <Route path='/InfoPages7' element={<InfoPages7 />} />
          <Route path='/InfoPages8' element={<InfoPages8 />} />
          <Route path='/InfoPages9' element={<InfoPages9 />} />
          <Route path='/InfoPages10' element={<InfoPages10 />} />
          <Route path='/InfoPages11' element={<InfoPages11 />} />
        </Routes>
      </Router>
    </>

  );
}

export default App;
