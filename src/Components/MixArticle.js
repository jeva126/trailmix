import React from 'react'

import '../App.css';


export default function MixArticle({title, genre, date, scLink, isDayTime}){

    return(
        <div className="MixArticle-container">
            <div className={isDayTime ? "MixArticle-title" : "MixArticle-title-dark"}>{title}</div>
            {/* <div className={isDayTime ? "MixArticle-genre" : "MixArticle-genre-dark"}>{genre}</div> */}
            <div className="MixArticle-date">{date}</div>
            <a href={scLink} target="_blank" rel="noreferrer"><img className="MixArticle-photo" src={process.env.PUBLIC_URL + '/Images/' + title + '.jpg'} alt={title} />  </a> 
        </div>
    )
}
