import React, { Component } from 'react';
import Dice from '../dice/Dice';
import './RollDice.css';
import { faDiceFive, faDiceOne } from '@fortawesome/free-solid-svg-icons';

class RollDice extends Component {
    render() {
        return(
            <div className='Rolldice'>
                <Dice face1={faDiceFive}/>
                <Dice face2={faDiceOne}/>
            </div>
        )
    }
}

export default RollDice;