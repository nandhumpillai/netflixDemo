import './App.css';
import React from 'react'
import Profile from './components/profile/Profile';


function App() {
  const name='nand';

  return (
    <div className="App">
      <h1 style={{color:'red'}}>React app</h1>
      <button className='button'>{name}</button>
      <Component/>
      <Profile  name={name}></Profile>
    </div>
  );
}

function Component(){
  return(
    <div>
      <h2>Second component</h2> 
    </div>
  );

}

export default App;
