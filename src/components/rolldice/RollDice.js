import React, { Component } from 'react';
import Dice from '../dice/Dice';
import './RollDice.css';


class RollDice extends Component {
    render() {
        let dface='two'
        return(
            <div className='Rolldice'>

                <Dice icon={`dice-${dface}`}/>
            </div>
        )
    }
}

export default RollDice;