import logo from '../../images/logo.svg';

const Footer = () => {
    return(
        <div className='footerGeneral'>
        <div className='footerMain'>
        <a className='float-element' href="https://www.codecademy.com/learn">
            <img src={logo} alt="logo" width={156.98} height={33.59}/> 
        </a>
        <div className='float-element'>
            <h5 style={{height:'36px', marginLeft: '37px'}}>HIZLI BAĞLANTILAR</h5>
            <ul className='footerMenu'>
            <li>
                <a 
                href="https://community.codecademy.com/"
                >
                Ana Sayfa
                </a>                
            </li>

            <li>
                <a 
                href="https://community.codecademy.com/chapters/"
                >
                Join a Chapter
                </a>                
            </li>

            <li>
                <a 
                href="https://codecademyready.typeform.com/to/gLlgKjsD?typeform-source=community.codecademy.com"
                >
                Lead a Chapter            
                </a>                
            </li>

            <li>
                <a 
                href="https://community.codecademy.com/events/#/list"
                >
                Toplantılar
                </a>                
            </li>  
            
            <li>
                <a 
                href="https://discuss.codecademy.com/"
                >
                Forums
                </a>                            
            </li>

            <li>
                <a 
                href="https://discord.com/invite/codecademy"
                >
                Chat
                </a>
            </li>
            </ul>
        </div>
        </div>
        </div>
    )}


export default Footer