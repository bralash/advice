import './Slip.css'
import divider from './divider.svg'
import dice from './dice.svg'

const Quote = () => {
    return (
        <div className="Slip">
            <span className='Slip-Id'>ADVICE #117</span>
            <div className='Advice'>“It is easy to sit up and take notice, what's difficult is getting up and taking action.”</div>
            <img src={divider} className='Divider' alt='divider'/>
            <div className='Dice'>
                <img src={dice} alt='dice'/>
            </div>
        </div>
    )
}

export default Quote