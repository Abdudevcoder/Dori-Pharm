
import './infopages.css';
import BasicTabs from './tabmenu4';
import vitaminE from '../../assets/pictures/5.jpg'




function InfoPages4() {
    return (
        <div className='container'>
            <div className='uperside'>
                <div className='picture'>
                    <img className='picture' alt='vitaminE' src={vitaminE}></img>
                </div>
                <div className='header'>
                    <div className='head-text'>Витамин C</div>
                    <div className='info-text'>
                    Витамин С (Аскорби́новая кислота́), является одним из основных веществ в человеческом рационе, которая необходима  для нормального функционирования соединительной и костной ткани.
                    </div>
                </div>

            </div>
            <div className='downside'>
                <BasicTabs/>
            </div>
        </div>
    );
}

export default InfoPages4;