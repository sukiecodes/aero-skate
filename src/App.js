import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/Home';
import ExerciseList from './components/ExerciseList';
import Research from './components/Research';
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
              <Link to="/research">Research</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/exercises" element={<ExerciseList/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/research" element={<Research/>} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
