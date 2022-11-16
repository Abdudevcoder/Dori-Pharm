
import './infopages.css';
import BasicTabs from './tabmenu1';
import vitaminE from '../../assets/pictures/2.jpg'




function InfoPages1() {
    return (
        <div className='container'>
            <div className='uperside'>
                <div className='picture'>
                    <img className='picture' alt='vitaminE' src={vitaminE}></img>
                </div>
                <div className='header'>
                    <div className='head-text'>Фолиевая кислота</div>
                    <div className='info-text'>
                    Фолиевая кислота (или витамин В9), играет важную роль для нашего здоровья — от поддержания сердечно-сосудистой системы до улучшения работы мозга. Фолиевая кислота способствует делению клеток и помогает создавать новые клетки крови, улучшает усвоение витамина В12, а также некоторых аминокислот. 
                    </div>
                </div>

            </div>
            <div className='downside'>
                <BasicTabs/>
            </div>
        </div>
    );
}

export default InfoPages1;