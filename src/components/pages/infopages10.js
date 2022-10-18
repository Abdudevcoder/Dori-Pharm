
import './infopages.css';
import BasicTabs from './tabmenu10';
import vitaminE from '../../assets/pictures/11.png'




function InfoPages10() {
    return (
        <div className='container'>
            <div className='uperside'>
                <div className='picture'>
                    <img className='picture' alt='vitaminE' src={vitaminE}></img>
                </div>
                <div className='header'>
                    <div className='head-text'>Витамин B-12</div>
                    <div className='info-text'>
                        Витамин B12 (цианокобаламин) необходим для обеспечения энергии — Наряду с другими витаминами группы B, он непосредственно не обеспечивает энергией, но помогает поддерживать нормальный обмен аминокислот, жиров и углеводов. Витамин В12 участвует в ряде внутриклеточных процессов, обеспечивая здоровье клеток и выработку достаточного количества энергии, нормального функционирования нервной системы.
                    </div>
                </div>

            </div>
            <div className='downside'>
                <BasicTabs/>
            </div>
        </div>
    );
}

export default InfoPages10;