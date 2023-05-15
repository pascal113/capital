import React from 'react'
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next'
import i18n from "i18next";

const BreadCrumb = (props) => {
    const { t }  = useTranslation(['page']);
    return (
        <div className='breadcrumb'>
            <Link to={-1} className="link">
                <span className='breadcrumb_return'>{t('breadcrumb')}</span>
            </Link>
            {props.hasOwnProperty('detail_info') && (<span className='breadcrumb_detail'>{props.detail_info}</span>)}
        </div>
    )
}

export default BreadCrumb