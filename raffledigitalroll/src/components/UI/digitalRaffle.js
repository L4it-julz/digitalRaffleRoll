import React from "react";
import useState from "react-usestateref";
import DigitRoll from "digit-roll-react";
import './index.css'

import Button from '@mui/material/Button';

const DigitalRaffle = (props) => {
  console.log('rem', props.att)
  const [member, setMember, memberRef] = useState(props.att)
  const [num, setNum, numRef] = useState(0)

    const handleClick = () => {
           setNum(Math.floor(Math.random() * parseInt(memberRef.current)))
    }

 
    return (
        <div className="App">
        <DigitRoll num={numRef.current} length={4} divider="" delay="0.7" />
        <Button variant="contained" color="success" size="large" onClick={handleClick}>
         PLAY ROLL!
        </Button>
      </div>
    );
}

export default DigitalRaffle;