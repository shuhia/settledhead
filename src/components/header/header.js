import react from "react";
import logo from '../../images/logo.svg';
import profile from '../../images/profile.png';

const Header = () => {
    return(
        <header className="App-header">
            <a className='logo' href="https://www.codecademy.com/learn">
                <img src={logo} alt="logo" width={156.98} height={33.59}/> 
            </a>
            <div className='menu'>
                <a 
                href="https://community.codecademy.com/"
                >
                Ana Sayfa
                </a>                
                
                <a 
                href="https://community.codecademy.com/chapters/"
                >
                Join a Chapter
                </a>                
                
                <a 
                href="https://codecademyready.typeform.com/to/gLlgKjsD?typeform-source=community.codecademy.com"
                >
                Lead a Chapter            
                </a>                
                
                <a 
                href="https://community.codecademy.com/events/#/list"
                >
                Toplantılar
                </a>                
                
                <a 
                href="https://discuss.codecademy.com/"
                >
                Forums
                </a>                            
                
                <a 
                href="https://discord.com/invite/codecademy"
                >
                Chat
                </a>

                <a href="https://community.codecademy.com/u/m46htn/">
                <img src={profile} alt="profile" width={34} height={34}/> 
                </a>
            </div>
        </header>
    )
};

export default Header;