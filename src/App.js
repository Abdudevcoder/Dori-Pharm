import './App.css';
import { BrowserRouter as Route} from 'react-router-dom'
import logo from './assets/pictures/logo.png'
import './assets/modal.css'
import Example from './assets/modal'




function App() {
  return (
    <div className='html'>
      {/* ----------------navbar---------------------- */}
      <div className='navbar'>
        <img src={logo} alt='logo'></img>
        <a className='navlink' href='products'>Продукця</a>
        <a className='navlink' href='about'>О нас</a>
        <a className='navlink' href='footer'>Контакты</a>
        <a className='navlink' href='footer'>Связаться с нами</a>
      </div>
      {/* ----------------navbar (end)---------------------- */}


      {/* ----------------body---------------------- */}
      <div className='body'>
        <div className='products' id='products'>

        </div>


        {/* -------------- modal window ------------------ */}

        <Route path='/Example' exact>
          <Example/>
        </Route>
        
        {/* -------------- modal window (end) ------------------ */}


        <div className='about' id='about'>

        </div>

      </div>
      {/* ----------------body (end)---------------------- */}




      {/* ----------------footer---------------------- */}
      <div className='footer' id="fotter">
          <div className="footer__row">
            <div className="footer__inner">
                <div className="footer__left">
                    <h1 className="company__name">Doripharm Future</h1>
                    <p className="aboutUs">Мы являемся ведущими поставщиками из США в Центральную Азию.</p>
                    
                    <ul className="weOn">
                      <li className="weOn__items"><a className="weOn__item" href="/">Inst</a></li>
                      <li className="weOn__items"><a className="weOn__item" href="/">fb</a></li>
                      <li className="weOn__items"><a className="weOn__item" href="/">tg</a></li>
                    </ul>
                </div>
                <div className="footer__right">
                    <div className="right__items">
                      <h3>Адрес:</h3>
                      <p>Республика Узбекистан, 100070, г. Ташкент, 
                          Яккасарайский район, ул. Шота Руставели 12</p>
                    </div>

                    <div className="right__items">
                      <h3>Номер телефона:</h3>
                      <div className="tel">
                        <a href="tel:+998 94 0718110">+998 94 0718110</a>
                        <a href="tel:+998 94 0718110">+998 94 0718110</a>
                      </div>
                    </div>

                    <div className="right__items">
                      <h3>Почта:</h3>
                      <a href="mailto:doripharmfuture@gmail.com">doripharmfuture@gmail.com</a>
                    </div>
                </div>
            </div>
          </div>
      </div>
      {/* ----------------footer (end)---------------------- */}
    </div>
  );
}

export default App;
