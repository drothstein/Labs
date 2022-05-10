import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; import logo from './logo.svg';
import './App.css';
import Cars from './Cars.js'
import HomePage from './HomePage.js'
import CarID from './CarID';
import CarMake from './CarMake';


function App() {
  return (
    <div className="App">

      <Router>
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/carid" element={<CarID />} />
          <Route path="/carmake" element={<CarMake />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
