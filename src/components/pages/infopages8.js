
import './infopages.css';
import BasicTabs from './tabmenu8';
import vitaminE from '../../assets/pictures/9.jpg'




function InfoPages8() {
    return (
        <div className='container'>
            <div className='uperside'>
                <div className='picture'>
                    <img className='picture' alt='vitaminE' src={vitaminE}></img>
                </div>
                <div className='header'>
                    <div className='head-text'>Кальций 600 с Витамином D3</div>
                    <div className='info-text'>
                    Комбинированный препарат, регулятор обмена кальция и фосфора в организме. Снижает резорбцию (всасывание) и увеличивает плотность костной ткани, восполняя недостаток кальция. Колекальциферол (витамин D3) необходим для минерализации зубов.
                    </div>
                </div>

            </div>
            <div className='downside'>
                <BasicTabs/>
            </div>
        </div>
    );
}

export default InfoPages8;