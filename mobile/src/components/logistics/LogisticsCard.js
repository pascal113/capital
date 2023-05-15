import React from 'react';

import { Link } from 'react-router-dom';

const LogisticsCard = ({props}) => {

    const { imgAddr, infoText, btnText, linkAddr } = props;

    return (
        <div className="logistics_card">
            <img src={imgAddr} alt="logistics-img" />
            <h2 className='logistics_card_text'>
                {infoText}
            </h2>
            <Link to={linkAddr}>
                <button
                    type="button"
                    className="base_button card_button"
                >
                    {btnText}
                </button>
            </Link>
        </div>
    );
};

export default LogisticsCard;