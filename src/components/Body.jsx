import React, {useState, useEffect, useRef } from "react";
import './Body.css'
import Lottie from "lottie-web";
import animationData from '../assets/lotties/working.json';

export default function Pomodoro(){
    const container = useRef(null)

    useEffect(() => {
      Lottie.loadAnimation({
        container: container.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: animationData
      });
      return () => { Lottie.destroy() }
      
    }, [])

    const [minutes, setMinutes] = useState(25);
    const [seconds, setSeconds] = useState (0);
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
            <div className="body">
                <div className="cat-animation">
                    <div className="container" ref={container}>
                    </div>
                </div>
                <div className="pomodoro">
                        <div className="message">
                            {displayMessage && <div>Hora do intervalo! Sua nova sessão começa em: </div>}
                        </div>
                        <div className="timer">{timerMinutes}:{timerSeconds}</div>
                    </div>
            </div>
        </>
    )
    
}