import './App.css';
import NavBar from './component/navbar/navbar';
import Home from './screens/Home'
import EventPage from './component/eventsPage/eventPage';

function App() {
  return (
    <div className="App">
      <NavBar />
    <div className="content">
      {/* <Home />  */}
      <EventPage />
    </div>

  </div>
  
    );
}

export default App;
