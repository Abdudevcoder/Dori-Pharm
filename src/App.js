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
        <Home />
        <Routes>
          <Route path='/' exact element={Home} />
          {/* <Route path='/infopages' element={InfoPages} /> */}
        </Routes>
      </Router>
    </>

  );
}

export default App;
