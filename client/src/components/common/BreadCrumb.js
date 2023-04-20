import React from 'react'
import { Link } from "react-router-dom";

const BreadCrumb = (props) => {

    return (
        <div className='breadcrumb'>
            <Link to={-1} className="link">
                <span className='breadcrumb_return'>zurück</span>
            </Link>
            {props.hasOwnProperty('detail_info') && (<span className='breadcrumb_detail'>{props.detail_info}</span>)}
        </div>
    )
}

export default BreadCrumb