import React, { Component } from 'react';
import Dice from '../dice/Dice';
import './RollDice.css';


class RollDice extends Component {
    constructor(props){
        super(props);
        this.state ={
            diceOne: 'one',
            diceTwo: 'two'
        }
        this.shuffleDice = this.shuffleDice.bind(this);
    }


    randomdice(){
        const num= Math.floor(Math.random() * 6) + 1;

        switch (num) {
            case 1 :
                return 'one';
            case 2:
                return 'two';
            case 3:
                return 'three';
            case 4:
                return 'four';
            case 5:
                return 'five';
            case 6:
                return 'six';
            default:
                return 'one';
        }
        
    };

    shuffleDice() {
        this.setState({
            diceOne: this.randomdice(),
            diceTwo: this.randomdice(),
        })
    }

    render() {
        return(
            <div className='Rolldice'>
                <Dice icon={`dice-${this.state.diceOne}`}/>
                <Dice icon={`dice-${this.state.diceTwo}`}/>
                <button className='Rolldice__button' onClick={this.shuffleDice}>shuffle</button>
            </div>
        )
    }
}

export default RollDice;