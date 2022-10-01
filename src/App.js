import React from 'react';
import './App.css';
import { BrowserRouter as Route} from 'react-router-dom'
import NavBar from './assets/navbar';
import Intro from './assets/intro';
import Cards from './assets/cards';
import About from './assets/about';
import Footer from './assets/footer';
// import InfoPages from './assets/info-pages/infopages';




function App() {
  return (


    <div className='html'>
      <Route path='/NavBar' exact>
        <NavBar/>
      </Route>
      <Route path='/Intro' exact>
        <Intro/>
      </Route>
      <Route path='/Cards' exact>
        <Cards/>
      </Route>
      <Route path='/About' exact>
        <About/>
      </Route>
      <Route path='/Footer' exact>
        <Footer/>
      </Route>
      {/* <Routes>
        <Route path='/infopages' component={InfoPages} />
      </Routes> */}
    </div>
  );
}

export default App;
