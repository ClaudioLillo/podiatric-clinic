import React from 'react'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

import './Contact.css'

export default function Contact(){
    return(
        <div className="contact">
            <div className="contact-card">
                <h1>María Isabel Vilches</h1>
                <h2>Técnico en Podología Clínica</h2>
                <div className="contact-item">
                    <PhoneAndroidIcon/><p>&nbsp;+569 83727762</p>
                </div>
                <div className="contact-item">
                    <WhatsAppIcon/><a href="https://wa.me/+56983727762" target="_blank" rel="noopener noreferrer">&nbsp;+569 83727762</a>
                </div>
                <div className="contact-item">
                    <EmailIcon/><p>&nbsp;misabel.vilnavarro@gmail.com</p>
                </div>
            </div>
        </div>
    )
}