import React from "react";
import useState from "react-usestateref";
import DigitalRaffle from "../components/UI/digitalRaffle";
import TextField from '@mui/material/TextField';

import DigitRoll from "digit-roll-react";

const Home = () => {
    const [attendance, setAttendance, attendanceRef] = useState(0)

    return (
    
    <div>
        <div style={{marginTop:80}}>
            {/* <label>Attendance:</label>
            <input value={attendance} onChange={e => setAttendance(e.target.value)} /> */}
            <TextField
          id="outlined-number"
          label="Attendance"
          type="number"
          value={attendance} onChange={e => setAttendance(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
        </div>
        {attendanceRef.current ? <DigitalRaffle att={attendanceRef.current} /> : ''}
        
    </div>
    );
}

export default Home;