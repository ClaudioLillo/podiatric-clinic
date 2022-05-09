import React from 'react'
import {Link} from 'react-router-dom' 
export default function AdminPanel({active}){
    return(
        <div className="adminPanel" hidden={active ? false : true}>
            <h2>Panel de Administración</h2>
            <Link to="login">Ingresar</Link>
        </div>
    )
}