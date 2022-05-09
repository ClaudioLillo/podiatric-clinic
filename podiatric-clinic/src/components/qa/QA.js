import React, {useState} from 'react'

import './QA.css'

export default function QA(){
    const [open, setOpen] = useState({})

    const handleOpen = (e) => {
        console.log(e.target.name)
        setOpen({...open, [e.target.name] : open[e.target.name] || true})
    }
    return(
        <div className="qa">
            <div className="expandible-card">
                <h1 name='tratamientos' onClick={handleOpen}>¿Qué tratamientos realizamos?</h1>
                {open['tratamientos']?
                <p className="expandible"></p>
                :null}
            </div>
        </div>
    )
}