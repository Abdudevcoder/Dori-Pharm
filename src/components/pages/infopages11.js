
import './infopages.css';
import BasicTabs from './tabmenu11';
import vitaminE from '../../assets/pictures/12.png'




function InfoPages11() {
    return (
        <div className='container'>
            <div className='uperside'>
                <div className='picture'>
                    <img className='picture' alt='vitaminE' src={vitaminE}></img>
                </div>
                <div className='header'>
                    <div className='head-text'>Витамин D3</div>
                    <div className='info-text'>
                        Важнейшей функцией витамина D является регулирование метаболизма кальция и фосфатов, способствует правильной минерализации костной ткани и зубов.
                    </div>
                </div>

            </div>
            <div className='downside'>
                <BasicTabs/>
            </div>
        </div>
    );
}

export default InfoPages11;