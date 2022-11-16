
import './infopages.css';
import BasicTabs from './tabmenu9';
import vitaminE from '../../assets/pictures/10.jpg'




function InfoPages9() {
    return (
        <div className='container'>
            <div className='uperside'>
                <div className='picture'>
                    <img className='picture' alt='vitaminE' src={vitaminE}></img>
                </div>
                <div className='header'>
                    <div className='head-text'>Кальций D3 и Магний Цинк</div>
                    <div className='info-text'>
                        Кальций, Магний, Цинк + D3 — специально разработанный американский комплекс трёх минералов, которые усиливают действие друг друга. Обеспечивает укрепление костной ткани, зубов и ногтей, а также регулирует работу мышц. Улучшает состояние волос и кожи.
                    </div>
                </div>

            </div>
            <div className='downside'>
                <BasicTabs/>
            </div>
        </div>
    );
}

export default InfoPages9;