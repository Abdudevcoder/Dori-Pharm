import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavBar from './components/navbar';
import Home from './components/pages/home';




function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' exact element={Home} />
        </Routes>
      </Router>
    </>

  );
}

export default App;
