import React, { useEffect, useState } from 'react'
import './style.scss'
import { FaCode } from "react-icons/fa";



export default function Card(){

    const [ dados, setDados ] = useState([])

    useEffect(() => {
        const fetchgit = async() => {
            const req = await fetch(`https://api.github.com/users/thiagomendesdeveloper/repos`)
            const json = await req.json()
            console.log(json)
            setDados(json)
        }
        fetchgit()
    },[])

    return(
        <div className="git-grid">
            {dados.map( e =>{
                return(
                    <a key={e.id} href={e.html_url} target="_blank" className="git-card">
                        <FaCode className="icon-cod"/>
                        <h2 className="git-card-title">{e.name}</h2>
                        <p className="git-card-desc">{e.description}</p>
                        { e.language ? <h4 className="git-card-language">{e.language}</h4> : ''}
                    </a>
                )
            })}
        </div>
    )
}