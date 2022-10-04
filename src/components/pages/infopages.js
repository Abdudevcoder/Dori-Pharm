
import './infopages.css';
import BasicTabs from './tabmenu';




function InfoPages() {
    return (
        <div className='container'>
            <div className='uperside'>
                <div className='picture'>

                </div>
                <div className='text'>
                    <div className='head-text'>

                    </div>
                    <div className='info-text'>

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