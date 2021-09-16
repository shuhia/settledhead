import Header from './components/header/header';
import './components/header/header.css'
import background from './background.jpg';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='HomePage'>
        <div className='background'>
          <div style={{backgroundImage: `url(${background})`, width: '100%', height:'500px'}} alt="background">
            <h1>hey</h1>
          </div> 
        </div>
      </div>
    </div>
  );
}

export default App;
