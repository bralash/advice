import './Slip.css'
import divider from './divider.svg'
import dice from './dice.svg'
import React, { useState, useEffect } from 'react'

const Slip = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [slip, setSlip] = useState([]);
    const [showSlip, setShowSlip] = useState(false)

    const handleClick = () => {
        setIsLoading(true);
        setShowSlip(true);
        const url = 'https://api.adviceslip.com/advice';
        fetch(url)
            .then((response) => response.json())
            .then(json => {
                setIsLoading(false)
                setSlip(json['slip'])
            })
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        const url = 'https://api.adviceslip.com/advice';
        fetch(url)
            .then((response) => response.json())
            .then((json) => setSlip(json['slip']))
            .catch((error) => console.log(error));
    },[]);

    useEffect(() => {
        if(slip.length !== 0) {
            setIsLoading(false)
        }
        // console.log(slip)
    }, [slip])

    let slipId = slip.id
    let slipAdvice = isLoading ? "Loading..." : slip.advice
    
    return (
        <div className="Slip">
            <span className='Slip-Id'>ADVICE #{slipId}</span>
            
            <div className='Advice'>“{slipAdvice}”</div>
            <img src={divider} className='Divider' alt='divider'/>
            <div className='Dice' onClick={handleClick}>
                <img src={dice} alt='dice'/>
            </div>
        </div>
    )
}

export default Slip