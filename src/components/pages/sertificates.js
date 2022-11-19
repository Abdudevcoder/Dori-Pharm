import '../../App.css'
import first from '../../assets/pictures/first.pdf'
import second from '../../assets/pictures/second.pdf'
import third from '../../assets/pictures/third.pdf'


function Sertificates() {
    return(
        <>
            <div className='sertificate-window'>
                <div className='sertificate-window-op'>
                    <iframe width='100%' height='1000px' src={first} title='myframe'></iframe>
                    <div className='sertificate-window'>
                        <a className='sertificate-link' href={first}> Нажмите сюдя чтобы сертификат</a>
                    </div>
                </div>
                <div className='sertificate-window-op'>
                    <iframe width='100%' height='1000px' src={second} title='myframe'></iframe>
                    <div className='sertificate-window'>
                        <a className='sertificate-link' href={second}> Нажмите сюдя чтобы сертификат</a>
                    </div>
                </div>
                <div className='sertificate-window-op'>
                    <iframe width='100%' height='1000px' src={third} title='myframe'></iframe>
                    <div className='sertificate-window'>
                        <a className='sertificate-link' href={third}> Нажмите сюдя чтобы сертификат</a>
                    </div>
                </div>
            </div>
            <div className='mobile'>
                <p className='sertificate-text-mobile'>У вашего браузера нет плагина для отображения PDF файлов</p>
                <a className='sertificate-link-mobile' href={first}> Нажмите сюдя чтобы скачать сертификат о анализах</a>
                <a className='sertificate-link-mobile' href={first}> Нажмите сюдя чтобы скачать <u>санитарно-эпидемиологическое заключение</u></a>
                <a className='sertificate-link-mobile' href={first}> Нажмите сюдя чтобы скачать Американский сертификат происхождения</a>
            </div>
        </>
    );
}

export default Sertificates;