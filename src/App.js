import Header from './components/header/header';
import './components/header/header.css'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="body">
        <div className="background">
          <div>
            <p className='ChapterName'>SettledHead</p>
            <p className='MemberNumber'>21 Grup Üyeleri</p>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
