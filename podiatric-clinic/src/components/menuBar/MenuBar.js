import React from 'react'
import {Link} from 'react-router-dom'

export default function MenuBar(){
    return(
        <div className="menuBar">
            <Link to="/login" >Ingresar</Link>
        </div>
    )
}