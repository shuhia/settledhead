import logo from '../../images/logo.svg';
import bevy from '../../images/bevy.jpg'
const Footer = () => {
    return(
        <div className='footer'>
            <div className='footerMenu'>
                <a className='float-menu-element' href="https://www.codecademy.com/learn">
                    <img src={logo} alt="logo" width={140.8} height={30}/> 
                </a>
                <div className='float-menu-element'>
                    <h5 style={{height:'36px', marginLeft: '37px'}}>HIZLI BAĞLANTILAR</h5>
                    <ul>
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
                <div className='float-menu-element'>
                    <h5 style={{height:'36px', marginLeft: '37px'}}>Sosyal</h5>
                    <h5 style={{height:'36px', marginLeft: '37px'}}>#Codecademy</h5>
                </div>
            </div>
            <div className='info'>
                <p>© 2021 Codecademy Her Hakkı Saklıdır.</p>
                <div className='imageBevy'>
                    <a href='https://www.bevy.com/'>
                        <img src={bevy} width={178.18} height={24}></img>
                    </a>
                </div>
            </div>
        </div>
    )}


export default Footer