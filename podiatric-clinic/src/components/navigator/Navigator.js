import React from 'react'
import {Link} from 'react-router-dom'
import Grid from '@mui/material/Grid'
import MenuBar from '../menuBar/MenuBar'

import './Navigator.css'

export default function Navigator(){
    return(
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <div className="navigator">
                    <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                        <Link to="/">{'Podología V&M'}</Link>
                    </Grid>
                    <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                        <Link to="about">Quiénes somos</Link>
                    </Grid>
                    <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                        <Link to="preguntas">Preguntas frecuentes</Link>
                    </Grid>
                    <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                        <MenuBar/>
                    </Grid>
                </div>
            </Grid>
        </Grid>
    )
}