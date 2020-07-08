import React from 'react';
// import '../Fontawsomeicon/index';
import RollDice from '../rolldice/RollDice';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import {  faDiceFive, faDiceOne, faDiceSix, faDiceFour, faDiceThree, faDiceTwo } from '@fortawesome/free-solid-svg-icons'
 
library.add( faDiceFive, faDiceOne, faDiceSix, faDiceFour, faDiceThree, faDiceTwo);
function App() {
  return (
    <div className="App">
      <RollDice />
    </div>
  );
}

export default App;
