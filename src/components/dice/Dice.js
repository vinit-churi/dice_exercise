import React, { Component } from 'react';
import './Dice.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class Dice extends Component {
    render() {
        return(
            <div className='dice'>
                <FontAwesomeIcon icon={this.props.icon} className={`${this.props.rolling && 'rolling'}`} size='10x' />
            </div>
        )
    }
}

export default Dice;