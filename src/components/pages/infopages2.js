
import './infopages.css';
import BasicTabs from './tabmenu2';
import vitaminE from '../../assets/pictures/3.jpg'




function InfoPages2() {
    return (
        <div className='container'>
            <div className='uperside'>
                <div className='picture'>
                    <img className='picture' alt='vitaminE' src={vitaminE}></img>
                </div>
                <div className='header'>
                    <div className='head-text'>ОМЕГА 3-6-9</div>
                    <div className='info-text'>
                    Омега-3 кислоты «очищают» стенки сосудов от избытка «плохого» холестерина, предотвращая образование «холестериновых бляшек». Улучшают вязкость крови и нормализуют артериальное давление. Повышают уровень «хорошего» холестерина — ЛПВП (липопротеиды высокой плотности). Укрепляют стенки сосудов, делая их эластичными.
                    </div>
                </div>

            </div>
            <div className='downside'>
                <BasicTabs/>
            </div>
        </div>
    );
}

export default InfoPages2;