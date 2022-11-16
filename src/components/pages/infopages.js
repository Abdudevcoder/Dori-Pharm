
import './infopages.css';
import BasicTabs from './tabmenu';
import vitaminE from '../../assets/pictures/1.jpg'




function InfoPages() {
    return (
        <div className='container'>
            <div className='uperside'>
                <div className='picture'>
                    <img className='picture' alt='vitaminE' src={vitaminE}></img>
                </div>
                <div className='header'>
                    <div className='head-text'>Витамин Е</div>
                    <div className='info-text'>
                    Витамин Е позволяет улучшить питание кожи и волос, снизить их сухость, укрепить ногти.
                    Витамин Е влияет на свертываемость крови, помогая предупреждать образование тромбов, улучшает эластичность крупных и мелких сосудов, а также замедляет образование холестериновых бляшек.
                    Кроме того, этот витамин жизненно необходим для нормальной работы репродуктивной системы. 
                    Витамин Е способствует улучшению выработки сперматозоидов у мужчин, а у женщин участвует в регуляции менструального цикла и смягчает неприятные симптомы при климаксе.
                    Важен витамин Е для полноценного питания эмбриона – улучшает усвоение питательных веществ клеткам
                    </div>
                </div>

            </div>
            <div className='downside'>
                <BasicTabs/>
            </div>
        </div>
    );
}

export default InfoPages;