import React from 'react'
import './Profile.css'


export default function Profile(){
    return(
        <div className="profile">
            <div className="profile-card">
                <div className="profile-card-header">
                    <h1>María Isabel Vilches Navarro</h1>
                </div>
                <div className="profile-card-body">
                    <div className="education">
                        <p className="degree">Técnico de Nivel Superior en Podología Clínica</p>
                        <p className="institution">Centro de Formación Técnica Santo Tomás</p>
                        <p className="degree">Melbourne Institute of Podiatry</p>
                        <p className="institution">Certificado en Tratamiento de las patologías del antepie</p>
                        <p className="degree">Curso Seminario de Bases Anatómicas para el Estudio de la Podología Clínica</p>
                        <p className="institution">Centro de Formación Técnica AIEP</p>
                    </div>
                </div>
                
            
            
            </div>
        </div>
    )
}