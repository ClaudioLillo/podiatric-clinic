import React from 'react'
import Grid from '@mui/material/Grid'

import './Main.css'

// The contents of this component will be hardcoded, while I discover a good way to stablish a standard

export default function Main(){
    return (
        <div className="main">
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <p className="main-text">
                        En V&M Podología Integral, ofrecemos atención de caracter general, así como también, tratamientos preventivos y terapéuticos especializados para pacientes
                        pediátricos, crónicos, geriátricos y deportistas.
                    </p>
                </Grid>
                <Grid item xs={12} md={9} lg={8}>
                    <ul>
                        <li>Atención podológica básica (pie sano)</li>
                        <li>Atención podológica de uñas hipertróficas (engrosadas)</li>
                        <li>Atención geriátrica (a partir de 65 años)</li>
                        <li>Uñas encarnadas (tratamiento y prevención)</li>
                        <li>Tratamiento de micosis (hongos)</li>
                        <li>Reconstrucción ungueal (uñas que han sufrido traumatismo o deformación)</li>
                        <li>Técnicas de ortonixia (corrección de la morfología de la uña)</li>
                        <li>Atención domiciliaria a pacientes con movilidad reducida y postrados</li>
                        <li>Atención a ELEAM y residencias para la tercera edad</li>
                        <li>Asesoría en prevención de enfermedades que afectan a los pies dirigida a escuelas deportivas, establecimientos educacionales y organizaciones de adultos mayores</li>
                    </ul>
                </Grid>
                <Grid item xs={12} md={3} lg={4}>
                    <img className="main-image" src="/images/sillon.jpg" alt="sillon"></img>
                </Grid>
            
            
            <div className="main-card">

            </div>
            </Grid>
        </div>
    )
}