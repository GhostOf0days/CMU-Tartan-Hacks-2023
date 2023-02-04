import './App.css';
import NavBar from './component/navbar/navbar';
<<<<<<< Updated upstream
import Home from './screens/Home'
=======
import Home from './screens/Home';
import EventPage from './component/eventsPage/EventPage';
>>>>>>> Stashed changes

function App() {
  return (
    <div className="App">
      hello
      <NavBar />
    <div className="content">
<<<<<<< Updated upstream
      <Home /> 
=======
      {/* <Home />  */}
      <EventPage />

>>>>>>> Stashed changes
    </div>

  </div>
  
    );
}

export default App;
