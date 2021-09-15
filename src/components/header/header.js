import react from "react";
import logo from '../../logo.svg';
import profile from '../../profile.png';

const Header = () => {
    return(
        <header className="App-header">
            <a className='logo' href="https://www.codecademy.com/learn">
                <img src={logo} alt="logo" width={180} height={41.25}/> 
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