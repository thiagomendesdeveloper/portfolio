import React from 'react'
import './style.scss'
import { FiDownload } from "react-icons/fi";


export default function Button(props){
    return(
        <a className="button" download href={props.link}><FiDownload className="icon-download" />{props.name}</a>
    )
}