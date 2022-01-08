import { useState } from "react";
import { FaBars } from "react-icons/fa";
import './style.scss'


export default function Menu(){

    const [ menu, setMenu ] = useState(false);
    
    const click = () => setMenu(!menu);

    const menuVisible = {
        right: menu ? 0 : '100%'
    }

    console.log(menu)
    console.log(menuVisible)

    return(
        <>
        <div className="menu">
            <FaBars className="nav-bar" onClick={click} />
            <div className="menu-itens">
                <a class="light" href="#Home">Home</a>
                <a class="light" href="#Sobre">Sobre</a>
                <a class="light" href="#Projects">Projects</a>
            </div>
        </div>
        <div className="menu-mobile" style={menuVisible}>
            <h2 onClick={click}>X</h2>
            <div className="menu-mobile-itens">
                <a class="menu-mobile-item" href="#Home">Home</a>
                <a class="menu-mobile-item" href="#Sobre">Sobre</a>
                <a class="menu-mobile-item" href="#Projects">Projects</a>
            </div>
        </div>
        </>
    )
}