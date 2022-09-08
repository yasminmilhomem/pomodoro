import React, {useState, useEffect} from "react";
import work from './work.gif';

export default function Pomodoro(){
    const [minutes, setMinutes] = useState(25);
    const [seconds, setSeconds] = useState (5);
    const [displayMessage, setDisplayMessage] = useState (false);
    
    useEffect (() => {
        let interval = setInterval(() => {
            clearInterval(interval);

            if (seconds === 0) {
                if (minutes !== 0){
                    setSeconds(59);
                    setMinutes(minutes - 1);
                } else {
                    let minutes = displayMessage ? 24 : 4;
                    let seconds = 59;

                    setSeconds (seconds);
                    setMinutes (minutes);
                    setDisplayMessage(!displayMessage);
                }

            } else {
                setSeconds(seconds - 1);
            }

        }, 1000)
    }, [seconds]);

    const timerMinutes = minutes < 10  ? `0${minutes}` : minutes;
    const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

    return(
        <>
        <img src={work} alt="working..."
        height={300}
        width={300}
        style= {{alignSelf: 'center'}}

        />
        <div className="pomodoro">
                <div className="message">
                    {displayMessage && <div>Hora do intervalo! Sua nova sessão começa em: </div>}
                </div>
                <div className="timer">{timerMinutes}:{timerSeconds}</div>
            </div></>
    )
    
}