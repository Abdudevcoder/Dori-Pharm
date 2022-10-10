import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom' 
import data from './cardsinfo';
import './cards.css'
import '../App.css';
// import InfoPages from './info-pages/infopages';






function Cards() {
  
  return (
    <div id="products">
      <div className="conteiner">
      <h1>Продукция</h1>
        <div className="products__inner">
          {data.map((value, index) => {
            return <div>
              <div >
                <div className="card mb-5">
                  <img src={value.image} alt="Card cap"/>
                  <div className="card-body">
                    <h5 className="card-title">{value.name}</h5>
                    <Link to={value.url} className='nav-links'>
                     Подробнее
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          })}
        </div>
          
        </div>
        </div> 
  );
}

export default Cards; 