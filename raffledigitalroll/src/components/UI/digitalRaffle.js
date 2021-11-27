import React, { Component } from "react";
import DigitRoll from "digit-roll-react";
import './index.css'

import Button from '@mui/material/Button';

class DigitalRaffle extends Component {
  state = { num: 0, member: 1000 };

  refresh = () => {
    this.setState({
      num: Math.floor(Math.random() * 1000)
    });
  };

handleClick = () => {
    this.setState({
        num: Math.floor(Math.random() * this.state.member)
      });
  }

  render() {
    return (
        <div className="App">
        <DigitRoll num={this.state.num} length={4} divider="" delay="0.8" />
        <Button variant="contained" color="success" size="large" onClick={this.handleClick}>
         PLAY ROLL!
        </Button>
      </div>
    );
  }
}

export default DigitalRaffle;