import React from 'react'
import { MdEmail } from "react-icons/md";
import dev from '../../assets/web-dev.png'
import './style.scss'


export default function Footer(){
    return(
        <div class="section-footer">
            <div class="container">
                <div className="flex-footer">
                    <div>
                        <h3>Entre em contato!</h3>
                        <div className="contato-footer">
                            <MdEmail className="email"/>
                            <p>thiagomendessilva77@gmail.com</p>
                        </div>
                    </div>
                        <img src={dev} className="image-dev" title="image-dev" />
                </div>
            </div>
        </div>
    )
}