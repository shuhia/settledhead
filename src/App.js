import Header from './components/header/header';
import './components/header/header.css';
import './App.css';
import linkedin from './images/linkedin.png';
import instagram from './images/instagram.png';
import redirect from './images/redirect.png';
import message from './images/message.png';
import Footer from './components/header/footer.js';
import './components/header/footer.css'


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
        <div className='button' style={{display: 'flex', justifyContent: 'center', alignContent: 'center', padding: '10px 0', backgroundColor: '#F6F5FA'}}>
          <a href=''>
            <button style={{ fontFamily: "'Azeret Mono', monospace", width:'auto', height: '43px', padding: '0px 20px', fontSize: '15px', letterSpacing: '1px', fontWeight: 600, color: 'white', backgroundColor: '#3A10E5', borderWidth: "0px"}}>Bize Katılın</button>
          </a>
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
        <div className='bodyText'>
          <h1>Hakkında</h1>
          <div className='generalBodyText'>
            <h3 style={{textAlign: 'center'}}>Become a React.js developer</h3>
            <p>Hey there!</p> 
            <p>
              Thank you for being here. This is where we share our journey of becoming react.js developers. We meet everyweek, code, learn, discuss together. 
            </p>

            <p>
              What does being a react developer cover really? Here are some titles of what you'll see us working  with the most: 
            </p>

            <ul>
              <li>JSX</li>
              <li>Next.js framework</li>
              <li>Git - GitHub</li>
              <li>Clean Coding</li>
              <li>"CSS"</li>
              <li>Web design (yeah, since we are working on front-end, we will get into design itself. Color theory is our friend!)
                  A little SEO knowledge (For example, what component to use where and why?)
                  Different libraries and extensions</li>
             </ul>
             <p><br></br></p>
             <p>After each session</p>
             <ul>
              <li>The script will be uploaded to our GitHub repository after each session.</li>
              <li>A new meetup for the upcoming week will be created and shared for you to join.</li>
              <li>To recieve notifications, don't forget to become a member.</li>
             </ul>
             <p><br></br></p>
             <p>Stay safe and don't forget to join our next session!</p>
             <p><br></br></p>
             <p>Discord name: Sol-is-here</p>
          </div>
          

        </div>
        <div className='boxes'>
        </div>
      </div>
      <Footer/>
      </div>
  );
}

export default App;
