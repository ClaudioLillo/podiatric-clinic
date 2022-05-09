import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

import './MenuBar.css'

export default function MenuBar(){

    const [open, setOpen] = useState(false)

    console.log("open: ", open)

    const handleOpen = () =>{
        setOpen(!open)
    } 

    return(
        <div>
            {
            open ? 
            <div className="menuBar">
                <ExitToAppIcon className="white-icon menuBar-option" onClick={handleOpen}/>
                <Link to="/contacto" className="menuBar-option" onClick={handleOpen}>Contacto</Link>
                <Link to="/login" className="menuBar-option">Iniciar sesión</Link>
            </div>
            : <MenuIcon onClick={handleOpen}/>
            }
        </div>
    )
}