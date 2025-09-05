import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import AddCourse from './pages/AddCourse';

function App() {
  return (
    <HashRouter>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/add-course">Add Course</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/add-course" element={<AddCourse />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
