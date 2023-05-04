import React, {useEffect, useState} from 'react'
import { useTranslation } from 'react-i18next'

const Dosage = ({data}) => {
    const { t }  = useTranslation(['page']);
    const [over, setOver] = useState(false);
    const { id, imgSrcHover, imgSrc } = data;
    const itemData = t('production.dosageData', { returnObjects: true }).filter(item => (item.id === id));
    return (
        <div className='production_dosage_column'>
            <div className='dosage_image'
            onMouseOver={() => setOver(true)}
            onMouseOut={() => setOver(false)}
            >
                <img
                src={over ? imgSrcHover : imgSrc}
                alt="dosage"
                />
            </div>

            { over && (itemData.length > 0) && (
                <>
                    <div className='subtitle'>{itemData[0].title}</div>
                    <div className='production_dosage_column_box'>
                        <ul>
                            {itemData[0].items.map((item) => {
                                return (
                                    <li key={item}><span>{item}</span></li>
                                );
                            })}
                        </ul>
                    </div>
                    
                </>
            )}
        </div>
    )
}

export default Dosage