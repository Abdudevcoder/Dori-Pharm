import './infopages.css';



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
                <div class="tabs">
                    <div id="tab3" class="tab">
                        <ul class="nav nav-tabs">
                            <li><a href="#tab1">Description</a></li>
                            <li><a href="#tab2">How it works</a></li>
                            <li class="active"><a href="#tab3">Drawbacks</a></li>
                        </ul>
                        <ul>
                            <li>Tab bar should be duplicated on each tab.</li>
                            <li>Initially shown tab has to be the last.</li>
                            <li>In IE &lt; 9 all tabs are shown.</li>
                        </ul>
                    </div>
                    <div id="tab2" class="tab">
                        <ul class="nav nav-tabs">
                            <li><a href="#tab1">Description</a></li>
                            <li class="active"><a href="#tab2">How it works</a></li>
                            <li><a href="#tab3">Drawbacks</a></li>
                        </ul>
                        <ol>
                            <li>Show only the last tab.</li>
                            <li>If <code>:target</code> matches a tab, show it and hide all following siblings.</li>
                        </ol>
                    </div>
                    <div id="tab1" class="tab">
                        <ul class="nav nav-tabs">
                            <li class="active"><a href="#tab1">Description</a></li>
                            <li><a href="#tab2">How it works</a></li>
                            <li><a href="#tab3">Drawbacks</a></li>
                        </ul>
                        <p>The idea is to use <code>:target</code> pseudoclass to show tabs, use anchors with fragment identifiers to switch between them.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InfoPages;