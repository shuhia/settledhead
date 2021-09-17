import Header from './components/header/header';
import './components/header/header.css'
import './App.css'
import linkedin from './images/linkedin.png'
import instagram from './images/instagram.png'
import redirect from './images/redirect.png'
import message from './images/message.png'



function App() {
  return (
    <div className="App">
      <Header/>
      <div className="body">
        <div className="background">
          <div>
            <div>
              <h1 className='chapterName'>SettledHead</h1>
            </div>
              <h2 className='memberNumber'>25 Grup Üyeleri</h2>
            <div className='socialLinks' height='62'>
              <a 
              href="https://www.linkedin.com/in/cagla-yagmur-%C3%B6zdemir-1a54871ab/" style={{marginRight: '10px'}}
              >
              <img src={linkedin} alt="linkedin" width={36} height={36}/> 
              </a>                
              
              <a 
              href="" style={{marginRight: '6px'}}
              >
              <img src={instagram} alt="instagram" width={36} height={36}/> 
              </a>                

              <a 
              href="" style={{marginRight: '10px'}}
              >
              <img src={redirect} alt="redirect" width={36} height={36}/> 
              </a>       

              <a 
              href="" style={{marginRight: '10px'}}
              >
              <img src={message} alt="message" width={36} height={36}/> 
              </a>  
            </div>
          </div>
        </div>
        <div style={{display: 'flex', justifyContent: 'center', alignContent: 'center', padding: '10px 0', backgroundColor: '#F6F5FA'}}>
          <button style={{ fontFamily: "'Azeret Mono', monospace", width:'auto', height: '43px', padding: '0px 20px', fontSize: '15px', letterSpacing: '1px', fontWeight: 600, color: 'white', backgroundColor: '#3A10E5', borderWidth: "0px"}}>Bize Katılın</button>
        </div>
        <div className='miniMenu'>
          <a
          href=""   
          >
          Hakkında 
          </a>  

          <a 
          href="" 
          >
          Upcoming meetup
          </a>  

          <a 
          href="" 
          >
          Past meetups
          </a>  

          <a 
          href="" 
          >
          Organizatör
          </a>  
        </div>
      </div>
    </div>

  );
}

export default App;
