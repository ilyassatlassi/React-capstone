import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Details from './pages/Details';
import NavBar from './components/NavBar';
import Home from './pages/home';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:countryName" element={<Details />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
