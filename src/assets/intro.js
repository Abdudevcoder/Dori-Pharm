import '../App.css';
import logoPic from '../assets/pictures/pic-logo.png'

function Intro() {
    return (
        <div className='body'>
            <div className="conteiner">
            <div className='info' id='info'>
                <div className='info-text'>
                <div className="text__row">
                Мы Doripharm представляем американскую фармацевтическую компанию Safrel pharmaceuiticals и являемся ведущими поставщиками из США в Центральную Азию.
                </div>
                </div>

                <div className='info-picture'>
                <img src={logoPic} alt='logo'></img>
                </div>
            </div>
            </div>

        </div>
    )
}

export default Intro;