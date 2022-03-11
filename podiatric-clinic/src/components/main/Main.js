import React from 'react'

import './Main.css'
import { content } from '../articles/Articles.content'

// Components
import Articles from '../articles/Articles'


export default function Main(){
    return (
        <div className="main">
            {content.map((article, index)=>
                <Articles title={article.title} paragraphs={article.paragraphs} key={index}/>)
            }
        </div>
    )
}