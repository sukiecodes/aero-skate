import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/Home';
import Exercises from './components/Exercises';
import Resources from './components/Resources';
import About from './components/About';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/exercises">Exercises</Link>
            </li>
            <li>
              <Link to="/resources">Resources</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/exercises" element={<Exercises/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/resources" element={<Resources/>} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
