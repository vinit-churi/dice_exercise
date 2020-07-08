import React, { Component } from 'react';
import Dice from '../dice/Dice';
import './RollDice.css';


class RollDice extends Component {
    static defaultProps={
        sides: ['one','two','three','four','five','six']
    }
    constructor(props){
        super(props);
        this.state ={
            diceOne: 'one',
            diceTwo: 'one',
            rolling: false
        }
        this.shuffleDice = this.shuffleDice.bind(this);
    }


    randomdice(){
        return this.props.sides[Math.floor(Math.random() * 5)];  
        
    };

    shuffleDice() {
        this.setState({
            diceOne: this.randomdice(),
            diceTwo: this.randomdice(),
            rolling: true,
        });

        setTimeout(() => {
            this.setState({rolling:false})
        },1000)
    }

    render() {
        return(
            <div className='Rolldice'>
                <Dice icon={`dice-${this.state.diceOne}`} rolling={this.state.rolling}/>
                <Dice icon={`dice-${this.state.diceTwo}`} rolling={this.state.rolling}/>
        <button className='Rolldice__button' onClick={this.shuffleDice} disabled={this.state.rolling}>{this.state.rolling ? "Rolling..." : "Roll Dice!"}</button>
            </div>
        )
    }
}

export default RollDice;