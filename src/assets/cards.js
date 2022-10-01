import 'bootstrap/dist/css/bootstrap.min.css';
import data from './cardsinfo';
import './cards.css'
import '../App.css';
// import InfoPages from './info pages/infopages';






function Cards() {
  
  // const navigate = useNavigate();
  
  // const navigateToInfopages = () => {
  //   navigate('/infopages');
  // }
  


  return (
    <div id="products">
      <div className="conteiner">
      <h1>Продукция</h1>
        <div className="row mt-4">
          {data.map((value, index) => {
            return <div className="col-lg-3 col-md-7">
              <div >
                <div className="card mb-5" style={{
                  width: '18rem'
                }}>
                  <img src={value.image} alt="Card cap"/>
                  <div className="card-body">
                    <h5 className="card-title">{value.name}</h5>
                    <a href={value.url} className="btn btn-primary">Подробнее</a>
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