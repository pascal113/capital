import React, {useState} from 'react'
import { Link } from "react-router-dom";
import BreadCrumb from '../components/common/BreadCrumb';
import CustomDropdown from '../components/dropdown/CustomDropdown';
import styled, { css } from 'styled-components';
import { TextField } from "@mui/material";
import { createTheme, ThemeProvider, Typography } from "@material-ui/core";

const theme = createTheme({
    typography: {
        fontFamily: ["DIN Pro Regular", "DIN Pro Bold"].join(","),
        fontSize: 12,
    },
});


const ValidationTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: '#777978',
    },
    '& label.Mui-valid': {
        color: '#009220',
    },

    '& input:valid + fieldset': {
        borderColor: '#777978',
        borderRadius: 0,
        borderWidth: 1,
        padding: '9px 12px 7px 9px',
        fontFamily: 'Din Pro Regular',
        color: '#B3B3B3',
    },
    '& input:invalid + fieldset': {
    borderColor: '#D30000',
    borderWidth: 1,
    },
    '& input:valid:focus + fieldset': {
    //padding: '4px !important', // override inline-style
    padding: '9px 12px 7px 9px',
    borderColor: '#777978',
    },
});

const Contact = () => {
    const [status, setStatus] = useState("Submit");
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        const { name, email, message } = e.target.elements;
        let details = {
        name: name.value,
        email: email.value,
        message: message.value,
        };
        let response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(details),
        });
        setStatus("Submit");
        let result = await response.json();
        alert(result.status);
    };

    return (
        <>
            <section id="contact" className="section">
                <div className="container">
                    <img src="/images/pages/contact/contact-top.png" alt="" />
                    <BreadCrumb />
                    <h1 className='contact_title'>Sie haben Fragen?</h1>
                    <div className='contact_rectangle'></div>
                    <div className="contact_position">
                        <div className="position_icon"><img src="/images/pages/contact/position.png" alt="" /></div>
                        <div className='headquarters'>ZENTRALE</div>
                        <div className="position_address">
                            <h4>German Capital Pharma GmbH</h4>
                            <p>Badstr. 20 13357 Berlin, Deutschland</p>
                        </div>
                        
                    </div>
                    <div className='contact_form_wrapper'>
                        <ThemeProvider theme={theme}>
                            <form className='contact_form'onSubmit={handleSubmit} method="POST">
                                
                                <div className='form_title'><span>Nehmen Sie Kontakt mit uns auf</span></div>
                                <div className='form_comment'><span>Mit * markierte Felder sind Pflichtfelder.</span></div>
                                <div className='form_department'>
                                    <span className="label">An welche Abteilung möchten Sie sich wenden?</span>
                                    <CustomDropdown name='custom_select' options={[
                                    {name: 'Arzneimittelsicherheit', value: 'Arzneimittelsicherheit', defaultValue: true},
                                    {name: 'Biometrie', value: 'Biometrie'},
                                    {name: 'Info-Center', value: 'Info-Center'},
                                    {name: 'Beratung', value: 'Beratung'}
                                    ]} onChange={(e) => {console.log(e.target.value)}} style={{width: '192px', padding: '7px 0px 7px 9px'}} />
                                </div>
                                <div className='form_company'>
                                    <ValidationTextField
                                        label="Firmenname"
                                        variant="outlined"
                                        defaultValue="Berlin"
                                        id="validation-outlined-input"
                                        size="small"
                                    />
                                    <ValidationTextField
                                        label="Firmenname"
                                        variant="outlined"
                                        defaultValue="Berlin"
                                        id="validation-outlined-input"
                                        size="small"
                                    />
                                </div>
                                
                            </form>
                        </ThemeProvider>                        
                        <div className='contact_map'>
                            <img src="/images/pages/contact/map.png" alt="" />
                        </div>   
                    </div>

                </div>
            </section>
        </>
    )
}

export default Contact