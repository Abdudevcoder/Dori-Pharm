
import './infopages.css';
import BasicTabs from './tabmenu3';
import vitaminE from '../../assets/pictures/4.jpg'




function InfoPages3() {
    return (
        <div className='container'>
            <div className='uperside'>
                <div className='picture'>
                    <img className='picture' alt='vitaminE' src={vitaminE}></img>
                </div>
                <div className='header'>
                    <div className='head-text'>Мультивитамин</div>
                    <div className='info-text'>
                    Для поддержания сил организма человек нуждается в витаминах, минералах и других жизненно важных ресурсах. Полезные элементы поступают через пищу, но, к сожалению, полностью восполнить дефицит витаминов только с помощью еды чаще всего не удается. Избежать гиповитаминоза можно с помощью приема витаминных комплексов.
                    </div>
                </div>

            </div>
            <div className='downside'>
                <BasicTabs/>
            </div>
        </div>
    );
}

export default InfoPages3;