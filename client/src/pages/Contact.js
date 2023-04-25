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
    components: {
        MuiInputLabel: {
            defaultProps: {
                sx: {
                    fontSize: "12px",
                },
            },
        },
        MuiOutlinedInput: {
            defaultProps: {
                sx: {
                    fontSize: "12px",
                }
            },
        }
    },
});


const ValidationTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: '#777978',
        borderWidth: 1,
    },
    '& label.Mui-valid': {
        color: '#009220',
        borderWidth: 1,
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


const InputTextField = styled(TextField)({
    "& .MuiOutlinedInput-root": {
        backgroundColor: "#FDFDFD",

        '& fieldset': {
            border: '1px solid #959595',
        },

        "&:hover fieldset": {
            border: '1px solid #959595',
        },

        '&.Mui-focused fieldset': {
            border: '2px solid rgba(72, 128, 255, 0.4)',
        },
    },
});


;

const Contact = () => {
    const [status, setStatus] = useState("Submit");
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        
        const { department_select, company_name, phone_number, company_address, plz, email, message } = e.target.elements;
        let details = {
            department: department_select.value,
            company_name: company_name.value,
            phone_number: phone_number.value,
            company_address: company_address.value,
            plz: plz.value,
            email: email.value,
            message: message.value,
        };
        console.log('value', details);
        try {
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
        } catch (error) {
            console.log('Fetch error: ', error);
        }
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
                            <form className='contact_form' onSubmit={handleSubmit} method="POST">
                                <div className='form_item_title'><span>Nehmen Sie Kontakt mit uns auf</span></div>
                                <div className='form_item_comment'><span>Mit * markierte Felder sind Pflichtfelder.</span></div>
                                <div className='form_item_department'>
                                    <span className="label">An welche Abteilung möchten Sie sich wenden?</span>
                                    <CustomDropdown name='department_select' options={[
                                    {name: 'Arzneimittelsicherheit', value: 'Arzneimittelsicherheit', defaultValue: true},
                                    {name: 'Biometrie', value: 'Biometrie'},
                                    {name: 'Info-Center', value: 'Info-Center'},
                                    {name: 'Beratung', value: 'Beratung'}
                                    ]} onChange={(e) => {console.log(e.target.value)}} style={{width: '192px', padding: '7px 0px 7px 9px'}} />
                                </div>
                                <div className='form_item_company'>
                                    <ValidationTextField
                                        label="Firmenname"
                                        variant="outlined"
                                        placeholder="Firmenname"
                                        name="company_name"
                                        size="small"
                                        sx={{
                                            width: { sm: 192, md: 300 },
                                            
                                        }}
                                    />
                                    <ValidationTextField
                                        label="Firmenrufnummer"
                                        variant="outlined"
                                        placeholder="Rufnummer"
                                        name="phone_number"
                                        size="small"
                                        sx={{
                                            width: { sm: 192, md: 300 },
                                        }}
                                    />
                                </div>
                                <div className='form_item_plz'>
                                <ValidationTextField
                                        label="Firmenanschrift"
                                        variant="outlined"
                                        placeholder="Firmenanschrift"
                                        name="company_address"
                                        size="small"
                                        sx={{
                                            width: { sm: 192, md: 398 },
                                        }}
                                    />
                                    <ValidationTextField
                                        label="PLZ"
                                        variant="outlined"
                                        placeholder="PLZ*"
                                        name="plz"
                                        size="small"
                                        sx={{
                                            width: { sm: 192, md: 398 },
                                        }}
                                    />
                                </div>
                                <div className='form_item_email'>
                                    <ValidationTextField
                                        label="E-Mail Adresse"
                                        variant="outlined"
                                        placeholder="E-Mail Adresse*"
                                        name="email"
                                        size="small"
                                        sx={{
                                            width: { sm: 192, md: 398 },
                                        }}
                                    />
                                </div>
                                <div className='form_item_message'>
                                    <div className='label'>Ihre Nachricht:</div>
                                    <div className='message'>
                                        <InputTextField
                                            name="message"
                                            rows={8}
                                            multiline
                                            size="small"
                                            sx={{
                                                width: { sm: 402, md: 402 },
                                            }}
                                        />
                                    </div>
                                </div>
                                <button type="submit" className="base_button form_item_button">Absenden</button>
                            </form>
                        </ThemeProvider>                        
                        <div className='contact_map message'>
                            <img src="/images/pages/contact/map.png" alt="" />
                        </div>   
                    </div>

                </div>
            </section>
        </>
    )
}

export default Contact