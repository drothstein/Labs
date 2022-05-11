import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; import logo from './logo.svg';
import './App.css';
import Cars from './Cars.js'
import HomePage from './HomePage.js'
import CarID from './CarID';
import CarMake from './CarMake';
import AddCar from './AddCar';
import EditCar from './EditCar';


function App() {
  return (
    <div className="App">

      <Router>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/carid" element={<CarID />} />
          <Route path="/carmake" element={<CarMake />} />
          <Route path="/addcar" element={<AddCar />} />
          <Route path="/editcar" element={<EditCar />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
