import './App.css';
import NavBar from './component/navbar/navbar';
import Home from './screens/Home';

function App() {
  return (
    <div className="App">
      <NavBar />
    <div className="content">
      <Home /> 
    </div>

  </div>
  
    );
}

export default App;
