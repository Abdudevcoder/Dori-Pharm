import './App.css';
import { BrowserRouter as Route} from 'react-router-dom'
import './assets/modal.css'
import BasicExample from './assets/navbar';
import logoPic from './assets/pictures/pic-logo.png'
import Cards from './assets/cards';




function App() {
  return (
    <div className='html'>
      {/* ----------------navbar---------------------- */}
        <Route path='/BasicExample' exact>
            <BasicExample/>
        </Route>
      {/* ----------------navbar (end)---------------------- */}


      {/* ----------------body---------------------- */}
        <div className='body'>
          <div className='info' id='info'>
            <div className='info-text'>
              <div className="text__row">
              Мы Doripharm представляем американскую фармацевтическую компанию Safrel pharmaceuiticals и являемся ведущими поставщиками из США в Центральную Азию.
              </div>
            </div>

            <div className='info-picture'>
              <img src={logoPic} alt='logo'></img>
            </div>
          </div>

        </div>

      {/* ----------------body (end)---------------------- */}

      {/* -------------- products ------------------ */}
        <div id="products">
          <h1>Продукция</h1>
          <Route path='/Cards' exact>
            <Cards/>
          </Route>
        </div>
        
      {/* -------------- products (end) ------------------ */}
        <div className="about" id="about">
          <div className="about__row">
            <h1>О нас</h1>
            <div className="about__inner">              
                <div className="about__items">
                  <div className="picture">
                    
                    </div>
                    <div className="about__text">
                      <p>
                      Наша компания является поставщиком безрецептурных препаратов, бадов, витаминов и пищевых добавок (травяных, минеральных и диетических).
                      </p>
                    </div>
                </div>
                
                <div className="about__items">
                  <div className="picture">
                    
                    </div>
                    <div className="about__text">
                      <p>
                      Мы осуществляем поставку безопасных, надежных и эффективных препаратов для наших потребителей. Вся наша продукция изготовляется в США.Наши препараты соответствуют высокому требованию качества стандартов Соединенных Штатов Америки.
                      </p>
                    </div>
                </div>

                <div className="about__items">
                    <div className="picture">
                    </div>
                    <div className="about__text">
                      <p>
                        Наши препараты прошли все проверки на качество, и безопасность  в главных эпидемиологических инстанциях Республике Узбекистана, где получили сертификаты безопасности, и качества препаратов. 
                      </p>
                    </div>
                </div>

            </div>
          </div>
        </div>



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
