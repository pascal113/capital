import React from 'react'

const ImageViewer = (props) => {
    const data = props.data;
    
    return (
        <>
            <div style={{position: 'relative',  textAlign: 'center', width: '100%', color: `${data.textColor}` }}>
                <img src={data.img} alt="slider-img" />
                <div style={{   position: 'absolute', 
                    top: data.textTop,
                    fontFamily: data.fontFamily,
                    fontSize: data.fontSize,
                    left: '50%', 
                    transform: 'translateX(-50%)' }}>
                    {data.label}
                </div>
            </div>
        </>
    );
}

export default ImageViewer