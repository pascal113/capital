import React from 'react';

const Preloader = () => {

    return (
        <div id="pre-load"> 
            <div id="loader" className="loader">
                <div className="loader-container">
                    <div className="loader-icon">
                        <img src="./images/loading/logo.svg" height="40" alt="Initial loading..." />
                    </div>
                    <div className='loader-label'>Wird geladen...</div>
                </div>
                
            </div>
        </div>
    );
};

export default Preloader;