import React from "react";
import Logo from "../media/logo.JPG"
import style from "./style.css";


function Header () {
    return (
        <div id="header">
        {/* <!-- aqui inicia el contenedor del header de la pagina --> */}
        <div className="header-container">
            {/* <!-- Primer div que contiene el logo --> */}
            <div className="header-secondary-container">
                <div className="company-logo">
                    <img src={Logo} alt="logo_adso_pharmacy" />
                    
                </div>
{/* 
                <!-- El segundo div , contiene el search bar y los botones de user y carrito de compras --> */}
                <div className="company-access">
                    <input type="text" placeholder="Search.."/>
                    <a href="./Login.jsx" className="user">
                        <i className='bx bxs-user'></i>
                    </a>
                    <a to="/shopping_car" className="car">
                        <i className='bx bx-cart'></i>
                    </a>

                </div>

            </div>

            {/* <!-- El tercer div contiene el menu de la pagina --> */}
            <div className="navbar">
                <nav className="menu-wrapper">
                    <a href="#"> Home </a>
                    <a href="#"> Medicamentos </a>
                    <a href="#"> Suplementos </a>
                    <a href="#"> Suministros medicos </a>
                </nav>
            </div>

        </div>
    </div>

    );
    
}

export default Header;