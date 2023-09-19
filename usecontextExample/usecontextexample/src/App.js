import { useState } from 'react';
import './App.css';
import About from './container/about/About';
import Profile from './container/profile/Profile';
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import { Appcontext } from './useContextexample';

function App() {

  // navigate to different pages without router
  // const [state, setState] = useState('')
  // let content
  // if (state==='profile') {
  //   content=<Profile></Profile>
  // }else if (state==='about') {
  //   content=<About></About>
  // }

  const [state, setState] = useState('nandhu')

  const navigate = useNavigate()
  return (
    <div className="App">

      {/* ------------navigate to different Components using link provided by reactrouter------------- */}
      <ul className="App-header">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/profile">profile</Link>
        </li>
      </ul>
      {/* ----------------------------------------------------------------------- */}


      {/* -------routes used with buttons---------------------- */}
      <button onClick={() => navigate("/about")}>About</button>
      <button onClick={() => navigate(-1)}>Profile</button>
      {/* ----------------------------------------------------- */}
      <Appcontext.Provider value={{ data: state }}>
      <Routes>
          <Route exact path='/about' element={<About></About>}></Route>
          <Route exact path='/profile' Component={Profile}></Route>
        
      </Routes>
      </Appcontext.Provider>

      {/* navigate to different pages without router

      <button onClick={()=>setState('profile')}>Profile</button>
      <button onClick={()=>setState('about')}>About</button>
      {content} */}


    </div>

  );
}

export default App;
