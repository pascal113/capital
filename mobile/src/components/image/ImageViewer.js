import React from 'react'

const ImageViewer = (props) => {
    const {img, textTop, fontSize, label} = props;

    return (
        <>
            <div style={{position: 'relative',  textAlign: 'center', width: '100%', color: 'white' }}>
                <img src={img} alt="slider-img" />
                <div style={{   
                    position: 'absolute', 
                    top: textTop,
                    fontFamily: 'Din Pro Bold',
                    fontSize: fontSize,
                    left: '50%', 
                    transform: 'translateX(-50%)' }}>
                    {label}
                </div>
            </div>
        </>
    );
}

export default ImageViewer