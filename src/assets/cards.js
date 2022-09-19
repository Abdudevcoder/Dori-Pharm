import 'bootstrap/dist/css/bootstrap.min.css';
import data from './cardsinfo';




function Cards() {
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
                    <a href={value.url} className="btn btn-primary">Перейти на сайт</a>
                  </div>
                </div>
              </div>
            </div>
          })}
        </div>
  );
}

export default Cards; 