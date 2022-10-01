import '../App.css';

function Footer() {
    return (
        <div className='footer' id="fotter">
          <div className="conteiner">
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
                        <a href="tel:+998 94 0718110">+998 94 0718110</a><br></br>
                        <a href="tel:+998 94 0718110">+998 94 0718110</a>
                      </div>
                    </div>

                    <div className="right__items">
                      <h3>Почта:</h3>
                      <a className="mail" href="mailto:doripharmfuture@gmail.com">doripharmfuture@gmail.com</a>
                    </div>
                </div>
            </div>
          </div>
          </div>
      </div>
    )
}

export default Footer;