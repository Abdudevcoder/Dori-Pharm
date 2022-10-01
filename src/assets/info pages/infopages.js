import './infopages.css';
import BasicTabs from './assets/info pages/tabmenu';




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
            <Route path='/BasicTabs' exact>
                <BasicTabs/>
            </Route>
            </div>
        </div>
    );
}

export default InfoPages;