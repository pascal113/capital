import React , { useState } from 'react'

const AdviceCard = ({data}) => {
    const [over, setOver] = useState(false);
    const { btnText, infoList } = data;
    
    return (
        <div className='advice_card'>
            <button type="button" className="base_button service_button" 
            onMouseOver={() => setOver(true)}
            onMouseOut={() => setOver(false)}
            >{btnText}</button>
            
            { over && (
                <div className='service_content'>
                    <ul>
                    {infoList.map((item, index) => {
                        return (
                            <li key={index}><span>{item}</span></li>
                        );
                    })}
                </ul>
                </div>
            )}
        </div>
    )
}

export default AdviceCard