import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavBar from './components/navbar';
import Home from './components/pages/home';
// import InfoPages from './components/pages/infopages'



function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          {/* <Route path='/InfoPages' element={InfoPages} /> */}
        </Routes>
      </Router>
    </>

  );
}

export default App;
