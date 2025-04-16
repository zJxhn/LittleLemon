import './App.css';
import './Header.js';
import './Nav.js';
import './Main.js';
import './Footer.js';

function App() {
  return (
    <div className="App">
      <Homepage>
        <Header/>
        <Nav/>
        <Main/>
        <Footer/>
      </Homepage>
    </div>
  );
}

export default App;
