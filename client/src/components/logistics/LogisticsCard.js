import React from 'react';
import ImageViewer from '../../components/image/ImageViewer';
import { Link } from 'react-router-dom';

const LogisticsCard = ({props}) => {

    const { imgAddr, infoText, btnText, linkAddr, image_label } = props;

    return (
        <div className="logistics_card">
            <ImageViewer 
                        img={imgAddr}
                        textTop="130px"
                        fontSize="20px"
                        label={image_label}
            />
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