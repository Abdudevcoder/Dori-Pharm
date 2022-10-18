
import './infopages.css';
import BasicTabs from './tabmenu7';
import vitaminE from '../../assets/pictures/8.png'




function InfoPages7() {
    return (
        <div className='container'>
            <div className='uperside'>
                <div className='picture'>
                    <img className='picture' alt='vitaminE' src={vitaminE}></img>
                </div>
                <div className='header'>
                    <div className='head-text'>Биотин</div>
                    <div className='info-text'>
                    Биотин необходим для нервной системы и полезной микрофлоры кишечника, а еще важен для здоровья волос, ногтей и кожи, отчего получил название «витамина красоты». 
                    </div>
                </div>

            </div>
            <div className='downside'>
                <BasicTabs/>
            </div>
        </div>
    );
}

export default InfoPages7;