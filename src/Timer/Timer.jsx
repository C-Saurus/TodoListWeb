import React, { useEffect, useState } from 'react'

const Timer = (props) => {
    const timer = props.value;
    const [distance, setDistance] = useState(timer - new Date().getTime());
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    useEffect(() => {
        const interval = setInterval(() => {
            setDistance(timer - new Date().getTime());
            
        }, 1000)
        return () => {
            clearInterval(interval)
        };
    }, [timer]);
    if (distance === 0) {
        alert("Deadlineeeeeeee")
        
    }
    return (
        <div>
            {   
                distance > 0 ?
                <div>{days}d{hours}h{minutes}m{seconds}s</div>
                : <div>Hết giờ</div>
            }
        </div>
    )
}

export default Timer