import React from 'react'
import { Link } from "react-router-dom";

const LogisticsPage = () => {
    return (
        <>
            <section id="logistics" className="section">
                <div className="container">
                    <img src="./images/pages/logistics-top.png" alt="" />
                    <Link to={-1} className="link">
                        <span className='breadcrumb'>zurück</span>
                    </Link>
                    <h1 className='logistics_title'>Unsere Spezialisten in Einkauf und Vertrieb können Ihnen schnell, <br></br>kompetent und zuverlässig weiterhelfen.</h1>
                    <div className='logistics_rectangle'></div>
                    <div className='logistics_description'>
                        <img src="./images/pages/logistics-description.png" alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default LogisticsPage
