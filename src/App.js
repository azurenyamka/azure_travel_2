import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import Home from './pages/Home';
import Authpage from './pages/Auth';

function App() {
  return (
    <Router>
      <CssBaseline/>
      <Routes>
        <Route path='/login' element={<Authpage/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
