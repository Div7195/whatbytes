
import './App.css';
import Home from './Home';
import Login from './Login';
import { Route } from 'react-router-dom';
import {BrowserRouter, Routes} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
            <Routes>
              <Route  path = '/login' element = {<Login/>}/>
              <Route  path = '/home' element = {<Home/>}/>
              </Routes>
          
        </BrowserRouter>
  );
}

export default App;
