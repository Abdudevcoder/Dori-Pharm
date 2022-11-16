
import './infopages.css';
import BasicTabs from './tabmenu5';
import vitaminE from '../../assets/pictures/6.jpg'




function InfoPages5() {
    return (
        <div className='container'>
            <div className='uperside'>
                <div className='picture'>
                    <img className='picture' alt='vitaminE' src={vitaminE}></img>
                </div>
                <div className='header'>
                    <div className='head-text'>Глюконат цинка 25 мг</div>
                    <div className='info-text'>
                    Способствует более быстрому заживлению ран. Стимулирует выработку необходимых гормонов. Влияет на работу щитовидной железы и поджелудочной железы. Укрепляет костную систему и зубы.
                    </div>
                </div>

            </div>
            <div className='downside'>
                <BasicTabs/>
            </div>
        </div>
    );
}

export default InfoPages5;