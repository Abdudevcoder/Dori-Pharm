import '../App.css';
import usa from '../assets/pictures/usa.png'
import bad from '../assets/pictures/bad.png'
import safrel from '../assets/pictures/safrel.png'


function About(){
    return (
        <div className="about" id="about">
          <div className='conteiner'>

            <div className="about__row">
              <h1>О нас</h1>
              <div className="about__inner">
                  <div className="about__items">
                    <div className="picture">
                      <img src={bad} className="about-logo" alt='logo'></img>
                    </div>
                    <div className="about__text">
                      <p>
                        Наша компания является поставщиком безрецептурных препаратов, бадов, витаминов и пищевых добавок (травяных, минеральных и диетических).
                      </p>
                    </div>
                  </div>
                  
                  <div className="about__items beetwen">
                    <div className="about__text">
                      <p>
                      Мы осуществляем поставку безопасных, надежных и эффективных препаратов для наших потребителей. Вся наша продукция изготовляется в США.Наши препараты соответствуют высокому требованию качества стандартов Соединенных Штатов Америки.
                      </p>
                    </div>

                    <div className="picture">
                      <img src={usa} className="about-logo" alt='logo'></img>
                    </div>
                  </div>

                  <div className="about__items beetwen--mobile">
                    <div className="picture">
                      <img src={usa} className="about-logo" alt='logo'></img>
                    </div>

                    <div className="about__text">
                      <p>
                      Мы осуществляем поставку безопасных, надежных и эффективных препаратов для наших потребителей. Вся наша продукция изготовляется в США.Наши препараты соответствуют высокому требованию качества стандартов Соединенных Штатов Америки.
                      </p>
                    </div>
                  </div>

                  <div className="about__items">
                      <div className="picture">
                        <img src={safrel} className="about-logo" alt='logo'></img>
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
      </div>
    )
}

export default About;