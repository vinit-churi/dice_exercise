import React, { Component } from 'react';
import './Dice.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class Dice extends Component {
    render() {
        return(
            <div className='dice'>
                this is dice
                <FontAwesomeIcon icon='faDice' />
                <FontAwesomeIcon icon={this.props.face1} />
                <FontAwesomeIcon icon={this.props.face2} />

                

            </div>
        )
    }
}

export default Dice;