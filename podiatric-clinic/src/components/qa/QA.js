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
            <div className="qa-card">
                <h1 name='tratamientos' id="tratamientos" onClick={handleOpen}>¿Qué es la Podología?</h1>
                <p>
                    La podología es la rama de las ciencias de la salud, que se ocupa de la prevención, tratamiento y rehabilitación de las patologías del pie humano
                </p>
            </div>
            <div className="qa-card">
                <h1 name='tratamientos' id="tratamientos" onClick={handleOpen}>¿Por qué ir al podólogo?</h1>
                <p>
                    Tanto en la infancia, como en la juventud o la edad adulta, nos podemos ver afectados por dolencias en los pies, que habitualmente se deben a defectos
                    en la pisada. Si no tratamos a tiempo estas alteraciones, pueden generar problemas de equilibrio que derivan en lesiones o patologías no solo de los pies,
                    sino que también en otras partes del cuerpo
                </p>
            </div>
            <div className="qa-card">
                <h1 name='tratamientos' id="tratamientos" onClick={handleOpen}>¿Cuándo debo acudir a un podólogo?</h1>
                <p>
                    Si usted nota anomalías como dolor, picazón o cambio de coloración, tanto en uñas como en la piel de los pies, debe acudir a un podólogo. Lo mismo, en el caso
                    de presentar deformación de las uñas o durezas.
                </p>
            </div>
            <div className="qa-card">
                <h1 name='tratamientos' id="tratamientos" onClick={handleOpen}>¿Cuáles son los cuidados que debemos dar a los bebés en relación a sus pies?</h1>
                <p>
                    Es recomendable que las madres reciban recomendaciones en torno al cuidado de los pies de su bebé con la finalidad de prevenir lesiones. Algunas de las
                    más importantes son :
                </p>
                <ul>
                    <li>Los niños que aun no caminan <strong>no deben usar calzado</strong></li>
                    <li>Debe revisar períodicamente los pies de su bebé, en busca de enrojecimiento o inflamación, dado que en ocasiones se enredan cabellos entre los dedos, lo cual impide una correcta irrigación</li>
                    <li>Es una buena práctica colocar los calcetines al revés o evitar que estos tengan costuras</li>
                    <li>Después del baño, es importante secar prolijamente los pliegues y entre los dedos</li>
                </ul>
            </div>
            <div className="qa-card">
                <h1 name='tratamientos' id="tratamientos" onClick={handleOpen}>¿Por qué es importante acudir al podólogo si tengo diabetes?</h1>
                <p>
                    Una lesión en una persona con diabetes puede generar complicaciones, como úlceras que en casos graves pueden conducir incluso a una amputación.
                    En relación a las personas diabéticas, la principal misión del podólogo es prevenir la ocurrencia de lesiones.
                </p>
            </div>
            <div className="qa-card">
                <h1 name='tratamientos' id="tratamientos" onClick={handleOpen}>¿Por importante la revisión podológica en deportistas?</h1>
                <p>
                    La salud de los pies se relaciona directamente con el rendimiento deportivo en la mayoría de los casos, dado que de su funcionamiento
                    dependen todas las demás estructuras del sistema músculo-esquelético, las cuales permiten el desplazamiento del cuerpo. Debido a esto, una afección
                    de origen podológico menor puede derivar en lesiones más serias en el caso de un deportista.
                </p>
                <p>
                    Una revisión periódica puede detectar alteraciones, permitiendo prevenir lesiones de tipo muscular y tendinoso.
                </p>
            </div>
        </div>
    )
}