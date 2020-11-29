import logo from './logo.svg';
import './App.css';
import Post from './Post';


function App() {
  const randomNumber = Math.random();

  return (
    <header className = "App-header">
      <img src={logo} className="App-logo" alt="logo"/>

    
      <div className="App">
        
          <h1>เนื้อหาจาก Prajak</h1>
          <Post/>
        {
          randomNumber < 0.5 ?
            <dev>คุณ แพ้</dev>:
            <div>คุณ ชนะ</div>
            
        } 

        <hr></hr>
        <a
          className="App-link"
          href="http://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        Learn React
        </a>
        
      </div>
    </header>
  );
}

export default App;
