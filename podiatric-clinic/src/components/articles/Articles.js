import React from 'react'

export default function Articles({title, paragraphs}){
    return(
        <div>
            <h1>{title}</h1>
            {paragraphs.map((paragraph, index)=>
            <p key={index}>{paragraph}</p>)}
        </div>
    )
}