import 'bootstrap/dist/css/bootstrap.min.css';
import data from './cardsinfo';
import {useNavigate, Link} from 'react-router-dom';






function Cards() {
  
  // const navigate = useNavigate();
  
  // const navigateToInfopages = () => {
  //   navigate('/infopages');
  // }
  


  return (
    <div className="row mt-4">
          {data.map((value, index) => {
            return <div className="col-lg-4 col-md-6">
              <div >
                <div className="card mb-5" style={{
                  width: '18rem'
                }}>
                  <img src={value.image} alt="Card cap"/>
                  <div className="card-body">
                    <h5 className="card-title">{value.name}</h5>
                    <a href={value.url}>Подробнее</a>
                  </div>
                </div>
              </div>
            </div>
          })}
        </div>
  );
}

export default Cards; 