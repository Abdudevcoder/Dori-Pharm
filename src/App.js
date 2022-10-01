import './App.css';
import { BrowserRouter as Route} from 'react-router-dom'
import NavBar from './assets/navbar';
import Intro from './assets/intro';
import Cards from './assets/cards';
import About from './assets/about';
import Footer from './assets/footer';




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
    </div>
  );
}

export default App;
