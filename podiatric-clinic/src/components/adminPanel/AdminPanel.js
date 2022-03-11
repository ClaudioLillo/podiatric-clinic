import React from 'react'

export default function AdminPanel({active}){
    return(
        <div className="adminPanel" hidden={active ? false : true}>
            <h2>Panel de Administración</h2>
        </div>
    )
}