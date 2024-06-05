import './App.css';
import Login from './pages/Login';
import Netflix from './pages/Netflix';
import {BrowserRouter, Route, Routes}  from 'react-router-dom';
import Signup from './pages/Signup';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={Netflix}></Route>
      <Route exact path='/login' element={Login}></Route>
      <Route exact path='/signup' element={Signup}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
