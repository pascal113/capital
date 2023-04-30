import React from 'react'
import { Link } from "react-router-dom";
import BreadCrumb from '../components/common/BreadCrumb';

const Dietary = () => {
    return (
        <>
            <section id="dietary" className="section">
                <div className="container">
                    <img src="/images/pages/dietary/dietary-top.png" alt="" />
                    <BreadCrumb />
                    <div className='dietary_frame'>
                        <img src="/images/pages/dietary/Frame.png" alt="" />
                    </div>
                    
                    <p className='dietary_description'>Diese Unterseite wird zur Zeit aktualisiert und überarbeitet…</p>
                </div>
            </section>
        </>
    )
}

export default Dietary