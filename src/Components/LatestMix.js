import React from 'react'
// import { Link } from 'react-router-dom'
import '../App.css';

export default function LatestMix({title, genre, scLink, isDayTime}){

    return(
        <div >
            <div className={isDayTime ? "Latest-title" : "Latest-title-dark"}>{title}</div>
            <div className={isDayTime ? "Latest-genre" : "Latest-genre-dark"}>{genre}</div>
            <a href={scLink} target="_blank" rel="noreferrer"><img className="App-latest" src={process.env.PUBLIC_URL + '/Images/' + title + '.jpg'} alt={title} />  </a>
        </div>
    )
}