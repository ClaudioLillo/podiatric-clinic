import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import AdminPanel from '../adminPanel/AdminPanel'

import './Navigator.css'

export default function Navigator(){
    const [active, setActive] = useState(false)
    const handleClick = () =>{
        setActive(true)
    }
    return(
        <div className="navigator">
            <Link to="/">Podología Integral María Isabel Vilches</Link>
            <Link to="/">Home</Link>
            <Link to="about">Quiénes somos</Link>
            <Link to="qa">Preguntas frecuentes</Link>
            <MenuIcon onClick={handleClick}/>
            <AdminPanel active={active}/>
        </div>
    )
}