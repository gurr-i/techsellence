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
          {['/', '/techsellence_reactjs'].map((path) => (
            <Route path={path} element={<Home />} />
          ))}
        </Routes>
      </Router>
    </>
  );
}

export default App;
