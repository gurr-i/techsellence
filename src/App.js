import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home/home';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
        {/* Mapping multiple path for one component */}
          {['/', '/techsellence_reactjs','/Home'].map((path) => (
            <Route path={path} element={<Home />} />
          ))}
        </Routes>
      </Router>
    </>
  );
}

export default App;
